/* Star Web Co. giveaway styles — scoped to avoid collisions with the main site. */

:root {
  --gw-bg: #07111f;
  --gw-bg-soft: #0d1a2c;
  --gw-panel: rgba(255, 255, 255, 0.06);
  --gw-panel-strong: rgba(255, 255, 255, 0.1);
  --gw-border: rgba(151, 214, 255, 0.22);
  --gw-text: #f7fbff;
  --gw-muted: #b8c8d9;
  --gw-accent: #36c7ff;
  --gw-accent-strong: #0ea5e9;
  --gw-success: #66e0a3;
  --gw-danger: #ff9b9b;
  --gw-warning: #ffd479;
  --gw-radius-sm: 0.75rem;
  --gw-radius: 1.1rem;
  --gw-radius-lg: 1.6rem;
  --gw-shadow: 0 24px 70px rgba(0, 0, 0, 0.28);
}

.skip-link {
  position: fixed;
  top: 0.75rem;
  left: 0.75rem;
  z-index: 9999;
  transform: translateY(-160%);
  padding: 0.7rem 1rem;
  border-radius: 0.5rem;
  background: #fff;
  color: #07111f;
  font-weight: 700;
}

.skip-link:focus {
  transform: translateY(0);
}

.giveaway-page {
  background:
    radial-gradient(circle at 15% 5%, rgba(54, 199, 255, 0.14), transparent 32rem),
    radial-gradient(circle at 85% 20%, rgba(79, 70, 229, 0.16), transparent 34rem),
    var(--gw-bg);
  color: var(--gw-text);
}

.giveaway-page a {
  text-underline-offset: 0.18em;
}

.giveaway-nav-shell,
.giveaway-footer-grid {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.giveaway-nav,
.giveaway-footer-grid nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.15rem;
}

.giveaway-nav a,
.giveaway-footer-grid a {
  color: var(--gw-text);
  text-decoration: none;
}

.giveaway-nav a:hover,
.giveaway-nav a:focus-visible,
.giveaway-footer-grid a:hover,
.giveaway-footer-grid a:focus-visible {
  color: var(--gw-accent);
}

.giveaway-hero {
  position: relative;
  overflow: hidden;
  padding: clamp(4rem, 9vw, 8rem) 0 clamp(3rem, 6vw, 5rem);
}

.giveaway-hero::after {
  content: "";
  position: absolute;
  inset: auto -10rem -18rem auto;
  width: 32rem;
  height: 32rem;
  border-radius: 50%;
  background: rgba(54, 199, 255, 0.08);
  filter: blur(12px);
  pointer-events: none;
}

.giveaway-hero-grid,
.giveaway-entry-layout,
.giveaway-two-column {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(18rem, 0.85fr);
  gap: clamp(2rem, 5vw, 5rem);
  align-items: center;
}

.giveaway-eyebrow,
.giveaway-card-kicker,
.giveaway-status-label {
  margin: 0 0 0.75rem;
  color: var(--gw-accent);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.giveaway-hero h1,
.giveaway-section-heading h2,
.giveaway-entry-copy h2,
.legal-page h1 {
  margin-top: 0;
  color: var(--gw-text);
  line-height: 1.03;
  text-wrap: balance;
}

.giveaway-hero h1 {
  max-width: 15ch;
  margin-bottom: 1.25rem;
  font-size: clamp(2.75rem, 7vw, 5.6rem);
}

.giveaway-lead {
  max-width: 65ch;
  color: var(--gw-muted);
  font-size: clamp(1.05rem, 2vw, 1.25rem);
  line-height: 1.75;
}

.giveaway-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin: 1.8rem 0 1rem;
}

.giveaway-mini-disclosure,
.giveaway-card-note,
.giveaway-form-disclosure {
  color: var(--gw-muted);
  font-size: 0.92rem;
  line-height: 1.6;
}

.giveaway-prize-card,
.giveaway-form-card,
.giveaway-info-box,
.legal-disclosure-box {
  border: 1px solid var(--gw-border);
  border-radius: var(--gw-radius-lg);
  background: linear-gradient(160deg, rgba(255,255,255,0.10), rgba(255,255,255,0.035));
  box-shadow: var(--gw-shadow);
  backdrop-filter: blur(12px);
}

.giveaway-prize-card {
  padding: clamp(1.5rem, 4vw, 2.5rem);
}

.giveaway-prize-card h2 {
  margin: 0 0 1rem;
  font-size: clamp(1.8rem, 4vw, 2.6rem);
}

.giveaway-check-list,
.giveaway-plain-list {
  padding-left: 0;
  list-style: none;
}

.giveaway-check-list li,
.giveaway-plain-list li {
  position: relative;
  padding-left: 1.8rem;
  color: var(--gw-muted);
  line-height: 1.65;
}

.giveaway-check-list li + li,
.giveaway-plain-list li + li {
  margin-top: 0.7rem;
}

.giveaway-check-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--gw-success);
  font-weight: 900;
}

.giveaway-plain-list li::before {
  content: "—";
  position: absolute;
  left: 0;
  color: var(--gw-accent);
  font-weight: 900;
}

.giveaway-status-section {
  padding: 0 0 2rem;
}

.giveaway-status-card {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1px;
  overflow: hidden;
  border: 1px solid var(--gw-border);
  border-radius: var(--gw-radius);
  background: var(--gw-border);
}

.giveaway-status-card > div {
  padding: 1.25rem;
  background: var(--gw-bg-soft);
}

.giveaway-status-value {
  margin: 0;
  color: var(--gw-text);
  font-weight: 700;
  line-height: 1.4;
}

.giveaway-section {
  padding: clamp(4rem, 8vw, 7rem) 0;
}

.giveaway-section-muted {
  background: rgba(255, 255, 255, 0.025);
  border-block: 1px solid rgba(255, 255, 255, 0.06);
}

.giveaway-section-heading {
  max-width: 52rem;
  margin-bottom: 2rem;
}

.giveaway-section-heading h2,
.giveaway-entry-copy h2 {
  font-size: clamp(2rem, 5vw, 3.5rem);
}

.giveaway-feature-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}

.giveaway-feature-card {
  padding: 1.5rem;
  border: 1px solid var(--gw-border);
  border-radius: var(--gw-radius);
  background: var(--gw-panel);
}

.giveaway-feature-card h3,
.giveaway-info-box h3 {
  margin-top: 0;
  color: var(--gw-text);
}

.giveaway-feature-card p,
.giveaway-info-box p,
.giveaway-entry-copy > p,
.giveaway-faq-list p,
.legal-page p,
.legal-page li {
  color: var(--gw-muted);
  line-height: 1.75;
}

.giveaway-info-box {
  padding: clamp(1.5rem, 4vw, 2.5rem);
}

.giveaway-entry-layout {
  align-items: start;
}

.giveaway-entry-copy {
  position: sticky;
  top: 2rem;
}

.giveaway-early-entry-callout {
  margin-top: 1.5rem;
  padding: 1rem 1.1rem;
  border-left: 4px solid var(--gw-warning);
  border-radius: 0 var(--gw-radius-sm) var(--gw-radius-sm) 0;
  background: rgba(255, 212, 121, 0.08);
  color: var(--gw-text);
  line-height: 1.6;
}

.giveaway-form-card {
  padding: clamp(1.25rem, 4vw, 2rem);
}

.giveaway-form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.giveaway-field {
  display: grid;
  gap: 0.5rem;
  margin-bottom: 1rem;
  color: var(--gw-text);
  font-weight: 700;
}

.giveaway-field input,
.giveaway-field textarea {
  width: 100%;
  border: 1px solid var(--gw-border);
  border-radius: 0.7rem;
  background: rgba(4, 12, 23, 0.78);
  color: var(--gw-text);
  font: inherit;
  font-weight: 400;
}

.giveaway-field input {
  min-height: 3rem;
  padding: 0 0.85rem;
}

.giveaway-field textarea {
  min-height: 8rem;
  padding: 0.85rem;
  resize: vertical;
}

.giveaway-field input::placeholder,
.giveaway-field textarea::placeholder {
  color: #8395a8;
}

.giveaway-field input:focus-visible,
.giveaway-field textarea:focus-visible,
.giveaway-checkbox input:focus-visible,
.button:focus-visible,
.giveaway-faq-list summary:focus-visible {
  outline: 3px solid rgba(54, 199, 255, 0.45);
  outline-offset: 3px;
}

.giveaway-field input[aria-invalid="true"],
.giveaway-field textarea[aria-invalid="true"] {
  border-color: var(--gw-danger);
}

.giveaway-consent-group {
  margin: 1.25rem 0;
  padding: 0;
  border: 0;
}

.giveaway-consent-group legend {
  margin-bottom: 0.75rem;
  color: var(--gw-text);
  font-weight: 800;
}

.giveaway-checkbox {
  display: grid;
  grid-template-columns: 1.2rem minmax(0, 1fr);
  gap: 0.7rem;
  align-items: start;
  color: var(--gw-muted);
  line-height: 1.55;
}

.giveaway-checkbox + .giveaway-checkbox {
  margin-top: 0.8rem;
}

.giveaway-checkbox input {
  width: 1.1rem;
  height: 1.1rem;
  margin-top: 0.18rem;
  accent-color: var(--gw-accent-strong);
}

.giveaway-checkbox a {
  color: var(--gw-accent);
}

.giveaway-honeypot {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  overflow: hidden !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  white-space: nowrap !important;
}

.giveaway-turnstile-wrap {
  min-height: 68px;
  margin: 1.2rem 0;
}

.giveaway-submit {
  width: 100%;
  min-height: 3.25rem;
  justify-content: center;
}

.giveaway-submit-loading {
  display: none;
}

.giveaway-submit[aria-busy="true"] .giveaway-submit-label {
  display: none;
}

.giveaway-submit[aria-busy="true"] .giveaway-submit-loading {
  display: inline;
}

.giveaway-submit:disabled {
  cursor: not-allowed;
  opacity: 0.62;
}

.giveaway-form-alert {
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid var(--gw-border);
  border-radius: var(--gw-radius-sm);
  background: rgba(54, 199, 255, 0.08);
  color: var(--gw-text);
  line-height: 1.6;
}

.giveaway-form-alert[data-state="error"] {
  border-color: rgba(255, 155, 155, 0.5);
  background: rgba(255, 155, 155, 0.08);
}

.giveaway-form-alert[data-state="success"] {
  border-color: rgba(102, 224, 163, 0.5);
  background: rgba(102, 224, 163, 0.08);
}

.giveaway-faq-wrap {
  max-width: 58rem;
}

.giveaway-faq-list {
  display: grid;
  gap: 0.75rem;
}

.giveaway-faq-list details {
  border: 1px solid var(--gw-border);
  border-radius: var(--gw-radius-sm);
  background: var(--gw-panel);
}

.giveaway-faq-list summary {
  cursor: pointer;
  padding: 1rem 1.1rem;
  color: var(--gw-text);
  font-weight: 800;
}

.giveaway-faq-list details p {
  margin: 0;
  padding: 0 1.1rem 1.1rem;
}

/* Site-wide injected banner */
.promo-banner {
  position: relative;
  z-index: 1000;
  border-bottom: 1px solid rgba(255,255,255,0.14);
  background: linear-gradient(90deg, #0b4d6f, #123d72 52%, #342f75);
  color: #fff;
}

.promo-banner__inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.85rem;
  min-height: 2.75rem;
  padding: 0.55rem 3.2rem 0.55rem 1rem;
  text-align: center;
  font-size: 0.94rem;
}

.promo-banner__inner a {
  color: #fff;
  font-weight: 800;
}

.promo-banner__close {
  position: absolute;
  top: 50%;
  right: 0.75rem;
  width: 2rem;
  height: 2rem;
  transform: translateY(-50%);
  border: 0;
  border-radius: 50%;
  background: rgba(0,0,0,0.18);
  color: #fff;
  cursor: pointer;
  font-size: 1.1rem;
}

.promo-banner__close:hover,
.promo-banner__close:focus-visible {
  background: rgba(0,0,0,0.35);
}

/* Homepage insertion snippet */
.home-giveaway-promo {
  padding: clamp(3.5rem, 7vw, 6rem) 0;
  border-block: 1px solid rgba(54, 199, 255, 0.16);
  background:
    linear-gradient(135deg, rgba(54,199,255,0.08), rgba(79,70,229,0.08)),
    #091525;
  color: var(--gw-text);
}

.home-giveaway-promo__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(17rem, 0.8fr);
  gap: 2rem;
  align-items: center;
}

.home-giveaway-promo h2 {
  margin: 0 0 1rem;
  color: var(--gw-text);
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.06;
}

.home-giveaway-promo p {
  color: var(--gw-muted);
  line-height: 1.7;
}

.home-giveaway-promo__facts {
  display: grid;
  gap: 0.75rem;
  padding: 1.4rem;
  border: 1px solid var(--gw-border);
  border-radius: var(--gw-radius);
  background: var(--gw-panel);
}

.home-giveaway-promo__facts strong {
  color: var(--gw-accent);
}

/* Legal pages */
.legal-page-shell {
  min-height: 100vh;
}

.legal-page {
  max-width: 58rem;
  padding-top: clamp(3rem, 7vw, 6rem);
  padding-bottom: clamp(4rem, 8vw, 7rem);
}

.legal-page-header {
  margin-bottom: 2.5rem;
}

.legal-page-header h1 {
  font-size: clamp(2.4rem, 6vw, 4.6rem);
}

.legal-page section {
  padding: 1.3rem 0;
  border-top: 1px solid rgba(255,255,255,0.08);
}

.legal-page h2,
.legal-page h3 {
  color: var(--gw-text);
}

.legal-page a {
  color: var(--gw-accent);
}

.legal-disclosure-box {
  margin-bottom: 2rem;
  padding: 1.4rem;
}

.legal-disclosure-box dl,
.legal-disclosure-box div {
  margin: 0;
}

.legal-disclosure-box div {
  display: grid;
  grid-template-columns: minmax(9rem, 0.35fr) minmax(0, 0.65fr);
  gap: 1rem;
  padding: 0.75rem 0;
  border-top: 1px solid rgba(255,255,255,0.08);
}

.legal-disclosure-box div:first-child {
  border-top: 0;
}

.legal-disclosure-box dt {
  color: var(--gw-text);
  font-weight: 800;
}

.legal-disclosure-box dd {
  margin: 0;
  color: var(--gw-muted);
}

@media (max-width: 980px) {
  .giveaway-hero-grid,
  .giveaway-entry-layout,
  .giveaway-two-column,
  .home-giveaway-promo__grid {
    grid-template-columns: 1fr;
  }

  .giveaway-entry-copy {
    position: static;
  }

  .giveaway-feature-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 720px) {
  .giveaway-nav-shell,
  .giveaway-footer-grid {
    align-items: flex-start;
    flex-direction: column;
  }

  .giveaway-nav {
    gap: 0.75rem 1rem;
  }

  .giveaway-status-card,
  .giveaway-form-grid,
  .giveaway-feature-grid {
    grid-template-columns: 1fr;
  }

  .giveaway-hero h1 {
    max-width: none;
  }

  .legal-disclosure-box div {
    grid-template-columns: 1fr;
    gap: 0.25rem;
  }

  .promo-banner__inner {
    display: block;
    padding-right: 3rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
