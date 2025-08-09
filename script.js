
document.addEventListener('DOMContentLoaded', function() {
  console.log('Mobile menu initialized');
  
  // Mobile menu elements
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const mobileOverlay = document.querySelector('.mobile-menu-overlay');
  const mobileClose = document.querySelector('.mobile-menu-close');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const body = document.body;

  // Check if elements exist
  if (!mobileToggle || !mobileOverlay || !mobileClose) {
    console.log('Mobile menu elements missing:', {
      toggle: !!mobileToggle,
      overlay: !!mobileOverlay,
      close: !!mobileClose
    });
    return;
  }

  console.log('Mobile menu elements found:', {
    toggle: !!mobileToggle,
    overlay: !!mobileOverlay,
    close: !!mobileClose,
    navLinks: mobileNavLinks.length
  });

  // Open mobile menu
  function openMobileMenu() {
    console.log('Opening mobile menu...');
    mobileToggle.classList.add('active');
    mobileOverlay.classList.add('active');
    body.classList.add('mobile-menu-open');
    mobileToggle.setAttribute('aria-expanded', 'true');
    
    // Force styles for debugging
    mobileOverlay.style.opacity = '1';
    mobileOverlay.style.visibility = 'visible';
    mobileOverlay.style.zIndex = '9999';
    
    console.log('Menu opened - overlay classes:', mobileOverlay.className);
  }

  // Close mobile menu
  function closeMobileMenu() {
    console.log('Closing mobile menu...');
    mobileToggle.classList.remove('active');
    mobileOverlay.classList.remove('active');
    body.classList.remove('mobile-menu-open');
    mobileToggle.setAttribute('aria-expanded', 'false');
    
    // Reset forced styles
    mobileOverlay.style.opacity = '';
    mobileOverlay.style.visibility = '';
    mobileOverlay.style.zIndex = '';
    
    console.log('Menu closed');
  }

  // Toggle menu on hamburger click
  mobileToggle.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Menu toggle clicked');
    const isOpen = mobileOverlay.classList.contains('active');
    console.log('Menu is open:', isOpen);
    
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  // Close menu on close button click
  mobileClose.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Close button clicked');
    closeMobileMenu();
  });

  // Close menu when clicking outside content
  mobileOverlay.addEventListener('click', function(e) {
    if (e.target === mobileOverlay) {
      console.log('Overlay background clicked');
      closeMobileMenu();
    }
  });

  // Close menu when clicking nav links
  mobileNavLinks.forEach((link, index) => {
    link.addEventListener('click', function() {
      console.log('Nav link clicked:', index);
      // Small delay to allow navigation to start
      setTimeout(closeMobileMenu, 150);
    });
  });

  // Close menu on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileOverlay.classList.contains('active')) {
      console.log('Escape key pressed');
      closeMobileMenu();
    }
  });

  // Handle window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && mobileOverlay.classList.contains('active')) {
      console.log('Window resized, closing menu');
      closeMobileMenu();
    }
  });

  console.log('Mobile menu event listeners attached');
});
