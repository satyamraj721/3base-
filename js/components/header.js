/**
 * Responsive header without dev-server helpers (Hostinger-safe)
 */

const HEADER_SELECTOR = ".site-header";

const setHeaderHeight = (header) => {
  // Runtime measurement keeps padding correct on both local dev servers and Hostinger's cached assets
  const height = header?.getBoundingClientRect().height || 0;
  document.documentElement.style.setProperty("--header-height", `${Math.round(height)}px`);
};

export function initHeaderSizing() {
  const header = document.querySelector(HEADER_SELECTOR);
  if (!header) return;

  const sync = () => setHeaderHeight(header);

  sync();
  window.addEventListener("load", sync);
  window.addEventListener("resize", sync);

  if (typeof ResizeObserver !== "undefined") {
    const observer = new ResizeObserver(sync);
    observer.observe(header);
  }
}

export function initScrollHeader() {
  const header = document.querySelector(HEADER_SELECTOR);
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 80) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

export function initMobileNav() {
  const header = document.querySelector(HEADER_SELECTOR);
  const nav = header?.querySelector(".site-nav");
  const toggle = header?.querySelector(".menu-toggle");

  if (!header || !nav || !toggle) return;

  const closeMenu = () => {
    header.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("no-scroll");
  };

  const openMenu = () => {
    header.classList.add("nav-open");
    toggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("no-scroll");
  };

  const toggleMenu = () => {
    if (header.classList.contains("nav-open")) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  toggle.addEventListener("click", toggleMenu);

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });

  document.addEventListener("keyup", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}
