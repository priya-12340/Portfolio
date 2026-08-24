function createParticles(count) {
  const body = document.body;

  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    const size = Math.random() * 4 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';

    particle.style.left = Math.random() * 100 + 'vw';

    const duration = Math.random() * 8 + 6;
    const delay = Math.random() * 8;
    particle.style.animationDuration = duration + 's';
    particle.style.animationDelay = delay + 's';

    body.appendChild(particle);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  createParticles(30);
});


function initTiltEffect() {
  const cards = document.querySelectorAll('.project-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)';
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initTiltEffect();
});

function initParallax() {
  const heroCard = document.querySelector('.hero-card');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    const moveY = scrollY * 0.4;
    const opacity = 1 - (scrollY / 400);

    heroCard.style.transform = `translateY(${moveY}px)`;
    heroCard.style.opacity = Math.max(opacity, 0);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initParallax();
});

function initScrollReveal() {
  const sections = document.querySelectorAll('section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active');
      }
    });
  }, { threshold: 0.15 });

  sections.forEach(section => {
  if (section.id !== 'hero') {
    section.classList.add('reveal');
    observer.observe(section);
  }
});
}

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
});