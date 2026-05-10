// Compteur interactif
let count = 0;

function change(val) {
  count += val;
  document.getElementById('count').textContent = count;
}

function raz() {
  count = 0;
  document.getElementById('count').textContent = 0;
}

// Animation d'apparition au scroll
window.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.card, .step');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    observer.observe(el);
  });
});