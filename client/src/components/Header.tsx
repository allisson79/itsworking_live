import { Link, useLocation } from "wouter";
import { useState, useCallback, memo, useMemo, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

export const Header = memo(function Header() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const wasMenuOpenRef = useRef(false);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      if (wasMenuOpenRef.current) {
        menuButtonRef.current?.focus();
      }
      document.body.style.overflow = "";
      wasMenuOpenRef.current = false;
      return;
    }

    document.body.style.overflow = "hidden";
    const firstLink = navRef.current?.querySelector<HTMLAnchorElement>("a, button");
    firstLink?.focus();
    wasMenuOpenRef.current = true;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node | null;
      if (!navRef.current || !menuButtonRef.current || !target) {
        return;
      }
      if (!navRef.current.contains(target) && !menuButtonRef.current.contains(target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  const navLinks = useMemo(() => ({
    home: location === "/" ? "nav-link active" : "nav-link",
    services: location === "/tjenester" ? "nav-link active" : "nav-link",
    technology: location === "/teknologi" ? "nav-link active" : "nav-link",
    about: location === "/om-oss" ? "nav-link active" : "nav-link",
  }), [location]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <Link href="/" className="logo">
          <img src="/itsworking_logo_transparent_new.png" alt="Its Working" />
        </Link>

        <button 
          className="mobile-menu-btn" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          ref={menuButtonRef}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav
          id="primary-navigation"
          className={`nav-links ${isMenuOpen ? 'open' : ''}`}
          ref={navRef}
        >
          <Link href="/" className={navLinks.home} onClick={closeMenu}>
            Hjem
          </Link>
          <Link href="/tjenester" className={navLinks.services} onClick={closeMenu}>
            Tjenester
          </Link>
          <Link href="/teknologi" className={navLinks.technology} onClick={closeMenu}>
            Teknologi & Partnere
          </Link>
          <Link href="/om-oss" className={navLinks.about} onClick={closeMenu}>
            Om oss
          </Link>
          <Link href="/kontakt" className="nav-btn-cta" onClick={closeMenu}>
            Kontakt oss
          </Link>
        </nav>
      </div>
    </header>
  );
});
