import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path: string) => location === path ? "nav-link active" : "nav-link";

  return (
    <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
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
          <Link href="/" className={isActive("/")} onClick={() => setIsMenuOpen(false)}>
            Hjem
          </Link>
          <Link href="/tjenester" className={isActive("/tjenester")} onClick={() => setIsMenuOpen(false)}>
            Tjenester
          </Link>
          <Link href="/teknologi" className={isActive("/teknologi")} onClick={() => setIsMenuOpen(false)}>
            Teknologi & Partnere
          </Link>
          <Link href="/om-oss" className={isActive("/om-oss")} onClick={() => setIsMenuOpen(false)}>
            Om oss
          </Link>
          <Link href="/kontakt" className={isActive("/kontakt")} onClick={() => setIsMenuOpen(false)}>
            Kontakt
          </Link>
        </nav>
      </div>
    </header>
  );
}
