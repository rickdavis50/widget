# Widget Makers static site

Simple single-page site ready for GitHub Pages using your provided embed code.

## Local preview
- Open `index.html` in a browser (double-click or `open index.html` on macOS).

## Publishing to GitHub Pages
1) Initialize git and commit:
```
git init
git add .
git commit -m "Add Widget Makers static site"
```
2) Create a new public repo on GitHub (or tell me the repo name/URL and I can wire it up).
3) Add the remote and push the `main` branch:
```
git branch -M main
git remote add origin https://github.com/<your-username>/<repo>.git
git push -u origin main
```
4) In the repo’s Settings → Pages, set Source to `Deploy from a branch`, then pick branch `main` and folder `/ (root)`. Save and wait a minute or two for it to go live at `https://<your-username>.github.io/<repo>/`.

## Custom domain (optional)
- Add your domain in Settings → Pages → Custom domain.
- Create a `CNAME` file containing your domain and add `A/AAAA` records per GitHub’s docs.

If you’d like, share the GitHub repo URL and I’ll run the init/push commands for you.***
