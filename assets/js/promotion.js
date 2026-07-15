(() => {
  "use strict";

  const PROMOTION = Object.freeze({
    start: new Date("2026-07-16T00:00:00-04:00"),
    end: new Date("2026-07-31T23:59:59-04:00"),
    drawing: new Date("2026-08-01T12:00:00-04:00")
  });

  const getPhase = (now = new Date()) => {
    if (now < PROMOTION.start) return "upcoming";
    if (now > PROMOTION.end) return "ended";
    return "active";
  };

  const formatDuration = (milliseconds) => {
    const total = Math.max(0, Math.floor(milliseconds / 1000));
    const days = Math.floor(total / 86400);
    const hours = Math.floor((total % 86400) / 3600);
    const minutes = Math.floor((total % 3600) / 60);
    const seconds = total % 60;
    if (days > 0) return `${days}d ${hours}h ${minutes}m`;
    return `${hours}h ${minutes}m ${seconds}s`;
  };

  const updatePromotionUI = () => {
    const now = new Date();
    const phase = getPhase(now);
    const stateText = phase === "upcoming"
      ? "Website giveaway opens July 16, 2026."
      : phase === "active"
        ? "Win a custom 5-page website — entries close July 31."
        : "The July 2026 website giveaway entry period has ended.";

    document.querySelectorAll("[data-promo-state]").forEach((element) => {
      element.textContent = stateText;
    });

    const target = phase === "upcoming" ? PROMOTION.start : PROMOTION.end;
    const countdownText = phase === "ended"
      ? "Entry period closed"
      : `${phase === "upcoming" ? "Opens in" : "Closes in"} ${formatDuration(target - now)}`;
    document.querySelectorAll("[data-promo-countdown]").forEach((element) => {
      element.textContent = countdownText;
    });

    document.documentElement.dataset.promotionPhase = phase;
    return phase;
  };

  const banner = document.querySelector("[data-promo-banner]");
  if (banner && sessionStorage.getItem("starWebCoPromoDismissed") === "true") {
    banner.hidden = true;
  }
  document.querySelectorAll("[data-promo-dismiss]").forEach((button) => {
    button.addEventListener("click", () => {
      const parent = button.closest("[data-promo-banner]");
      if (parent) parent.hidden = true;
      sessionStorage.setItem("starWebCoPromoDismissed", "true");
    });
  });

  const form = document.getElementById("giveawayForm");
  if (form) {
    const submitButton = form.querySelector("[type='submit']");
    const status = document.getElementById("giveawayFormStatus");
    const loadedAt = Date.now();

    const setStatus = (message, type = "") => {
      if (!status) return;
      status.textContent = message;
      status.className = `giveaway-form-status${type ? ` is-${type}` : ""}`;
    };

    const syncFormState = () => {
      const phase = updatePromotionUI();
      const enabled = phase === "active";
      if (submitButton && !form.dataset.submitting) {
        submitButton.disabled = !enabled;
        submitButton.textContent = phase === "upcoming"
          ? "Entries Open July 16"
          : phase === "ended"
            ? "Entry Period Closed"
            : "Submit Giveaway Entry";
      }
      if (!enabled) {
        setStatus(phase === "upcoming"
          ? "The entry form opens at 12:00 a.m. Eastern Time on July 16, 2026."
          : "The entry period ended at 11:59 p.m. Eastern Time on July 31, 2026.");
      } else if (!form.dataset.submitting) {
        setStatus("Entry is free. Purchasing services does not improve your odds.");
      }
    };

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (getPhase() !== "active") {
        syncFormState();
        return;
      }
      if (!form.reportValidity()) return;
      if (Date.now() - loadedAt < 2500) {
        setStatus("Please review the form and try again.", "error");
        return;
      }

      const timestamp = form.querySelector("[name='entry_timestamp']");
      if (timestamp) timestamp.value = new Date().toISOString();
      const timezone = form.querySelector("[name='entry_timezone']");
      if (timezone) timezone.value = Intl.DateTimeFormat().resolvedOptions().timeZone || "Unknown";

      form.dataset.submitting = "true";
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = "Submitting Entry…";
      }
      setStatus("Submitting your entry…");

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: { "Accept": "application/json" }
        });
        if (!response.ok) {
          const payload = await response.json().catch(() => null);
          const message = payload?.errors?.map((item) => item.message).join(" ") || "Your entry could not be submitted. Please try again.";
          throw new Error(message);
        }
        window.location.assign("giveaway-thank-you.html");
      } catch (error) {
        console.error(error);
        delete form.dataset.submitting;
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = "Submit Giveaway Entry";
        }
        setStatus(error.message || "Your entry could not be submitted. Please try again.", "error");
      }
    });

    syncFormState();
    setInterval(syncFormState, 1000);
  } else {
    updatePromotionUI();
    setInterval(updatePromotionUI, 1000);
  }
})();
