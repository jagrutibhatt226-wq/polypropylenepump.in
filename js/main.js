document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  if (menu && nav) {
    menu.addEventListener("click", function () {
      const active = nav.classList.toggle("active");
      menu.setAttribute("aria-expanded", active ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("active");
        menu.setAttribute("aria-expanded", "false");
      });
    });
  }

  const observer = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(function (el) {
    observer.observe(el);
  });

  const header = document.querySelector(".header");
  window.addEventListener("scroll", function () {
    if (header) {
      header.classList.toggle("scrolled", window.scrollY > 30);
    }
  }, { passive: true });
});
