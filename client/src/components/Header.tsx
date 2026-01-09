import { Link, useLocation } from "wouter";
import { useState, useCallback, memo, useMemo, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Header = memo(function Header() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
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
