
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

  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('nav ul.main-menu');
  
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      mobileMenu.classList.toggle('mobile-menu-open');
      
      if (mobileMenu.classList.contains('mobile-menu-open')) {
        menuToggle.innerHTML = '✕';
      } else {
        menuToggle.innerHTML = '☰';
      }
    });

    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('mobile-menu-open');
        menuToggle.innerHTML = '☰';
      });
    });

    document.addEventListener('click', function(event) {
      if (!event.target.closest('nav') && mobileMenu.classList.contains('mobile-menu-open')) {
        mobileMenu.classList.remove('mobile-menu-open');
        menuToggle.innerHTML = '☰';
      }
    });
    
    mobileMenu.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }
});

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
