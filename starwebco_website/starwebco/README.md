# Star Web Co. Website

A static HTML/CSS/JS agency website with demo portfolio projects.

## Files
- `index.html` — home page
- `services.html` — services page
- `portfolio.html` — portfolio index
- `about.html` — about page
- `contact.html` — contact page
- `css/style.css` — all styling
- `js/main.js` — mobile nav, year, scroll animations
- `portfolio/` — demo client websites
- `docs/` — starter business documents

## How to preview locally
1. Open the folder in VS Code.
2. Install the VS Code extension **Live Server**.
3. Right-click `index.html` and choose **Open with Live Server**.

## How to publish with GitHub Pages
1. Create a GitHub account.
2. Create a new public repository named `starwebco`.
3. Upload all files from this folder into the repo.
4. Go to repository **Settings → Pages**.
5. Under **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
6. Save.
7. GitHub will give you a temporary URL like `https://yourusername.github.io/starwebco/`.

## How to connect your domain
1. In GitHub Pages settings, add your custom domain: `starwebco.com`.
2. In your domain registrar DNS settings, add GitHub Pages DNS records.
3. Wait for DNS to update.
4. Enable **Enforce HTTPS** in GitHub Pages.

## What to change before calling clients
- Replace placeholder email `hello@starwebco.com` if needed.
- Connect the contact form to Formspree, Netlify Forms, or another real form handler.
- Add real portfolio projects once you have clients.
- Replace pricing if you change your offer.
