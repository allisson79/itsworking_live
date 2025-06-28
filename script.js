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

function submitNewsletter(event) {
  event.preventDefault();
  alert('Takk for at du melder deg på! Vi sender deg en bekreftelse snart.');
  // Here you would normally send the form data to your server
}

function submitContact(event) {
  event.preventDefault();
  alert('Takk for din henvendelse! Vi kommer tilbake til deg innen 4 timer.');
  // Here you would normally send the form data to your server
}

function shareOnEmail() {
  const subject = encodeURIComponent(document.title);
  const body = encodeURIComponent(`Sjekk ut denne artikkelen: ${window.location.href}`);
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
}

function copyLink() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    alert('Lenke kopiert til utklippstavlen!');
  }).catch(() => {
    // Fallback for older browsers
    const textarea = document.createElement('textarea');
    textarea.value = window.location.href;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Lenke kopiert til utklippstavlen!');
  });
}

function openBlogPost(postId) {
  const postUrls = {
    'phishing-trondheim': 'blog-post-phishing.html',
    'backup-strategi': 'blog-post-backup.html',
    'passord-sikkerhet': 'blog-post-passord.html',
    'fiber-utbygging': '#', // Placeholder - post doesn't exist yet
    'hjemmekontor-sikkerhet': '#', // Placeholder - post doesn't exist yet
    'gdpr-endringer': '#' // Placeholder - post doesn't exist yet
  };

  const url = postUrls[postId];
  if (url && url !== '#') {
    window.location.href = url;
  } else {
    alert('Denne artikkelen kommer snart!');
  }
}

function filterBlog(category) {
  const posts = document.querySelectorAll('.blog-post');
  const buttons = document.querySelectorAll('.blog-category-btn');

  // Update button styles
  buttons.forEach(btn => {
    btn.style.background = 'transparent';
    btn.style.color = '#0043a8';
    btn.classList.remove('active');
  });

  event.target.style.background = '#0043a8';
  event.target.style.color = 'white';
  event.target.classList.add('active');

  // Filter posts
  posts.forEach(post => {
    if (category === 'all' || post.dataset.category === category) {
      post.style.display = 'block';
    } else {
      post.style.display = 'none';
    }
  });
}

// Add smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Blog post navigation removed - blog moved to blog_backup folder

// Add hover effects to service cards
document.addEventListener('DOMContentLoaded', function() {
  const serviceCards = document.querySelectorAll('.service-card');

  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      const cardStyling = this.style;
      cardStyling.transform = 'translateY(-10px)';
      cardStyling.boxShadow = '0 20px 40px rgba(0, 67, 168, 0.4)';
    });

    card.addEventListener('mouseleave', function() {
      const cardStyling = this.style;
      cardStyling.transform = 'translateY(0)';
      cardStyling.boxShadow = '0 8px 25px rgba(0, 67, 168, 0.2)';
    });
  });
});

// Add hover effects to partner cards
document.addEventListener('DOMContentLoaded', function() {
  const partnerCards = document.querySelectorAll('.partner-card');

  partnerCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      const partnerStyling = this.style;
      partnerStyling.background = 'rgba(30, 127, 216, 0.2)';
      partnerStyling.transform = 'translateY(-5px)';
    });

    card.addEventListener('mouseleave', function() {
      const partnerStyling = this.style;
      partnerStyling.background = 'rgba(30, 127, 216, 0.1)';
      partnerStyling.transform = 'translateY(0)';
    });
  });
});

// IT Health Check booking functionality
function openHealthCheck() {
  // This could open a calendar booking widget or redirect to scheduling page
  alert('IT-helsesjekk booking kommer snart! Kontakt oss på kontakt@itsworking.no i mellomtiden.');
}

// Safe countdown timer for launch date
function initCountdown() {
  // Only initialize if countdown element exists
  const countdownElement = document.getElementById('countdown');
  if (!countdownElement) {
    return;
  }

  const launchDate = new Date('2025-06-25T09:00:00').getTime();

  function updateCountdown() {
    try {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance < 0) {
        countdownElement.innerHTML = 'Vi er live!';
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      countdownElement.innerHTML = `${days}d ${hours}t ${minutes}m ${seconds}s`;
    } catch (error) {
      console.warn('Countdown update failed:', error);
    }
  }

  // Update countdown every second
  const intervalId = setInterval(updateCountdown, 1000);
  updateCountdown(); // Initial call
  
  // Cleanup function
  return () => clearInterval(intervalId);
}

// Add scroll-triggered animations
function addScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        entry.target.classList.add('animate-in');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  // Observe all sections and cards
  const elementsToAnimate = document.querySelectorAll('section, .service-card, .partner-card, .testimonial-card');
  elementsToAnimate.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
  });
}

// Contact form functionality
function submitContact(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  // Get form values
  const name = formData.get('name');
  const email = formData.get('email');
  const company = formData.get('company') || 'Ikke oppgitt';
  const phone = formData.get('phone') || 'Ikke oppgitt';
  const subject = formData.get('subject');
  const message = formData.get('message');

  // Create email body
  const emailBody = `
Ny henvendelse fra kontaktskjema:

Navn: ${name}
E-post: ${email}
Bedrift: ${company}
Telefon: ${phone}
Emne: ${subject}

Melding:
${message}

---
Sendt fra kontaktskjema på itsworking.no
  `.trim();

  // Create mailto link
  const mailtoLink = `mailto:kontakt@itsworking.no?subject=Henvendelse: ${subject}&body=${encodeURIComponent(emailBody)}`;

  // Open email client
  window.location.href = mailtoLink;

  // Show confirmation
  alert('Takk for henvendelsen! Ditt e-postprogram åpnes nå. Vi svarer innen 4 timer i arbeidstiden.');

  // Reset form
  form.reset();
}

// Blog functionality
function shareArticle(platform, url, title) {
  let shareUrl;

  switch(platform) {
    case 'linkedin':
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
      break;
    case 'facebook':
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
      break;
    case 'twitter':
      shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
      break;
    default:
      return;
  }

  window.open(shareUrl, '_blank', 'width=600,height=400');
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(function() {
    alert('Lenke kopiert til utklippstavlen!');
  }).catch(function() {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Lenke kopiert til utklippstavlen!');
  });
}

// Initialize all functionality when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // Initialize countdown
  initCountdown();
  
  // Add scroll animations
  addScrollAnimations();

  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      // Skip if it's just "#" or if target doesn't exist
      if (href === '#' || href === '#/') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();

        const offsetTop = target.offsetTop - 100; // Account for fixed nav

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });

        // Close mobile menu if open
        const mobileMenu = document.querySelector('.main-menu');
        if (mobileMenu && mobileMenu.classList.contains('mobile-menu-open')) {
          mobileMenu.classList.remove('mobile-menu-open');
        }
      }
    });
  });

  // Add fade-in animation to sections
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  });

  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });

  // Enhanced navigation highlighting
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Add loading state to forms
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function() {
      const submitButton = form.querySelector('button[type="submit"]');
      if (submitButton) {
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sender...';
        submitButton.disabled = true;

        // Re-enable after a delay (in case form submission fails)
        setTimeout(() => {
          submitButton.textContent = originalText;
          submitButton.disabled = false;
        }, 3000);
      }
    });
  });

  // Add custom styling to hero elements
  const hero = document.querySelector('.hero');
  if (hero) {
    const heroCustomStyle = document.createElement('style');
    heroCustomStyle.textContent = `
      .hero {
        position: relative;
        overflow: hidden;
      }

      .hero::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.4);
        z-index: 1;
      }

      .hero-overlay {
        position: relative;
        z-index: 2;
      }
    `;
    document.head.appendChild(heroCustomStyle);
  }

  // Add fade-in animation for blog posts
  const blogAnimationStyles = document.createElement('style');
  blogAnimationStyles.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .blog-post:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 25px rgba(0, 42, 92, 0.3);
    }
  `;
  document.head.appendChild(blogAnimationStyles);
});