import { Link } from "wouter";
import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { memo, useMemo } from "react";

// Memoize styles to prevent object recreation on every render
const logoStyle = { display: 'block', marginBottom: '1rem', maxWidth: '200px' } as const;
const footerListStyle = { display: 'flex', flexDirection: 'column', gap: '8px' } as const;
const contactListStyle = { display: 'flex', flexDirection: 'column', gap: '12px' } as const;
const contactItemStyle = { display: 'flex', alignItems: 'center', gap: '10px' } as const;
const copyrightContainerStyle = { marginTop: '32px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', fontSize: '0.9rem' } as const;

export const Footer = memo(function Footer() {
  // Memoize the year calculation to avoid recalculating on every render
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-column">
          <Link href="/" className="logo" style={logoStyle}>
            <img src="/its-working-logo-white.png" alt="Its Working" />
          </Link>
          <p>
            Profesjonell IT-drift for små og mellomstore bedrifter. 
            Vi sørger for at teknologien din bare fungerer.
          </p>
        </div>
        
        <div className="footer-column">
          <h3>Snarveier</h3>
          <ul style={footerListStyle}>
            <li><Link href="/tjenester">Tjenester</Link></li>
            <li><Link href="/teknologi">Teknologi</Link></li>
            <li><Link href="/om-oss">Om oss</Link></li>
            <li><Link href="/kontakt">Kontakt oss</Link></li>
            <li><Link href="/personvern">Personvern</Link></li>
            <li><button onClick={() => {
              window.dispatchEvent(new Event("open-cookie-preferences"));
            }} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: 0, fontSize: 'inherit', fontFamily: 'inherit' }}>Samtykkepreferanser</button></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Kontakt</h3>
          <ul style={contactListStyle}>
            <li style={contactItemStyle}>
              <MapPin size={18} />
              <span>Fjordgata 43, 7010 Trondheim</span>
            </li>
            <li style={contactItemStyle}>
              <Phone size={18} />
              <a href="tel:+4798850462">988 50 462</a>
            </li>
            <li style={contactItemStyle}>
              <Mail size={18} />
              <a href="mailto:thomas@itsworking.no">thomas@itsworking.no</a>
            </li>
            <li style={contactItemStyle}>
              <Linkedin size={18} />
              <a href="https://www.linkedin.com/company/itsworking-no" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container" style={copyrightContainerStyle}>
        <p>&copy; {currentYear} Its Working AS. Alle rettigheter reservert.</p>
      </div>
    </footer>
  );
});
