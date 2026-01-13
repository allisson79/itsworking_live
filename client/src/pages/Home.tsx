import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { FadeInSection } from "@/components/FadeInSection";
import { Link } from "wouter";
import {
  Shield,
  Server,
  Headphones,
  Monitor,
  Wifi,
  Cloud,
  Lock,
  TrendingUp,
  Award,
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
      <section className="hero-fullscreen hero-animated">
        <div className="hero-bg" style={{ backgroundImage: 'url(/trondheim_city.webp)' }}></div>
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-fullscreen-content">
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
      <FadeInSection className="section-padding section-white section-overlap">
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
      </FadeInSection>

      {/* SAMARBEIDSPARTNERE */}
      <FadeInSection className="section-padding section-light">
        <div className="container">
          <div className="partner-logos-section">
            <h3>Samarbeidspartnere</h3>
            <p className="partner-logos-subtitle">
              Vi samarbeider med anerkjente leverandører for å sikre kvalitet,
              pålitelighet og trygg levering.
            </p>

            <div className="partner-logos-grid">
              <img
                src="/gc-logo-hor-blue.webp"
                alt="GlobalConnect"
                className="partner-logo"
                loading="lazy"
                width="200"
                height="60"
              />
              <img
                src="/Logo-Digiflow-AS.webp"
                alt="Digiflow AS"
                className="partner-logo"
                loading="lazy"
                width="200"
                height="60"
              />
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* PERSONLIG IT-PARTNER */}
      <FadeInSection className="section-padding section-white">
        <div className="container">
          <div className="personal-partner-section">
            <div className="personal-partner-photo">
              <img 
                src="/ProfilbildeThomas.jpg" 
                alt="Thomas Allisson" 
                className="founder-photo"
                width="280"
                height="280"
              />
              <div className="experience-badge">
                <Award size={18} />
                <span>20+ års erfaring</span>
              </div>
            </div>
            <div className="personal-partner-text-side">
              <h2>Personlig IT-partner</h2>
              <p>
                Its Working drives av Thomas Allisson, med over 20 års erfaring innen
                IT-drift, nettverk og rådgivning for små og mellomstore bedrifter.
              </p>
              <p>
                Du forholder deg til én fast kontaktperson som tar ansvar og er
                tilgjengelig på kort varsel – uten mellomledd eller supportnummer.
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* TJENESTER */}
      <FadeInSection className="section-padding section-light">
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

          <div className="section-cta-center">
            <Link href="/tjenester" className="btn">
              Se alle tjenester
            </Link>
          </div>
        </div>
      </FadeInSection>

      {/* OM OSS */}
      <FadeInSection className="section-padding section-white">
        <div className="container">
          <div className="about-content single-column">
            <div className="about-text">
              <h2>En enklere hverdag</h2>
              <p>
                IT skal ikke være en tidstyv. Vi leverer løsninger som bare
                fungerer – slik at du kan fokusere på drift og vekst.
              </p>
              <div className="card-list">
                <div className="card-list-item">
                  <div className="card-list-icon"><Headphones size={20} /></div>
                  <span className="card-list-text">Rask og personlig support</span>
                </div>
                <div className="card-list-item">
                  <div className="card-list-icon"><TrendingUp size={20} /></div>
                  <span className="card-list-text">Forutsigbare kostnader</span>
                </div>
                <div className="card-list-item">
                  <div className="card-list-icon"><Shield size={20} /></div>
                  <span className="card-list-text">Sikkerhet i høysetet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* CTA */}
      <FadeInSection className="section-padding section-light">
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
      </FadeInSection>
    </Layout>
  );
}
