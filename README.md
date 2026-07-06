# Star Web Co. Website v2

A production-style static website for Star Web Co. with:

- Home
- Services + base pricing + upgrades
- Portfolio
- About
- Get a Quote
- Three mock portfolio websites
  - Blue Ridge Roofing: 5 pages
  - Summit HVAC: 3 pages
  - Green Valley Landscaping: 3 pages

## Where these files go in GitHub

Upload the CONTENTS of this folder directly into the ROOT of your GitHub repository.

Your repository should look like this:

```text
index.html
services.html
portfolio.html
about.html
quote.html
README.md
assets/
portfolio/
CNAME
```

Keep your existing `CNAME` file in the repo root. Do not delete it.

## Important

Do not upload the folder itself as `starwebco_v2/`. Upload the files and folders inside it.

## Quote form

The quote form currently uses:

```html
action="mailto:hello@starwebco.com"
```

That means it opens the visitor's email app. Later, replace this with a real form service such as Formspree, Netlify Forms, Tally, or a custom backend.

## Deployment

Because this is static HTML/CSS/JS, it works on GitHub Pages.
