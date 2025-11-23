# Widget Makers static site

Static two-page site (home + about) with a shared header and mobile-friendly layout.

## Pages
- `index.html` — home with inquiry builder; `#inquiry` hash auto-opens/scrolls to the form.
- `about.html` — story/placeholder media; contact buttons link back to the inquiry builder.

## Local preview
- Open `index.html` or `about.html` in a browser (double-click or `open index.html` on macOS).

## Publishing to GitHub Pages
Already set up for this repo. If you need to reconfigure:
1) Push to `main` (already done):
```
git add .
git commit -m "Update site"
git push origin main
```
2) In GitHub → Settings → Pages: Source = `Deploy from a branch`, Branch = `main`, Folder = `/ (root)`.
3) Live URL: `https://rickdavis50.github.io/widget/`

## Custom domain (optional)
- Add your domain in Settings → Pages → Custom domain.
- Create a `CNAME` file containing your domain and add DNS `A/AAAA` records per GitHub’s docs.
