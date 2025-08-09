
document.addEventListener('DOMContentLoaded', function() {
  console.log('Mobile menu initialized');
  
  const toggleBtn = document.querySelector('.navbar__toggle');
  const menu = document.querySelector('.navbar__menu');
  
  if (!toggleBtn || !menu) {
    console.warn('Menu elements not found');
    return;
  }
  
  toggleBtn.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Menu toggle clicked');
    
    const isOpen = menu.classList.contains('mobile-open');
    
    if (isOpen) {
      menu.classList.remove('mobile-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      console.log('Menu closed');
    } else {
      menu.classList.add('mobile-open');
      toggleBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      console.log('Menu opened');
    }
  });
  
  // Close menu when clicking on a link
  menu.addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
      menu.classList.remove('mobile-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      console.log('Menu closed via link click');
    }
  });
});
