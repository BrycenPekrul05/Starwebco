(() => {
  "use strict";

  const script = document.currentScript;
  if (!script) return;

  const startsAt = parseDate(script.dataset.start);
  const endsAt = parseDate(script.dataset.end);
  const href = script.dataset.url || "/giveaway.html";
  const storageKey = `starwebco-promo-dismissed:${script.dataset.id || "website-giveaway"}`;

  function parseDate(value) {
    if (!value || value.includes("{{")) return null;
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? null : date;
  }

  function isActive() {
    const now = new Date();
    if (!startsAt || !endsAt) return false;
    return now >= startsAt && now <= endsAt;
  }

  if (!isActive()) return;

  try {
    if (sessionStorage.getItem(storageKey) === "1") return;
  } catch {
    // Storage can be blocked; the banner still works without dismissal persistence.
  }

  const banner = document.createElement("aside");
  banner.className = "promo-banner";
  banner.setAttribute("aria-label", "Star Web Co. website giveaway announcement");

  const inner = document.createElement("div");
  inner.className = "promo-banner__inner";

  const message = document.createElement("span");
  message.textContent = "Virginia businesses: enter to win a custom five-page website. First 10 eligible entries get 15% off.";

  const link = document.createElement("a");
  link.href = href;
  link.textContent = "Enter now";

  const closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.className = "promo-banner__close";
  closeButton.setAttribute("aria-label", "Dismiss giveaway announcement");
  closeButton.textContent = "×";

  closeButton.addEventListener("click", () => {
    banner.remove();
    try {
      sessionStorage.setItem(storageKey, "1");
    } catch {
      // No-op when storage is unavailable.
    }
  });

  inner.append(message, document.createTextNode(" "), link);
  banner.append(inner, closeButton);
  document.body.prepend(banner);
})();
