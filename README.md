# Francesco Mazzei — personal website

Source of <https://framazzei3.github.io>: a single hand-written page in plain HTML, CSS and a little JavaScript. There is no build step and nothing to install.

## Structure

```
index.html        the whole site: about, news, research, publications, teaching, CV, footer
css/style.css     all styles; colours are defined once at the top (light and dark)
js/main.js        mobile menu, current-section highlight, footer year
img/              profile photo and favicon
files/            downloadable files (e.g. the CV PDF)
.nojekyll         tells GitHub Pages to serve the files as they are
```

Every section in `index.html` and `css/style.css` starts with a clearly marked comment block, so you can find it by searching for its name (e.g. `PUBLICATIONS`).

## Preview locally

Double-click `index.html`. It works offline in any browser.

## Common edits

- **News:** add a new `<li>` at the top of the list in the `NEWS` section.
- **Publication:** copy an existing `<article class="pub">` block, change its text and links. The badge colour is set by `style="--badge: #hex"`.
- **Research project:** copy an `<article class="project">` block.
- **CV PDF:** save it as `files/CV_Francesco_Mazzei.pdf` and uncomment the download link in the `CV` section.
- **Colours:** edit the variables at the top of `css/style.css`.

Open TODOs are left as HTML comments; search `index.html` for `TODO`.

## Publish on GitHub Pages

Repository **Settings → Pages → Build and deployment**: Source *Deploy from a branch*, branch `main`, folder `/ (root)`. Each push to `main` updates the site within a minute or two.
