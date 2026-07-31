/* Shared behavior loaded on every page: mobile nav toggle + footer year. */

function initMobileNav() {
  const header = document.querySelector(".site-header");
  const toggle = document.getElementById("nav-toggle");
  if (!toggle || !header) return;

  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  header.querySelectorAll(".main-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setFooterYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  setFooterYear();
});
