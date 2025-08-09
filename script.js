
// Clean Mobile Navigation Script
document.addEventListener('DOMContentLoaded', () => {
  console.log('Mobile menu initialized');

  const toggleBtn = document.querySelector('.navbar__toggle');
  const menu = document.querySelector('.navbar__menu');

  if (!toggleBtn || !menu) {
    console.warn('Navigation elements not found');
    return;
  }

  // Toggle menu function
  const toggleMenu = () => {
    const isOpen = menu.classList.contains('mobile-open');
    if (isOpen) {
      menu.classList.remove('mobile-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      console.log('Menu closed');
    } else {
      menu.classList.add('mobile-open');
      toggleBtn.setAttribute('aria-expanded', 'true');
      console.log('Menu opened');
    }
  };

  // Close menu function
  const closeMenu = () => {
    menu.classList.remove('mobile-open');
    toggleBtn.setAttribute('aria-expanded', 'false');
  };

  // Toggle button click
  toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Menu toggle clicked');
    toggleMenu();
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !toggleBtn.contains(e.target)) {
      if (menu.classList.contains('mobile-open')) {
        closeMenu();
      }
    }
  });

  // Close on navigation click
  menu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      closeMenu();
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        closeMenu();
      }
    });
  });

  // Initialize aria state
  toggleBtn.setAttribute('aria-expanded', 'false');
});
