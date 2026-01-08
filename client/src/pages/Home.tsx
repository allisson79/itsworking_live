import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import {
  CheckCircle,
  Shield,
  Server,
  Headphones,
  Monitor,
  Wifi,
  Cloud,
  Lock,
} from "lucide-react";

export default function Home() {
  return (
    <Layout>
      <SEO
        title="Hjem"
        description="Its Working er din lokale IT-partner i Trondheim. Vi tar oss av IT-drift, nettverk, sikkerhet og Microsoft 365 for små og mellomstore bedrifter."
        path="/"
        image="/trondheim_city.jpg"
      />
      {/* HERO */}
      <section className="hero-fullscreen" style={{ backgroundImage: 'url(/trondheim_city.jpg)' }}>
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-fullscreen-content">
              <p className="hero-tagline-light">Lokal IT-partner i Trondheim</p>
              <h1>IT-partner i Trondheim som bare fungerer</h1>
              <p className="hero-subtitle-light">
                Vi tar oss av IT for små og mellomstore bedrifter i Trondheim og
                regionen. Med én fast kontaktperson får du trygg, stabil og
                profesjonell IT-drift.
              </p>
              <div className="hero-cta">
                <Link href="/kontakt" className="btn">
                  Ta kontakt
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ANSVAR */}
      <section className="section-padding section-white section-overlap">
        <div className="container">
          <div className="responsibility-section">
            <h2>Dette tar vi ansvar for</h2>
            <ul className="responsibility-list">
              <li>
                <Monitor size={20} className="icon-primary" />
                <span>IT-drift og support</span>
              </li>
              <li>
                <Wifi size={20} className="icon-primary" />
                <span>Nettverk og internett</span>
              </li>
              <li>
                <Lock size={20} className="icon-primary" />
                <span>Sikkerhet og backup</span>
              </li>
              <li>
                <Cloud size={20} className="icon-primary" />
                <span>Sky og Microsoft 365</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SAMARBEIDSPARTNERE */}
      <section className="section-padding section-light">
        <div className="container">
          <div className="partner-logos-section">
            <h3>Samarbeidspartnere</h3>
            <p className="partner-logos-subtitle">
              Vi samarbeider med anerkjente leverandører for å sikre kvalitet,
              pålitelighet og trygg levering.
            </p>

            <div className="partner-logos-grid">
              <img
                src="/gc-logo-hor-blue.png"
                alt="GlobalConnect"
                className="partner-logo"
              />
              <img
                src="/Logo-Digiflow-AS.png"
                alt="Digiflow AS"
                className="partner-logo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PERSONLIG IT-PARTNER */}
      <section className="section-padding section-white">
        <div className="container">
          <div className="personal-partner-content">
            <div className="personal-partner-text">
              <h2>Personlig IT-partner</h2>
              <p>
                Its Working drives av Thomas Allisson, med lang erfaring innen
                IT-drift, nettverk og rådgivning for små og mellomstore bedrifter.
              </p>
              <p>
                Du forholder deg til én fast kontaktperson som tar ansvar og er
                tilgjengelig på kort varsel – uten mellomledd eller supportnummer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TJENESTER */}
      <section className="section-padding section-light">
        <div className="container">
          <h2>Hva vi leverer</h2>

          <div className="card-grid">
            <div className="service-card">
              <Server size={28} />
              <h3>Drift og vedlikehold</h3>
              <p>
                Proaktiv overvåking og vedlikehold som forebygger problemer før
                de oppstår.
              </p>
            </div>

            <div className="service-card">
              <Shield size={28} />
              <h3>Sikkerhet</h3>
              <p>
                Moderne sikkerhetsløsninger som beskytter data og systemer.
              </p>
            </div>

            <div className="service-card">
              <Headphones size={28} />
              <h3>Support</h3>
              <p>
                Rask, personlig hjelp når noe stopper opp – uten kø eller
                ticketsystem-mareritt.
              </p>
            </div>
          </div>

          <div className="section-cta-left">
            <Link href="/tjenester" className="btn">
              Se alle tjenester
            </Link>
          </div>
        </div>
      </section>

      {/* OM OSS */}
      <section className="section-padding section-white">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>En enklere hverdag</h2>
              <p>
                IT skal ikke være en tidstyv. Vi leverer løsninger som bare
                fungerer – slik at du kan fokusere på drift og vekst.
              </p>
              <ul className="check-list">
                <li>
                  <CheckCircle size={20} /> Rask og personlig support
                </li>
                <li>
                  <CheckCircle size={20} /> Forutsigbare kostnader
                </li>
                <li>
                  <CheckCircle size={20} /> Sikkerhet i høysetet
                </li>
              </ul>
            </div>

            <div className="about-image">
              <img
                src="/modern_office_01.jpg"
                alt="Moderne kontormiljø"
                className="rounded-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding section-light">
        <div className="container">
          <div className="cta-box">
            <h2>Klar for enklere IT?</h2>
            <p>
              Ta kontakt for en uforpliktende prat om hvordan vi kan hjelpe din
              bedrift.
            </p>
            <Link href="/kontakt" className="btn">
              Kontakt oss
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
