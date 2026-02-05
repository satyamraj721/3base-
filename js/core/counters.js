export function initCounters() {
  const counters = document.querySelectorAll("[data-count]");

  counters.forEach(counter => {
    const target = Number(counter.dataset.count);
    let current = 0;

    const step = Math.ceil(target / 60);

    const tick = () => {
      current += step;
      if (current >= target) {
        counter.textContent = target;
      } else {
        counter.textContent = current;
        requestAnimationFrame(tick);
      }
    };

    tick();
  });
}
