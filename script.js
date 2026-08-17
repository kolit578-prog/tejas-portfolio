document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.reveal');
  items.forEach(function (el, i) {
    setTimeout(function () { el.classList.add('visible'); }, 120 + i * 90);
  });
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.08 });
    items.forEach(function (el) { observer.observe(el); });
  }
});
