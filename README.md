# Dr. Ashok Kumar — Website (docashok.com)

A fast, fully self-contained static website. All images (portrait, ostomy diagrams,
lifestyle photos) are stored locally in `assets/img/` — nothing loads from any other site.
No build step is required.

## Files
- `index.html`, `about.html`, `publications.html`, `contact.html`
- `ostomy-care.html` + `what-is-ostomy.html`, `ostomy-colostomy.html`, `ostomy-ileostomy.html`, `ostomy-urostomy.html`
- `assets/` — `style.css`, `main.js`, and `img/` (all photos and diagrams)
- `robots.txt`, `sitemap.xml`, `_headers`, `_redirects`

--------------------------------------------------------------------
## PART A — Put the files on GitHub
--------------------------------------------------------------------

### Easiest: upload through the GitHub website (no commands)
1. Create a free account at https://github.com and verify your email.
2. Go to https://github.com/new
   - Repository name: `docashok-site`
   - Choose Public or Private
   - Do NOT tick "Add a README" (keeps the repo empty)
   - Click **Create repository**
3. On the new empty repo page, click the link **"uploading an existing file"**.
4. Unzip this package, then drag the *contents* into the upload box:
   `index.html`, all the other `.html` files, and the whole `assets` folder.
   (Make sure `index.html` ends up at the top level of the repo, not inside a subfolder.)
5. Scroll down and click **Commit changes**.

### Alternative: command line (if you prefer)
```
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/<your-username>/docashok-site.git
git push -u origin main
```

--------------------------------------------------------------------
## PART B — Launch with Cloudflare Pages (connect the repo)
--------------------------------------------------------------------
IMPORTANT: choose **Pages**, not the Worker "Upload assets" option.

1. Go to https://dash.cloudflare.com → **Workers & Pages** → **Create**.
2. Open the **Pages** tab → **Connect to Git** (a.k.a. "Import an existing Git repository").
3. Authorize the Cloudflare GitHub app and grant access to your `docashok-site` repo.
4. Select the repo, then set **Production branch = main**.
5. In **Set up builds and deployments**, use these exact settings for a plain static site:
   - **Framework preset:** None
   - **Build command:** (leave empty)
   - **Build output directory:** `/`
6. Click **Save and Deploy**. In ~30 seconds you get a live URL like
   `docashok-site.pages.dev`. Open it and check the homepage loads.

> Every time you push a change to `main` (or edit a file on GitHub), Cloudflare
> automatically rebuilds and redeploys. Note: a Git-connected project cannot later
> switch to the drag-and-drop "Direct Upload" method, so stay with Git once you start.

--------------------------------------------------------------------
## PART C — Connect your domain (docashok.com)
--------------------------------------------------------------------
1. In the Pages project → **Custom domains** → **Set up a custom domain**.
2. Enter `docashok.com` (repeat for `www.docashok.com`).
3. If docashok.com is already on Cloudflare, the DNS record is added automatically.
   If it is registered elsewhere, Cloudflare shows a CNAME to add at your registrar,
   or you can move the domain's nameservers to Cloudflare (free).
4. HTTPS is provisioned automatically.

## Notes
- If the live site 404s, confirm `index.html` is at the repo root (not in a subfolder).
- The contact form is display-only until connected to a form service
  (Formspree, Web3Forms, or a Cloudflare Pages Function).
