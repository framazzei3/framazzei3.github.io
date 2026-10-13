# Francesco Mazzei — personal website

Source of <https://framazzei3.github.io>: hand-written HTML, CSS and a little JavaScript. There is no build step and nothing to install.

## Structure

```
index.html          About (home page)
research.html       Research projects
publications.html   Publications
teaching.html       Teaching
cv.html             CV
personal.html       Personal: music and the YouTube channel
css/style.css       all styles; colours are defined once at the top (light and dark)
js/prefs.js         applies the saved theme and language before the page is drawn
js/main.js          shared parts: menu, header buttons, footer, social links, icons
img/                profile photo and favicon
files/              downloadable files (e.g. the CV PDF)
.nojekyll           tells GitHub Pages to serve the files as they are
```

Each page contains only its own content. The header, menu, footer and social links are the same on every page and are written once, in the **SITE SETTINGS** block at the top of `js/main.js`.

## Preview locally

Double-click `index.html`. It works offline in any browser.

## Two languages

Every text is written twice, side by side: once with `lang="en"` and once with `lang="it"`. Only the active language is shown.

```html
<p lang="en">Started my PhD at CERN.</p>
<p lang="it">Ho iniziato il dottorato al CERN.</p>

<h2><span lang="en">Awards</span><span lang="it">Premi</span></h2>
```

Text without a `lang` attribute (names, paper titles, abstracts) is shown in both languages. The **EN/IT** button switches language and remembers the choice; a link ending in `?lang=it` opens the site directly in Italian.

## Theme

The header button cycles **System → Light → Dark**. *System* follows the device setting. Colours are the variables at the top of `css/style.css`.

## Common edits

- **Publication:** in `publications.html`, copy an `<article class="pub">` block into the right category and change its text and links. The badge colour is set by `style="--badge: #hex"`. The counts in the category filter update by themselves.
- **New publication category:** copy a `<details class="pub-group">` block with a new `id`, and add a filter button with the same `data-filter` value.
- **Research project:** in `research.html`, copy an English `<article class="project" lang="en">` and its Italian twin.
- **Menu or social links:** edit the SITE SETTINGS block in `js/main.js`.
- **New page:** copy an existing page, change `data-page` on `<body>`, and add it to `PAGES` in `js/main.js`.
- **CV PDF:** save it as `files/CV_Francesco_Mazzei.pdf` and uncomment the download link in `cv.html`.
- **After editing CSS or JS:** bump the `?v=` number on the `css/` and `js/` links in every page, so visitors' browsers load the new version instead of a cached one.

Open TODOs are left as HTML comments; search the pages for `TODO`.

## Publish on GitHub Pages

Repository **Settings → Pages → Build and deployment**: Source *Deploy from a branch*, branch `main`, folder `/ (root)`. Each push to `main` updates the site within a minute or two.
