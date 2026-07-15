(() => {
  "use strict";

  const root = document.documentElement;
  const form = document.querySelector("#giveaway-form");
  const submitButton = document.querySelector("#giveaway-submit");
  const alertBox = document.querySelector("#giveaway-form-alert");
  const countdown = document.querySelector("#giveaway-countdown");

  const startAt = parseDate(root.dataset.giveawayStart);
  const endAt = parseDate(root.dataset.giveawayEnd);

  function parseDate(value) {
    if (!value || value.includes("{{")) return null;
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? null : date;
  }

  function setAlert(message, state = "info") {
    if (!alertBox) return;
    alertBox.textContent = message;
    alertBox.dataset.state = state;
    alertBox.hidden = false;
    alertBox.focus?.();
  }

  function clearAlert() {
    if (!alertBox) return;
    alertBox.hidden = true;
    alertBox.textContent = "";
    delete alertBox.dataset.state;
  }

  function setSubmitting(isSubmitting) {
    if (!submitButton) return;
    submitButton.disabled = isSubmitting;
    submitButton.setAttribute("aria-busy", String(isSubmitting));
  }

  function updateFieldValidity() {
    if (!form) return true;
    let valid = true;

    for (const field of form.querySelectorAll("input, textarea, select")) {
      if (field.type === "hidden" || field.name === "faxNumber") continue;
      const fieldValid = field.checkValidity();
      field.setAttribute("aria-invalid", String(!fieldValid));
      if (!fieldValid) valid = false;
    }

    return valid;
  }

  function getPromotionState(now = new Date()) {
    if (!startAt || !endAt) return "misconfigured";
    if (now < startAt) return "upcoming";
    if (now > endAt) return "closed";
    return "open";
  }

  function formatDuration(milliseconds) {
    const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    if (days > 0) return `${days}d ${hours}h ${minutes}m`;
    return `${hours}h ${minutes}m ${seconds}s`;
  }

  function updateCountdown() {
    if (!countdown) return;
    const now = new Date();
    const state = getPromotionState(now);

    if (state === "misconfigured") {
      countdown.textContent = "Dates pending";
      if (submitButton) submitButton.disabled = true;
      return;
    }

    if (state === "upcoming") {
      countdown.textContent = `Opens in ${formatDuration(startAt - now)}`;
      if (submitButton) submitButton.disabled = true;
      return;
    }

    if (state === "closed") {
      countdown.textContent = "Entries closed";
      if (submitButton) submitButton.disabled = true;
      return;
    }

    countdown.textContent = formatDuration(endAt - now);
    if (submitButton && submitButton.getAttribute("aria-busy") !== "true") {
      submitButton.disabled = false;
    }
  }

  function payloadFromForm(formElement) {
    const data = new FormData(formElement);
    return {
      fullName: String(data.get("fullName") || "").trim(),
      businessName: String(data.get("businessName") || "").trim(),
      businessRole: String(data.get("businessRole") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      businessWebsite: String(data.get("businessWebsite") || "").trim(),
      industry: String(data.get("industry") || "").trim(),
      location: String(data.get("location") || "").trim(),
      websiteProblem: String(data.get("websiteProblem") || "").trim(),
      faxNumber: String(data.get("faxNumber") || "").trim(),
      eligibilityAgreement: data.get("eligibilityAgreement") === "true",
      rulesAgreement: data.get("rulesAgreement") === "true",
      marketingConsent: data.get("marketingConsent") === "true",
      rulesVersion: String(data.get("rulesVersion") || "").trim(),
      turnstileToken: String(data.get("cf-turnstile-response") || "").trim()
    };
  }

  function resetTurnstile() {
    if (window.turnstile && typeof window.turnstile.reset === "function") {
      window.turnstile.reset();
    }
  }

  async function submitEntry(event) {
    event.preventDefault();
    clearAlert();

    if (getPromotionState() !== "open") {
      setAlert("This promotion is not currently accepting entries.", "error");
      updateCountdown();
      return;
    }

    if (!updateFieldValidity()) {
      setAlert("Please complete every required field and correct the highlighted information.", "error");
      form.querySelector(":invalid")?.focus();
      return;
    }

    const payload = payloadFromForm(form);
    if (!payload.turnstileToken) {
      setAlert("Please complete the security check before submitting.", "error");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload),
        credentials: "same-origin"
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.message || "Your entry could not be submitted. Please try again.");
      }

      const discountText = result.earlyDiscountEligible
        ? " You are also one of the first 10 eligible entries and qualify for the 15% early-entry discount."
        : "";

      setAlert(
        `Your entry is confirmed. Entry number: ${result.entryId}.${discountText}`,
        "success"
      );

      form.reset();
      resetTurnstile();
      alertBox?.scrollIntoView({ behavior: "smooth", block: "center" });
    } catch (error) {
      setAlert(error instanceof Error ? error.message : "Your entry could not be submitted.", "error");
      resetTurnstile();
    } finally {
      setSubmitting(false);
      updateCountdown();
    }
  }

  function hydrateRedirectStatus() {
    const params = new URLSearchParams(window.location.search);
    if (params.get("submitted") !== "1") return;

    const entryId = params.get("entry") || "confirmed";
    const early = params.get("early") === "1";
    const discountText = early
      ? " You are also one of the first 10 eligible entries and qualify for the 15% early-entry discount."
      : "";

    setAlert(`Your entry is confirmed. Entry number: ${entryId}.${discountText}`, "success");
    history.replaceState({}, document.title, window.location.pathname + window.location.hash);
  }

  if (form) {
    form.addEventListener("submit", submitEntry);
    form.addEventListener("input", (event) => {
      if (event.target instanceof HTMLElement && "checkValidity" in event.target) {
        event.target.setAttribute("aria-invalid", String(!event.target.checkValidity()));
      }
    });
  }

  hydrateRedirectStatus();
  updateCountdown();
  window.setInterval(updateCountdown, 1000);
})();
