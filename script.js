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

// Form handling functionality
(function() {
  'use strict';
  
  function handleFormSubmission() {
    // Handle contact form
    const contactForm = document.querySelector('#contact-form form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Simple validation
        if (!data.name || !data.email || !data.message) {
          alert('Vennligst fyll ut alle påkrevde felt (*, e-post og melding).');
          return;
        }
        
        // Show success message (in real app, this would submit to a server)
        alert('Takk for din henvendelse! Vi svarer innen 4 timer i arbeidstiden.');
        contactForm.reset();
      });
    }
    
    // Handle newsletter signups with Pipedrive integration
    const newsletterForms = document.querySelectorAll('form[action="#"]');
    newsletterForms.forEach(form => {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = form.querySelector('input[type="email"]');
        const emailValue = emailInput ? emailInput.value.trim() : '';
        
        if (!emailValue) {
          alert('Vennligst oppgi en gyldig e-postadresse.');
          return;
        }
        
        // Show loading state
        const submitButton = form.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Registrerer...';
        submitButton.disabled = true;
        
        // Submit to Pipedrive (you'll need to set up a webhook or API endpoint)
        const formData = {
          email: emailValue,
          source: 'Newsletter signup',
          page: window.location.pathname,
          timestamp: new Date().toISOString()
        };
        
        // For now, we'll simulate the API call
        // In production, you'd want to call your Pipedrive API endpoint
        setTimeout(() => {
          // Success
          alert('Takk! Du er nå registrert for vårt nyhetsbrev. Du får en bekreftelse på e-post kort.');
          form.reset();
          
          // Reset button
          submitButton.textContent = originalButtonText;
          submitButton.disabled = false;
        }, 1000);
        
        // Uncomment this when you have your Pipedrive API endpoint ready:
        /*
        fetch('/api/newsletter-signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            alert('Takk! Du er nå registrert for vårt nyhetsbrev.');
            form.reset();
          } else {
            alert('Det oppstod en feil. Prøv igjen eller kontakt oss direkte.');
          }
        })
        .catch(error => {
          console.error('Error:', error);
          alert('Det oppstod en feil. Prøv igjen eller kontakt oss direkte.');
        })
        .finally(() => {
          submitButton.textContent = originalButtonText;
          submitButton.disabled = false;
        });
        */
      });
    });
  }
  
  // Initialize form handling when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', handleFormSubmission);
  } else {
    handleFormSubmission();
  }
})();