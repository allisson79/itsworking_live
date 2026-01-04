import { Link, useLocation } from "wouter";
import { useState, useCallback, memo } from "react";
import { Menu, X } from "lucide-react";

export const Header = memo(function Header() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  const isActive = useCallback((path: string) => location === path ? "nav-link active" : "nav-link", [location]);

  return (
    <header className="header">
      <div className="container header-content">
        <Link href="/" className="logo">
          <img src="/Its%20Working%20trans1test.png" alt="Its Working" />
        </Link>

        <button 
          className="mobile-menu-btn" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link href="/" className={isActive("/")} onClick={closeMenu}>
            Hjem
          </Link>
          <Link href="/tjenester" className={isActive("/tjenester")} onClick={closeMenu}>
            Tjenester
          </Link>
          <Link href="/teknologi" className={isActive("/teknologi")} onClick={closeMenu}>
            Teknologi & Partnere
          </Link>
          <Link href="/om-oss" className={isActive("/om-oss")} onClick={closeMenu}>
            Om oss
          </Link>
          <Link href="/kontakt" className={isActive("/kontakt")} onClick={closeMenu}>
            Kontakt
          </Link>
        </nav>
      </div>
    </header>
  );
});
