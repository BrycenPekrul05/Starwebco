# Star Web Co. — July 2026 Website Giveaway

This package updates every supplied root page and adds a complete website-giveaway funnel.

## Promotion dates

- Opens: July 16, 2026 at 12:00 a.m. Eastern Time
- Closes: July 31, 2026 at 11:59 p.m. Eastern Time
- Random drawing: On or about August 1, 2026

## New files

- `giveaway.html` — landing page and entry form
- `giveaway-rules.html` — official rules
- `giveaway-thank-you.html` — successful-entry confirmation page
- `privacy.html` — privacy policy
- `assets/css/promotion.css` — promotion styles
- `assets/js/promotion.js` — countdown, banner, entry-period control, AJAX submission
- `tools/draw_winner.py` — optional local random-drawing tool for a Formspree CSV export

## Updated files

- `index.html`, `services.html`, `portfolio.html`, `about.html`, `quote.html` — clean metadata, promotion navigation, site-wide banner, legal/footer links
- `client-login.html` — clean metadata and giveaway navigation link; no public promo banner was added to the client dashboard
- `sitemap.xml` — cleaned and updated with the giveaway landing page
- `robots.txt` — cleaned

## Form handling

The giveaway form uses the same Formspree endpoint already used by the quote form:

`https://formspree.io/f/mojobgyo`

Entries have the email subject **New Star Web Co. Website Giveaway Entry** so they are easy to separate from quote requests. Formspree's received timestamp is the official entry-order record.

## Deployment

1. Back up the current repository.
2. Copy this package into the repository root and allow matching files to overwrite.
3. **Keep your existing asset files and portfolio subfolders.** The uploaded package did not contain the existing `assets/css/styles.css`, `assets/js/main.js`, images, or portfolio demo folders; this package references them exactly as the current site does and adds only the new promotion asset files.
4. Commit and push.
5. Wait for Cloudflare/GitHub deployment.
6. Test these URLs:
   - `/giveaway.html`
   - `/giveaway-rules.html`
   - `/privacy.html`
   - `/giveaway-thank-you.html`
   - `/sitemap.xml`
7. Submit one test entry after the promotion opens and confirm it appears in Formspree.
8. Delete the test entry before determining the first 10 eligible entrants or drawing the winner.

## Important operational notes

- No street or business mailing address is published on the website, as requested.
- The prize value is listed as **$1,000**, matching the current five-page Business Website starting price on `services.html`.
- Domain registration and renewal costs are excluded.
- Maintenance is optional and recurring billing starts only under a separate accepted maintenance agreement.
- Marketing consent is optional and stored as a separate form field.
- Before sending commercial promotional emails, use a compliant email footer, including a valid postal address and unsubscribe method. A registered P.O. box or private mailbox can protect a home address.
- The rules are a practical draft, not a substitute for review by a Virginia attorney.

## Selecting the winner

Export the Formspree entries to CSV, remove spam/ineligible entries, then run:

```bash
python tools/draw_winner.py submissions.csv
```

Save the final eligible CSV and the tool output with the promotion records.
