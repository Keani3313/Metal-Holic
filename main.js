/* MetalHolic Festival — main.js */
(function () {
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
})();
