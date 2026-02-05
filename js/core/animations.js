/**
 * Scroll Reveal Animations
 * No GSAP required (lighter & faster)
 */

export function initRevealAnimations() {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) return;

  const animatedElements = document.querySelectorAll("[data-animate]");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  animatedElements.forEach(el => observer.observe(el));
}
