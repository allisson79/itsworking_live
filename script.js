
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.navbar__toggle');
  const menu = document.querySelector('.navbar__menu');

  if (!toggleBtn || !menu) {
    console.warn('Menu elements not found');
    return;
  }

  toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.toggle('mobile-open');
    
    if (menu.classList.contains('mobile-open')) {
      console.log('Menu opened');
      document.body.style.overflow = 'hidden'; // Prevent scroll
    } else {
      console.log('Menu closed');
      document.body.style.overflow = ''; // Restore scroll
    }
  });

  // Close menu when clicking a link
  menu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      menu.classList.remove('mobile-open');
      document.body.style.overflow = '';
      console.log('Menu closed via link click');
    }
  });

  // Close menu when clicking outside (on the overlay)
  menu.addEventListener('click', (e) => {
    if (e.target === menu) {
      menu.classList.remove('mobile-open');
      document.body.style.overflow = '';
      console.log('Menu closed via overlay click');
    }
  });
});
