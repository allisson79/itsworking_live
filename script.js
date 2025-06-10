
// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mainMenu = document.querySelector('nav ul:last-child');
  
  if (menuToggle && mainMenu) {
    menuToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      mainMenu.classList.toggle('mobile-menu-open');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!menuToggle.contains(event.target) && !mainMenu.contains(event.target)) {
        mainMenu.classList.remove('mobile-menu-open');
      }
    });
    
    // Close menu when pressing Escape key
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        mainMenu.classList.remove('mobile-menu-open');
      }
    });
  }
});
