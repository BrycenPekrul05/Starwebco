# Star Web Co. Real Site Build

This is the production-ready static website package for Star Web Co.

## What is included

- Main Star Web Co. website:
  - `index.html`
  - `services.html`
  - `portfolio.html`
  - `about.html`
  - `quote.html`
- Shared assets:
  - `assets/css/styles.css`
  - `assets/js/main.js`
  - `assets/img/favicon.svg`
- Portfolio mock websites:
  - `portfolio/blue-ridge-roofing/` — 5-page mock site
  - `portfolio/summit-hvac/` — 3-page mock site
  - `portfolio/green-valley-landscaping/` — 3-page mock site
- Mock-site shared CSS:
  - `assets/css/mock-sites.css`

## Upload instructions for GitHub Pages

1. Keep your existing `CNAME` file in the GitHub repository root.
2. Delete the old website files and folders except `CNAME`.
3. Unzip this package.
4. Open the unzipped folder.
5. Upload the contents of this folder directly to the root of your GitHub repo.

The GitHub repo root should look like this:

```text
CNAME
index.html
services.html
portfolio.html
about.html
quote.html
README.md
assets/
portfolio/
```

Do not upload the zip file itself. Do not upload the whole folder as a nested folder.

## Quote form note

The quote form currently uses `mailto:hello@starwebco.com` so it will open the visitor's email app. Once your business email is active, that address will work. Later, this can be upgraded to a real form backend.

## Next improvements

- Add real business email
- Add Google Analytics
- Add Google Search Console
- Add real testimonials once clients exist
- Replace mock portfolio projects with actual client projects over time
