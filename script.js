// Mobile performance optimizations
(function() {
  'use strict';

  // Optimize scroll performance on mobile
  let ticking = false;
  function updateScrollPosition() {
    // Add any scroll-based animations here
    ticking = false;
  }

  function requestScrollTick() {
    if (!ticking) {
      requestAnimationFrame(updateScrollPosition);
      ticking = true;
    }
  }

  window.addEventListener('scroll', requestScrollTick, { passive: true });

  // Prevent iOS bounce scrolling
  document.addEventListener('touchmove', function(e) {
    if (e.target.closest('.mobile-menu-open')) {
      e.preventDefault();
    }
  }, { passive: false });

  // Add loading optimization for images
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
      img.src = img.dataset.src;
    });
  }
})();


// Force dark mode only
(function() {
  'use strict';

  // Always apply dark mode
  document.body.classList.add('dark-mode');

  // Remove any saved light mode preference
  localStorage.removeItem('theme');
})();

// Mobile menu toggle functionality - robust version
(function() {
  'use strict';

  let menuInitialized = false;

  function initializeMenu() {
    if (menuInitialized) return;

    try {
      const menuToggle = document.querySelector('.mobile-menu-toggle');
      const mainMenu = document.querySelector('ul.main-menu');

      if (!menuToggle || !mainMenu) {
        setTimeout(initializeMenu, 200);
        return;
      }

      menuInitialized = true;
      console.log('Menu initialized successfully');

      // Toggle menu on button click
      menuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        mainMenu.classList.toggle('mobile-menu-open');
      });

      // Close menu when clicking outside (optimized for mobile)
      document.addEventListener('touchstart', function(event) {
        if (mainMenu.classList.contains('mobile-menu-open')) {
          if (!menuToggle.contains(event.target) && !mainMenu.contains(event.target)) {
            mainMenu.classList.remove('mobile-menu-open');
          }
        }
      }, { passive: true });

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

// FAQ toggle functionality
function toggleFAQ(element) {
  const content = element.nextElementSibling;
  const isOpen = content.style.display === 'block';

  // Close all FAQ items
  document.querySelectorAll('.faq-content').forEach(item => {
    item.style.display = 'none';
  });
  document.querySelectorAll('.faq-question').forEach(item => {
    item.classList.remove('active');
  });

  // Open clicked item if it was closed
  if (!isOpen) {
    content.style.display = 'block';
    element.classList.add('active');
  }
}

// Newsletter signup functionality
function submitNewsletter(event) {
  event.preventDefault();
  const email = document.getElementById('newsletter-email').value;

  if (email) {
    // Send to Pipedrive or your email service
    alert('Takk! Vi sender deg informasjon når vi lanserer 25. juni.');
    document.getElementById('newsletter-email').value = '';
  }
}

// Contact form functionality
function submitContact(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  // Here you would typically send to your backend or email service
  console.log('Contact form submitted:', data);
  alert('Takk for din henvendelse! Vi kontakter deg innen 4 timer på virkedager.');
  event.target.reset();
}

// Blog functionality
function filterBlog(category) {
  const posts = document.querySelectorAll('.blog-post');
  const buttons = document.querySelectorAll('.blog-category-btn');

  // Update active button
  buttons.forEach(btn => {
    btn.classList.remove('active');
    btn.style.background = 'transparent';
    btn.style.color = '#0043a8';
  });

  // Set active button
  event.target.classList.add('active');
  event.target.style.background = '#0043a8';
  event.target.style.color = 'white';

  // Filter posts
  posts.forEach(post => {
    if (category === 'all' || post.dataset.category === category) {
      post.style.display = 'block';
      post.style.animation = 'fadeIn 0.5s ease';
    } else {
      post.style.display = 'none';
    }
  });
}

function openBlogPost(postId) {
  // Map post IDs to actual file names
  const postMap = {
    'phishing-trondheim': 'blog-post-phishing.html',
    'backup-strategi': 'blog-post-backup.html',
    'fiber-utbygging': 'blog-post-fiber.html',
    'passord-sikkerhet': 'blog-post-passord.html',
    'hjemmekontor-sikkerhet': 'blog-post-hjemmekontor.html',
    'gdpr-endringer': 'blog-post-gdpr.html'
  };

  const fileName = postMap[postId];
  if (fileName) {
    window.location.href = fileName;
  } else {
    alert('Denne artikkelen kommer snart!');
  }
}

// Blog post sharing functionality
function shareOnEmail() {
  const subject = encodeURIComponent(document.title);
  const body = encodeURIComponent(`Sjekk ut denne nyttige IT-artikkelen: ${window.location.href}`);
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
}

function copyLink() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    alert('Lenke kopiert til utklippstavlen!');
  }).catch(() => {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = window.location.href;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Lenke kopiert til utklippstavlen!');
  });
}

// Add fade-in animation for blog posts
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .blog-post:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 42, 92, 0.3);
  }
`;
document.head.appendChild(style);

// IT Health Check booking functionality
function openHealthCheck() {
  // This could open a calendar booking widget or redirect to scheduling page
  alert('IT-helsesjekk booking kommer snart! Kontakt oss på kontakt@itsworking.no i mellomtiden.');
}

// Countdown timer for launch date
function initCountdown() {
  const launchDate = new Date('2025-06-25T09:00:00').getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = launchDate - now;

    if (distance < 0) {
      document.getElementById('countdown').innerHTML = 'Vi er live!';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
      countdownElement.innerHTML = `${days}d ${hours}t ${minutes}m ${seconds}s`;
    }
  }

  // Update countdown every second
  setInterval(updateCountdown, 1000);
  updateCountdown(); // Initial call
}

// Initialize countdown when page loads
document.addEventListener('DOMContentLoaded', initCountdown);