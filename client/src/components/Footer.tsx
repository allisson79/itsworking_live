import { Link } from "wouter";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-column">
          <Link href="/" className="logo" style={{ display: 'block', marginBottom: '1rem', maxWidth: '200px' }}>
            <img src="/its-working-logo-white.png" alt="Its Working" />
          </Link>
          <p>
            Profesjonell IT-drift for små og mellomstore bedrifter. 
            Vi sørger for at teknologien din bare fungerer.
          </p>
        </div>
        
        <div className="footer-column">
          <h3>Snarveier</h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li><Link href="/tjenester">Tjenester</Link></li>
            <li><Link href="/teknologi">Teknologi</Link></li>
            <li><Link href="/om-oss">Om oss</Link></li>
            <li><Link href="/kontakt">Kontakt oss</Link></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Kontakt</h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <MapPin size={18} />
              <span>Fjordgata 43, 7010 Trondheim</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Phone size={18} />
              <a href="tel:+4798850462">988 50 462</a>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Mail size={18} />
              <a href="mailto:kontakt@itsworking.no">kontakt@itsworking.no</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container" style={{ marginTop: '32px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', fontSize: '0.9rem' }}>
        <p>&copy; {new Date().getFullYear()} Its Working AS. Alle rettigheter reservert.</p>
      </div>
    </footer>
  );
}
