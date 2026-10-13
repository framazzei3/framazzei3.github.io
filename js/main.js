/* ==========================================================================
   Francesco Mazzei — personal website
   Small progressive enhancements. The page works fully without JavaScript.

   1. Mobile menu toggle
   2. Highlight the current section in the navigation
   3. Current year in the footer
   ========================================================================== */

(function () {
  "use strict";

  /* ------------------------------------------------------------------------
     1. Mobile menu toggle
     ------------------------------------------------------------------------ */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  function setMenu(open) {
    nav.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setMenu(!nav.classList.contains("open"));
    });

    // Close the menu after choosing a section or pressing Escape
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) setMenu(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("open")) {
        setMenu(false);
        toggle.focus();
      }
    });
  }

  /* ------------------------------------------------------------------------
     2. Highlight the current section in the navigation
     ------------------------------------------------------------------------ */
  var links = Array.prototype.slice.call(document.querySelectorAll(".site-nav a[href^='#']"));
  var sections = links
    .map(function (link) {
      return document.querySelector(link.getAttribute("href"));
    })
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          links.forEach(function (link) {
            if (link.getAttribute("href") === "#" + entry.target.id) {
              link.setAttribute("aria-current", "true");
            } else {
              link.removeAttribute("aria-current");
            }
          });
        });
      },
      // A section counts as "current" when it crosses the upper part of the screen
      { rootMargin: "-30% 0px -65% 0px" }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  /* ------------------------------------------------------------------------
     3. Current year in the footer
     ------------------------------------------------------------------------ */
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
