/* ==========================================================================
   Francesco Mazzei — shared page parts and behaviour
   Every page includes this file. It builds the parts that are the same on all
   pages, so each one is edited in a single place:

   1. SITE SETTINGS   menu entries, page titles, social links   ← edit here
   2. Icons           inline SVG sprite (brand logos: Simple Icons, CC0)
   3. Header          name, menu, theme and language buttons
   4. Footer          copyright, social links, back to top
   5. Behaviour       mobile menu, theme switch, language switch
   ========================================================================== */

(function () {
  "use strict";

  /* ------------------------------------------------------------------------
     1. SITE SETTINGS
     ------------------------------------------------------------------------ */
  var PAGES = [
    { id: "about", href: "index.html", en: "About", it: "Chi sono" },
    { id: "research", href: "research.html", en: "Research", it: "Ricerca" },
    { id: "publications", href: "publications.html", en: "Publications", it: "Pubblicazioni" },
    { id: "teaching", href: "teaching.html", en: "Teaching", it: "Didattica" },
    { id: "cv", href: "cv.html", en: "CV", it: "CV" },
    { id: "personal", href: "personal.html", en: "Personal", it: "Personale" },
  ];

  var SOCIAL = [
    { cls: "mail", icon: "i-mail", label: "Email", href: "mailto:fmazzei97@gmail.com" },
    { cls: "scholar", icon: "i-scholar", label: "Google Scholar", href: "https://scholar.google.com/citations?user=2Do8txEAAAAJ" },
    { cls: "orcid", icon: "i-orcid", label: "ORCID", href: "https://orcid.org/0000-0003-4888-1428" },
    { cls: "inspire", icon: "i-inspire", label: "INSPIRE-HEP", href: "https://inspirehep.net/authors/2045776" },
    { cls: "linkedin", icon: "i-linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/francesco-mazzei-843b7a200" },
    { cls: "github", icon: "i-github", label: "GitHub", href: "https://github.com/framazzei3" },
  ];

  var TEXT = {
    skip: { en: "Skip to content", it: "Vai al contenuto" },
    menu: { en: "Menu", it: "Menu" },
    toTop: { en: "Back to top", it: "Torna su" },
    theme: { en: "Theme", it: "Tema" },
    system: { en: "System", it: "Sistema" },
    light: { en: "Light", it: "Chiaro" },
    dark: { en: "Dark", it: "Scuro" },
    switchLang: { en: "Leggi in italiano", it: "Read in English" },
  };

  /* ------------------------------------------------------------------------
     2. Icons
     ------------------------------------------------------------------------ */
  var STROKE = 'fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"';
  var ICONS = {
    "i-mail": '<rect x="3" y="5" width="18" height="14" rx="2" ' + STROKE + ' /><path d="M3.5 6.5 12 13l8.5-6.5" ' + STROKE + " />",
    "i-pin": '<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" ' + STROKE + ' /><circle cx="12" cy="10" r="2.3" ' + STROKE + " />",
    "i-building": '<path d="M4 21V5l8-2v18M12 8l8 2v11M3 21h18M7 8h2M7 12h2M7 16h2M15 13h2M15 17h2" ' + STROKE + " />",
    "i-doc": '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" ' + STROKE + ' /><path d="M14 3v5h5M9 13h6M9 17h6" ' + STROKE + " />",
    "i-menu": '<path d="M4 7h16M4 12h16M4 17h16" ' + STROKE + " />",
    "i-up": '<path d="M12 19V5M6 11l6-6 6 6" ' + STROKE + " />",
    "i-system": '<rect x="3" y="4" width="18" height="12" rx="2" ' + STROKE + ' /><path d="M8 20h8M12 16v4" ' + STROKE + " />",
    "i-sun": '<circle cx="12" cy="12" r="4" ' + STROKE + ' /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" ' + STROKE + " />",
    "i-moon": '<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" ' + STROKE + " />",
    // Brand logos from Simple Icons (CC0, simpleicons.org)
    "i-scholar": '<path fill="currentColor" d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />',
    "i-orcid": '<path fill="currentColor" d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z" />',
    "i-inspire": '<path fill="currentColor" d="M0 0v24h24V0H0zm3.873 3.6875c1.0359-.0008 1.8758.8391 1.875 1.875-.0003 1.035-.8399 1.8738-1.875 1.873C2.8387 7.4352 2.0003 6.5968 2 5.5625c-.0008-1.035.838-1.8747 1.873-1.875zm4.4903.5078h3.5312l6.7344 10.8125h.045V4.1953H22v16.1172h-3.5469l-6.7168-10.791h-.0468v10.791H8.3633V4.1953zm-6.123 4.7871s.013.0041 3.3886 0v11.2754H2.2402V8.9824z" />',
    "i-linkedin": '<path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />',
    "i-youtube": '<path fill="currentColor" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />',
    "i-github": '<path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />',
  };

  var root = document.documentElement;
  var body = document.body;
  var currentPage = body.getAttribute("data-page");
  var prefs = window.sitePrefs || { read: function () {}, save: function () {} };

  function icon(id) {
    return '<svg class="icon" aria-hidden="true"><use href="#' + id + '" /></svg>';
  }

  // Text in both languages; CSS shows the active one
  function both(entry) {
    if (entry.en === entry.it) return entry.en;
    return '<span lang="en">' + entry.en + '</span><span lang="it">' + entry.it + "</span>";
  }

  function lang() {
    return root.getAttribute("data-lang") === "it" ? "it" : "en";
  }

  var sprite = '<svg class="sprite" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">';
  Object.keys(ICONS).forEach(function (id) {
    sprite += '<symbol id="' + id + '" viewBox="0 0 24 24">' + ICONS[id] + "</symbol>";
  });
  sprite += "</svg>";

  function socialList() {
    return (
      '<ul class="social">' +
      SOCIAL.map(function (s) {
        return '<li><a class="' + s.cls + '" href="' + s.href + '" aria-label="' + s.label + '" title="' + s.label + '">' + icon(s.icon) + "</a></li>";
      }).join("") +
      "</ul>"
    );
  }

  /* ------------------------------------------------------------------------
     3. Header
     ------------------------------------------------------------------------ */
  var nav = PAGES.map(function (p) {
    var current = p.id === currentPage ? ' aria-current="page"' : "";
    return '<li><a href="' + p.href + '"' + current + ">" + both(p) + "</a></li>";
  }).join("");

  var header =
    '<a class="skip-link" href="#main">' + both(TEXT.skip) + "</a>" +
    '<header class="site-header"><div class="container header-inner">' +
    '<a class="brand" href="index.html">Francesco Mazzei</a>' +
    '<nav id="site-nav" class="site-nav" aria-label="Main"><ul>' + nav + "</ul></nav>" +
    '<div class="header-tools">' +
    '<button class="tool-btn lang-btn" type="button"><span lang="en">IT</span><span lang="it">EN</span></button>' +
    '<button class="tool-btn theme-btn" type="button"></button>' +
    '<button class="tool-btn nav-toggle" type="button" aria-controls="site-nav" aria-expanded="false">' +
    icon("i-menu") + '<span class="visually-hidden">' + both(TEXT.menu) + "</span></button>" +
    "</div></div></header>";

  body.insertAdjacentHTML("afterbegin", sprite + header);

  /* ------------------------------------------------------------------------
     4. Footer and social links
     ------------------------------------------------------------------------ */
  var footer =
    '<footer class="site-footer"><div class="container footer-inner">' +
    '<p>© <span class="copy-year">' + new Date().getFullYear() + "</span> Francesco Mazzei</p>" +
    socialList() +
    '<a class="to-top" href="#">' + icon("i-up") + both(TEXT.toTop) + "</a>" +
    "</div></footer>";

  body.insertAdjacentHTML("beforeend", footer);

  // Any <div data-social></div> in a page becomes the row of social links
  Array.prototype.forEach.call(document.querySelectorAll("[data-social]"), function (el) {
    el.outerHTML = socialList();
  });

  /* ------------------------------------------------------------------------
     5. Behaviour
     ------------------------------------------------------------------------ */

  // Page title in the active language
  function updateTitle() {
    var page = PAGES.filter(function (p) {
      return p.id === currentPage;
    })[0];
    if (!page || page.id === "about") {
      document.title = lang() === "it" ? "Francesco Mazzei · Robotica per ambienti estremi" : "Francesco Mazzei · Robotics for extreme environments";
    } else {
      document.title = page[lang()] + " · Francesco Mazzei";
    }
  }

  // Theme: system → light → dark → system
  var THEMES = ["system", "light", "dark"];
  var THEME_ICON = { system: "i-system", light: "i-sun", dark: "i-moon" };
  var themeBtn = document.querySelector(".theme-btn");

  function currentTheme() {
    return root.getAttribute("data-theme") || "system";
  }

  function renderThemeButton() {
    var t = currentTheme();
    var label = TEXT.theme[lang()] + ": " + TEXT[t][lang()];
    themeBtn.innerHTML = icon(THEME_ICON[t]);
    themeBtn.setAttribute("aria-label", label);
    themeBtn.setAttribute("title", label);
  }

  themeBtn.addEventListener("click", function () {
    var next = THEMES[(THEMES.indexOf(currentTheme()) + 1) % THEMES.length];
    if (next === "system") root.removeAttribute("data-theme");
    else root.setAttribute("data-theme", next);
    prefs.save("theme", next);
    renderThemeButton();
  });

  // Language: English ⇄ Italian
  var langBtn = document.querySelector(".lang-btn");

  function renderLanguage() {
    langBtn.setAttribute("aria-label", TEXT.switchLang[lang()]);
    langBtn.setAttribute("title", TEXT.switchLang[lang()]);
    updateTitle();
    renderThemeButton();
  }

  langBtn.addEventListener("click", function () {
    var next = lang() === "it" ? "en" : "it";
    root.setAttribute("data-lang", next);
    root.setAttribute("lang", next);
    prefs.save("lang", next);
    renderLanguage();
  });

  renderLanguage();

  // Publications: category filter and collapsible groups (<details class="pub-group">)
  var groups = Array.prototype.slice.call(document.querySelectorAll(".pub-group"));
  var filterButtons = Array.prototype.slice.call(document.querySelectorAll(".pub-filter [data-filter]"));

  if (groups.length) {
    // Counts are worked out here, so adding a paper needs no manual update
    var total = 0;
    groups.forEach(function (group) {
      var n = group.querySelectorAll(".pub").length;
      total += n;
      group.querySelector("summary .count").textContent = n;
      var button = document.querySelector('.pub-filter [data-filter="' + group.id + '"] .count');
      if (button) button.textContent = n;
    });
    var all = document.querySelector('.pub-filter [data-filter="all"] .count');
    if (all) all.textContent = total;

    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        var choice = button.getAttribute("data-filter");
        filterButtons.forEach(function (b) {
          b.setAttribute("aria-pressed", String(b === button));
        });
        groups.forEach(function (group) {
          var show = choice === "all" || group.id === choice;
          group.hidden = !show;
          if (show) group.open = true;
        });
      });
    });

    // A link such as publications.html#pub-erf-2022 opens the group that contains it
    var openTarget = function () {
      var target = window.location.hash && document.getElementById(window.location.hash.slice(1));
      var group = target && target.closest(".pub-group");
      if (!group) return;
      group.hidden = false;
      group.open = true;
      target.scrollIntoView();
    };
    openTarget();
    window.addEventListener("hashchange", openTarget);
  }

  // External links (papers, DOIs, profiles) and PDF files open in a new tab, so the site stays open
  Array.prototype.forEach.call(document.querySelectorAll('a[href^="http"], a[href$=".pdf"]'), function (link) {
    var isPdf = /\.pdf$/i.test(link.getAttribute("href"));
    if (!isPdf && link.hostname === window.location.hostname) return;
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener");
  });

  // Mobile menu
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("site-nav");

  function setMenu(open) {
    menu.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
  }

  toggle.addEventListener("click", function () {
    setMenu(!menu.classList.contains("open"));
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && menu.classList.contains("open")) {
      setMenu(false);
      toggle.focus();
    }
  });
})();
