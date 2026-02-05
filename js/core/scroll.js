/**
 * Smooth Scroll for Anchor Links
 */

export function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", e => {
      const targetId = link.getAttribute("href");

      if (targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      const offset = 80;
      const top =
        target.getBoundingClientRect().top +
        window.pageYOffset -
        offset;

      window.scrollTo({
        top,
        behavior: "smooth"
      });
    });
  });
}
