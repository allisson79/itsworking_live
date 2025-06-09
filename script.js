
// Mark active navigation link
document.addEventListener('DOMContentLoaded', function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPage || 
        (currentPage === '' && linkHref === 'index.html') ||
        (currentPage === 'index.html' && linkHref === 'index.html') ||
        (currentPage === 'om-oss.html' && linkHref === 'om-oss.html') ||
        (currentPage === 'hvorfor-velge-oss.html' && linkHref === 'hvorfor-velge-oss.html')) {
      link.classList.add('active');
    }
  });

  // Hamburger menu functionality
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('nav ul:last-child');
  
  if (menuToggle && mobileMenu) {
    // Toggle mobile menu
    menuToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      mobileMenu.classList.toggle('mobile-menu-open');
      
      // Change hamburger icon
      if (mobileMenu.classList.contains('mobile-menu-open')) {
        menuToggle.innerHTML = '✕';
      } else {
        menuToggle.innerHTML = '☰';
      }
    });

    // Close menu when clicking on a link
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('mobile-menu-open');
        menuToggle.innerHTML = '☰';
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!event.target.closest('nav') && mobileMenu.classList.contains('mobile-menu-open')) {
        mobileMenu.classList.remove('mobile-menu-open');
        menuToggle.innerHTML = '☰';
      }
    });
    
    // Prevent menu from closing when clicking inside it
    mobileMenu.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }
});

// Add subtle animations on page load
window.addEventListener('load', function() {
  const navItems = document.querySelectorAll('nav a:not([href="#"])');
  navItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(-10px)';
    setTimeout(() => {
      item.style.transition = 'all 0.3s ease';
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }, index * 100);
  });
});
