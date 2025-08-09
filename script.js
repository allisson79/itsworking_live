
// script.js — mobilnavigasjon + smooth scroll + diagnostikk
document.addEventListener('DOMContentLoaded', () => {
  const ts = new Date().toISOString();
  console.log('[NAV] script.js LOADED', ts);

  const toggleBtn = document.querySelector('.navbar__toggle');
  const menu = document.querySelector('.navbar__menu');

  if (!toggleBtn || !menu) {
    console.warn('[NAV] Missing structure:', { hasToggle: !!toggleBtn, hasMenu: !!menu });
    return;
  }

  // Utility: sync aria
  const setExpanded = (isOpen) => toggleBtn.setAttribute('aria-expanded', String(isOpen));

  const openMenu  = () => { menu.classList.add('mobile-open');  setExpanded(true);  diag('open');  };
  const closeMenu = () => { menu.classList.remove('mobile-open'); setExpanded(false); diag('close'); };
  const toggleMenu = () => (menu.classList.contains('mobile-open') ? closeMenu() : openMenu());

  // Diagnostikk: logg computed style for å avdekke CSS-konflikter
  function diag(action) {
    try {
      const cs = getComputedStyle(menu);
      console.log('[NAV]', action, {
        classList: menu.className,
        display: cs.display,
        position: cs.position,
        mqMobile: matchMedia('(max-width: 768px)').matches
      });
    } catch (e) {}
  }

  // Toggle via knapp
  toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });

  // Lukk ved klikk utenfor
  document.addEventListener('click', (e) => {
    const outside = !menu.contains(e.target) && !toggleBtn.contains(e.target);
    if (outside && menu.classList.contains('mobile-open')) closeMenu();
  });

  // Smooth scroll + lukk ved intern ankerlenke
  const isInternal = (a) =>
    a.hash && a.getAttribute('href')?.startsWith('#') && document.getElementById(a.hash.slice(1));

  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      if (!isInternal(a)) return;
      e.preventDefault();
      document.getElementById(a.hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (menu.classList.contains('mobile-open')) closeMenu();
    });
  });

  // Init
  setExpanded(menu.classList.contains('mobile-open'));
  diag('init');
});
