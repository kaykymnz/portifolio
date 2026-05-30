function initImageSkeletons() {
  document.querySelectorAll('.project-card img, .design-card img').forEach((img) => {
    const card = img.closest('.project-card, .design-card');
    if (!card) return;

    card.classList.add('image-loading');

    const finish = () => card.classList.remove('image-loading');

    if (img.complete && img.naturalWidth > 0) {
      finish();
      return;
    }

    img.addEventListener('load', finish, { once: true });
    img.addEventListener('error', finish, { once: true });
  });
}

function initScrollReveal() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const selectors = [
    '.section-padding > .container > *',
    '.project-detail-main .container > *',
    'footer .container > *',
    '.design-detail-container'
  ];

  const elements = selectors
    .flatMap((selector) => Array.from(document.querySelectorAll(selector)))
    .filter((element) => !element.closest('.hero'));

  if (prefersReducedMotion) {
    elements.forEach((element) => element.classList.add('revealed'));
    return;
  }

  elements.forEach((element, index) => {
    element.classList.add('reveal');
    element.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    });
  }, {
    rootMargin: '0px 0px -12% 0px',
    threshold: 0.12
  });

  elements.forEach((element) => observer.observe(element));
}

document.addEventListener('DOMContentLoaded', () => {
  initImageSkeletons();
  initScrollReveal();
});
