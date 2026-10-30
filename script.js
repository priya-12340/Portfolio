// Floating particles (subtle background)
function createParticles(count) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    const size = Math.random() * 4 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDuration = Math.random() * 8 + 6 + 's';
    particle.style.animationDelay = Math.random() * 8 + 's';

    document.body.appendChild(particle);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  createParticles(25);
});