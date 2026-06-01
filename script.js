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

    // SECTION: RESTOK scroll shrink effect
    const restokLogo = document.getElementById("restok-logo");

    if (restokLogo) {
      const maxScale = 1; // initial size
      const minScale = 0.5; // size after scrolling down
      const maxScroll = 300; // px over which the effect happens

      window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        const progress = Math.min(scrollY / maxScroll, 1);
        const scale = maxScale - (maxScale - minScale) * progress;
        restokLogo.style.transform = `scale(${scale})`;
      });
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
