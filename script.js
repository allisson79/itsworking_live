
// Global mobile menu state
let mobileMenuInitialized = false;

// Initialize mobile menu functionality
function initializeMobileMenu() {
  // Prevent multiple initializations
  if (mobileMenuInitialized) {
    return;
  }

  // Mobile menu elements
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const mobileOverlay = document.querySelector('.mobile-menu-overlay');
  const mobileClose = document.querySelector('.mobile-menu-close');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const body = document.body;

  // Check if all required elements exist
  if (!mobileToggle || !mobileOverlay || !mobileClose) {
    return;
  }

  // Open mobile menu
  function openMobileMenu() {
    mobileToggle.classList.add('active');
    mobileOverlay.classList.add('active');
    body.classList.add('mobile-menu-open');
    mobileToggle.setAttribute('aria-expanded', 'true');
  }

  // Close mobile menu
  function closeMobileMenu() {
    mobileToggle.classList.remove('active');
    mobileOverlay.classList.remove('active');
    body.classList.remove('mobile-menu-open');
    mobileToggle.setAttribute('aria-expanded', 'false');
  }

  // Toggle menu on hamburger click
  mobileToggle.addEventListener('click', function(e) {
    e.preventDefault();
    const isOpen = mobileOverlay.classList.contains('active');
    
    if (isOpen) {
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
  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', function() {
      // Small delay to allow navigation to start
      setTimeout(closeMobileMenu, 150);
    });
  });

  // Mark as initialized
  mobileMenuInitialized = true;
}

// Expose function globally for nav-loader to call
window.initializeMobileMenu = initializeMobileMenu;

// Global event listeners (independent of nav elements)
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const mobileOverlay = document.querySelector('.mobile-menu-overlay');
    if (mobileOverlay && mobileOverlay.classList.contains('active')) {
      const mobileToggle = document.querySelector('.mobile-menu-toggle');
      const body = document.body;
      
      mobileToggle.classList.remove('active');
      mobileOverlay.classList.remove('active');
      body.classList.remove('mobile-menu-open');
      mobileToggle.setAttribute('aria-expanded', 'false');
    }
  }
});

// Handle window resize
window.addEventListener('resize', function() {
  if (window.innerWidth > 768) {
    const mobileOverlay = document.querySelector('.mobile-menu-overlay');
    if (mobileOverlay && mobileOverlay.classList.contains('active')) {
      const mobileToggle = document.querySelector('.mobile-menu-toggle');
      const body = document.body;
      
      mobileToggle.classList.remove('active');
      mobileOverlay.classList.remove('active');
      body.classList.remove('mobile-menu-open');
      mobileToggle.setAttribute('aria-expanded', 'false');
    }
  }
});
