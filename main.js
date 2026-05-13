/* MetalHolic Festival — main.js */
(function () {
  // Fullscreen menu: logo click opens, close / link / escape closes
  var menuBtn = document.getElementById("menuBtn");
  var fsMenu = document.getElementById("fullscreenMenu");
  var fsClose = document.getElementById("fullscreenClose");

  function openFS() {
    if (fsMenu) fsMenu.classList.add("active");
  }
  function closeFS() {
    if (fsMenu) fsMenu.classList.remove("active");
  }

  if (menuBtn && fsMenu) {
    menuBtn.addEventListener("click", function (e) {
      e.preventDefault();
      openFS();
    });
  }
  if (fsClose) {
    fsClose.addEventListener("click", closeFS);
  }
  if (fsMenu) {
    fsMenu.addEventListener("click", function (e) {
      if (e.target === fsMenu) closeFS();
    });
    fsMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeFS);
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeFS();
  });

  // Mobile menu toggle
  var toggle = document.getElementById("menuToggle");
  var menu = document.getElementById("navMenu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      menu.classList.toggle("active");
      toggle.setAttribute(
        "aria-expanded",
        menu.classList.contains("active") ? "true" : "false"
      );
    });
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("active");
      });
    });
  }

  // Active nav link
  var current = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav a").forEach(function (link) {
    var href = (link.getAttribute("href") || "").toLowerCase();
    if (href === current) link.classList.add("active");
  });
  document.querySelectorAll(".fullscreen-nav a").forEach(function (link) {
    var href = (link.getAttribute("href") || "").toLowerCase();
    if (href === current) link.classList.add("active");
  });

  // Smooth-scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = this.getAttribute("href");
      if (id.length < 2) return;
      var target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Forms — basic, client-side acknowledgement (no backend)
  document.querySelectorAll("form[data-acknowledge]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var note = form.querySelector(".form-ack");
      if (note) note.style.display = "block";
      form.reset();
    });
  });

  // Day-filter chips on lineup page swap the visible timetable
  var dayChips = document.querySelectorAll(".filter-chip[data-day]");
  if (dayChips.length) {
    dayChips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        var day = chip.getAttribute("data-day");
        dayChips.forEach(function (c) { c.classList.remove("is-active"); });
        chip.classList.add("is-active");
        document.querySelectorAll(".artists-grid[data-day]").forEach(function (t) {
          if (t.getAttribute("data-day") === day) {
            t.removeAttribute("hidden");
          } else {
            t.setAttribute("hidden", "");
          }
        });
      });
    });
  }
})();
