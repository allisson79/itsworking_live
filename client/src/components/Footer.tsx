import { Link } from "wouter";
import { Mail, MapPin, Phone, Linkedin, Facebook } from "lucide-react";
import { memo, useMemo } from "react";
import { Newsletter } from "./Newsletter";

// Memoize styles to prevent object recreation on every render
const logoStyle = { display: 'block', marginBottom: '1rem', maxWidth: '200px' } as const;
const footerListStyle = { display: 'flex', flexDirection: 'column', gap: '8px' } as const;
const contactListStyle = { display: 'flex', flexDirection: 'column', gap: '12px' } as const;
const contactItemStyle = { display: 'flex', alignItems: 'center', gap: '10px' } as const;
const socialLinksStyle = { display: 'flex', gap: '12px', marginTop: '12px' } as const;
const socialIconStyle = { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.08)', color: '#ffffff' } as const;
const newsletterIntroStyle = { fontSize: '0.9rem', marginBottom: '12px', color: 'rgba(255,255,255,0.85)' } as const;
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
          <div style={socialLinksStyle}>
            <a href="https://www.linkedin.com/company/its-working-as" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={socialIconStyle}>
              <Linkedin size={20} />
            </a>
            <a href="https://www.facebook.com/ItsWorkingAS" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={socialIconStyle}>
              <Facebook size={20} />
            </a>
          </div>
        </div>
        
        <div className="footer-column">
          <h3>Snarveier</h3>
          <ul style={footerListStyle}>
            <li><Link href="/tjenester">Tjenester</Link></li>
            <li><Link href="/teknologi">Teknologi</Link></li>
            <li><Link href="/om-oss">Om oss</Link></li>
            <li><Link href="/kontakt">Kontakt oss</Link></li>
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
              <a href="mailto:kontakt@itsworking.no">kontakt@itsworking.no</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Nyhetsbrev</h3>
          <p style={newsletterIntroStyle}>
            Få tips og nyheter om IT direkte i innboksen.
          </p>
          <Newsletter />
        </div>
      </div>
      <div className="container" style={copyrightContainerStyle}>
        <p>&copy; {currentYear} Its Working AS. Alle rettigheter reservert.</p>
      </div>
    </footer>
  );
});
