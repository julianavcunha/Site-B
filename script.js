// SECTION: Mobile menu toggle
const ham = document.getElementById("gen-ham");
const nav = document.getElementById("gen-nav");
const menu = document.getElementById("gen-menu");

if (ham && nav && menu) {
  ham.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    nav.classList.toggle("mobile-open", isOpen);
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && menu.classList.contains("open")) {
      menu.classList.remove("open");
      nav.classList.remove("mobile-open");
    }
  });

  // Mobile collapsed submenu toggle
  document.querySelectorAll("#gen-menu > li.has-sub > a").forEach((link) => {
    link.addEventListener("click", (e) => {
      if (getComputedStyle(ham).display !== "none") {
        e.preventDefault();
        const li = link.parentElement;
        li.classList.toggle("sub-open");
        const sub = li.querySelector("ul");
        if (sub) sub.classList.toggle("sub-open");
      }
    });
  });
}
