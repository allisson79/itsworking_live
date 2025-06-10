// Mobile menu toggle functionality - robust version
(function() {
  'use strict';

  function initializeMenu() {
    try {
      const menuToggle = document.querySelector('.mobile-menu-toggle');
      const mainMenu = document.querySelector('ul.main-menu');

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