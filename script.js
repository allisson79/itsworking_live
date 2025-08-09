// script.js — mobilnavigasjon + smooth scroll
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.navbar__toggle');
  const menu = document.querySelector('.navbar__menu');

  if (!toggleBtn || !menu) return;

  const setExpanded = (isOpen) => {
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
  };

  const openMenu = () => {
    menu.classList.add('mobile-open');
    setExpanded(true);
  };

  const closeMenu = () => {
    menu.classList.remove('mobile-open');
    setExpanded(false);
  };

  // Toggle ved klikk på hamburger
  toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const isOpen = menu.classList.contains('mobile-open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Lukk ved klikk utenfor
  document.addEventListener('click', (e) => {
    if (!toggleBtn.contains(e.target) && !menu.contains(e.target)) {
      closeMenu();
    }
  });

  // Lukk ved lenkeklikk
  menu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      closeMenu();
    }
  });

  // Smooth scroll for anker-lenker
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});