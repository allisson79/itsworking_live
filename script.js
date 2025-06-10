
// Mobile menu toggle functionality - robust version
(function() {
  'use strict';
  
  function initializeMenu() {
    try {
      const menuToggle = document.querySelector('.mobile-menu-toggle');
      const mainMenu = document.querySelector('nav ul:last-child');
      
      if (!menuToggle || !mainMenu) {
        console.log('Menu elements not found, retrying...');
        setTimeout(initializeMenu, 100);
        return;
      }
      
      console.log('Menu initialized successfully');
      
      // Toggle menu on button click
      menuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Menu toggle clicked');
        mainMenu.classList.toggle('mobile-menu-open');
      });
      
      // Close menu when clicking outside
      document.addEventListener('click', function(event) {
        if (mainMenu.classList.contains('mobile-menu-open')) {
          if (!menuToggle.contains(event.target) && !mainMenu.contains(event.target)) {
            mainMenu.classList.remove('mobile-menu-open');
          }
        }
      });
      
      // Close menu when pressing Escape key
      document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && mainMenu.classList.contains('mobile-menu-open')) {
          mainMenu.classList.remove('mobile-menu-open');
        }
      });
      
    } catch (error) {
      console.error('Error initializing menu:', error);
    }
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeMenu);
  } else {
    initializeMenu();
  }
})();
