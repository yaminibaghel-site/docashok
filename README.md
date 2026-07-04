# Dr. Ashok Kumar — Website

A fast, fully static website for **docashok.com**, built to host **free on Cloudflare Pages**.
No build step, no database, no server — just upload the files.

## What's inside

| File | Page |
|------|------|
| `index.html` | Home |
| `about.html` | About Dr. Ashok (profile, fellowships, leadership) |
| `publications.html` | Full bibliography (129 entries, filterable) |
| `ostomy-care.html` | Ostomy Care India resource hub |
| `what-is-ostomy.html` | Article: What is an ostomy? |
| `ostomy-colostomy.html` | Article: Understanding colostomy |
| `ostomy-ileostomy.html` | Article: Understanding ileostomy |
| `ostomy-urostomy.html` | Article: Understanding urostomy |
| `contact.html` | Contact / appointment request |
| `assets/style.css`, `assets/main.js` | Styles & scripts |
| `robots.txt`, `sitemap.xml`, `_headers`, `_redirects` | SEO + Cloudflare config |

---

## Deploy to Cloudflare Pages (fastest method — drag & drop)

1. Go to **https://dash.cloudflare.com** and sign in (free account).
2. Left sidebar → **Workers & Pages** → **Create** → **Pages** tab → **Upload assets**.
3. Name the project (e.g. `docashok`).
4. **Drag the entire contents of this folder** (all the `.html` files plus the `assets` folder) into the upload box. *Upload the files inside the folder, not the zip.*
5. Click **Deploy site**. In ~20 seconds you'll get a live URL like `docashok.pages.dev`.

### Point your domain (docashok.com) at it

1. In the Pages project → **Custom domains** → **Set up a custom domain** → enter `docashok.com` (and add `www.docashok.com` too).
2. If the domain is already on Cloudflare, the DNS records are added automatically.
   If it's registered elsewhere, Cloudflare will show you the DNS records (a `CNAME`) to add at your registrar, or you can move the domain's nameservers to Cloudflare (free).
3. HTTPS is provisioned automatically. Done.

> **Updating later:** repeat step 2–5 (Upload assets → drag the folder → Deploy). Each upload is a new version you can roll back.

---

## Alternative: deploy from GitHub (auto-deploys on every edit)

1. Put this folder in a GitHub repo.
2. Cloudflare Pages → **Create** → **Connect to Git** → pick the repo.
3. Build settings: **Framework preset = None**, **Build command = (leave blank)**, **Build output directory = `/`**.
4. Save & Deploy.

---

## About the images

The photos (portrait + ostomy images) currently load directly from the existing
sites you own — `docashok.com` and `ostomycare.in`. They will display as long as
those sites stay online.

**To make the site fully self-contained** (recommended), download those images into
`assets/img/` and update the `src` paths. The image URLs used are listed at the top
of `build.py`. Replacing the hero portrait with a high-resolution photo is worth doing —
the hero is designed around a 4:5 portrait crop.

---

## Editing content

All pages are plain HTML — open any `.html` file and edit the text directly.
If you'd rather regenerate everything from a single source, `build.py` + `pubs_data.py`
(in the parent folder) build all pages; run `python3 build.py`.

The contact form is illustrative only (static sites have no backend). To make it
send real emails, wire it to a free service such as **Formspree**, **Web3Forms**, or a
**Cloudflare Pages Function** — happy to set that up on request.
