
// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mainMenu = document.querySelector('.main-menu');
  
  if (menuToggle && mainMenu) {
    menuToggle.addEventListener('click', function() {
      mainMenu.classList.toggle('mobile-menu-open');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!menuToggle.contains(event.target) && !mainMenu.contains(event.target)) {
        mainMenu.classList.remove('mobile-menu-open');
      }
    });
  }
});
