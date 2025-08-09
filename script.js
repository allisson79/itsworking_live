
document.addEventListener('DOMContentLoaded', function() {
  console.log('Modern mobile menu initialized');
  
  // Mobile menu elements
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const mobileOverlay = document.querySelector('.mobile-menu-overlay');
  const mobileClose = document.querySelector('.mobile-menu-close');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const body = document.body;

  // Check if elements exist
  if (!mobileToggle || !mobileOverlay || !mobileClose) {
    console.log('Mobile menu elements not found');
    return;
  }

  // Open mobile menu
  function openMobileMenu() {
    mobileToggle.classList.add('active');
    mobileOverlay.classList.add('active');
    body.classList.add('mobile-menu-open');
    mobileToggle.setAttribute('aria-expanded', 'true');
    console.log('Mobile menu opened');
  }

  // Close mobile menu
  function closeMobileMenu() {
    mobileToggle.classList.remove('active');
    mobileOverlay.classList.remove('active');
    body.classList.remove('mobile-menu-open');
    mobileToggle.setAttribute('aria-expanded', 'false');
    console.log('Mobile menu closed');
  }

  // Toggle menu on hamburger click
  mobileToggle.addEventListener('click', function(e) {
    e.preventDefault();
    if (mobileOverlay.classList.contains('active')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  // Close menu on close button click
  mobileClose.addEventListener('click', function(e) {
    e.preventDefault();
    closeMobileMenu();
  });

  // Close menu when clicking outside content
  mobileOverlay.addEventListener('click', function(e) {
    if (e.target === mobileOverlay) {
      closeMobileMenu();
    }
  });

  // Close menu when clicking nav links
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Small delay to allow navigation to start
      setTimeout(closeMobileMenu, 150);
    });
  });

  // Close menu on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileOverlay.classList.contains('active')) {
      closeMobileMenu();
    }
  });

  // Handle window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && mobileOverlay.classList.contains('active')) {
      closeMobileMenu();
    }
  });

  console.log('Mobile menu event listeners attached');
});
