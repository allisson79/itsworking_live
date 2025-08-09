
// Navigation loader with active link highlighting
async function loadNavigation() {
  try {
    const response = await fetch('/partials/nav.html');
    const navHTML = await response.text();
    
    // Replace the nav-root div
    const navRoot = document.getElementById('nav-root');
    if (navRoot) {
      navRoot.outerHTML = navHTML;
      
      // Set active link based on current page
      setActiveNavLink();
      
      // Reinitialize mobile menu after nav is loaded
      if (window.initializeMobileMenu) {
        window.initializeMobileMenu();
      }
    }
  } catch (error) {
    console.error('Failed to load navigation:', error);
    // Fallback - show a basic navigation message
    const navRoot = document.getElementById('nav-root');
    if (navRoot) {
      navRoot.innerHTML = '<p>Navigation loading failed. Please refresh the page.</p>';
    }
  }
}

// Set active link based on current page
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  // Remove existing active classes
  document.querySelectorAll('.nav-link.active').forEach(link => {
    link.classList.remove('active');
  });
  
  // Add active class to current page link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || 
        (currentPage === 'index.html' && href.startsWith('#')) ||
        (currentPage === '' && href.startsWith('#'))) {
      link.classList.add('active');
    }
  });
}

// Auto-load navigation when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadNavigation);
} else {
  loadNavigation();
}
