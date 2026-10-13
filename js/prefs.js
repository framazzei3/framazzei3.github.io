/* ==========================================================================
   Early preferences: loaded in <head> of every page, before the page is drawn,
   so the saved theme and language apply without a flash.

   Theme:    "system" (default) | "light" | "dark"   → <html data-theme="…">
   Language: "en" (default) | "it"                   → <html data-lang="…" lang="…">
   A link with ?lang=it or ?lang=en also sets the language.
   ========================================================================== */

(function () {
  "use strict";

  var root = document.documentElement;
  root.classList.add("js");

  function read(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }

  function save(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (e) {
      /* storage unavailable: the choice lasts for this page only */
    }
  }

  // Theme
  var theme = read("theme");
  if (theme === "light" || theme === "dark") root.setAttribute("data-theme", theme);

  // Language: URL parameter wins over the saved choice
  var match = /[?&]lang=(en|it)\b/.exec(window.location.search);
  var lang = match ? match[1] : read("lang");
  if (lang !== "it") lang = "en";
  if (match) save("lang", lang);
  root.setAttribute("data-lang", lang);
  root.setAttribute("lang", lang);

  // Shared with js/main.js
  window.sitePrefs = { read: read, save: save };
})();
