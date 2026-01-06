import { Layout } from "@/components/Layout";
import { Link } from "wouter";
import { CheckCircle, Shield, Server, Headphones, MapPin, Phone, Clock, Monitor, Wifi, Cloud, Lock } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      <section className="hero-elevated">
        <div className="container">
          <div className="hero-card">
            <div className="hero-card-content">
              <p className="hero-tagline">Lokal IT-partner i Trondheim</p>
              <h1>IT som bare fungerer</h1>
              <p className="hero-subtitle">
                Vi tar oss av IT, slik at små og mellomstore bedrifter får mer tid til å drive sin virksomhet. 
                Trygt, stabilt og profesjonelt.
              </p>
              <div className="hero-cta">
                <Link href="/kontakt" className="btn" data-testid="link-contact-cta">
                  Ta kontakt
                </Link>
              </div>
            </div>
            <div className="hero-card-image">
              <img src="/trondheim_city.jpg" alt="Trondheim" />
            </div>
          </div>
        </div>
      </section>

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

      <section className="section-padding section-white">
        <div className="container">
          <div className="personal-partner-content">
            <div className="personal-partner-text">
              <h2>Personlig IT-partner</h2>
              <p>
                Its Working drives av Thomas Allisson, med lang erfaring innen IT-drift, nettverk og rådgivning for små og mellomstore bedrifter.
              </p>
              <p>
                Du forholder deg til én fast kontaktperson som tar ansvar og er tilgjengelig på kort varsel – uten mellomledd eller supportnummer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="container">
          <div className="section-header-offset">
            <h2>Hva vi leverer</h2>
            <p className="section-intro">
              Vi tilbyr komplette løsninger for din bedrifts IT-behov.
            </p>
          </div>
          
          <div className="card-grid card-grid-offset">
            <div className="service-card" data-testid="card-service-drift">
              <div className="card-icon">
                <Server size={28} />
              </div>
              <h3>Drift og vedlikehold</h3>
              <p>Vi overvåker og oppdaterer systemene dine proaktivt, slik at problemene løses før de oppstår.</p>
            </div>
            <div className="service-card" data-testid="card-service-sikkerhet">
              <div className="card-icon">
                <Shield size={28} />
              </div>
              <h3>Sikkerhet</h3>
              <p>Moderne sikkerhetsløsninger som beskytter dine data mot trusler, virus og angrep.</p>
            </div>
            <div className="service-card" data-testid="card-service-support">
              <div className="card-icon">
                <Headphones size={28} />
              </div>
              <h3>Support</h3>
              <p>Ingen spørsmål er for små. Vår brukerstøtte hjelper deg raskt tilbake i arbeid når noe stopper opp.</p>
            </div>
          </div>
          
          <div className="section-cta-left">
            <Link href="/tjenester" className="btn" data-testid="link-services">
              Se alle våre tjenester
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding section-white">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>En enklere hverdag</h2>
              <p>
                For mange bedrifter er IT en kilde til frustrasjon. Nedetid, sikkerhetstrusler og systemer som ikke snakker sammen stjeler verdifull tid.
              </p>
              <p>
                Hos <strong>Its Working</strong> er vår filosofi enkel: Du skal ikke trenge å tenke på IT. Vi leverer løsninger som er usynlige i hverdagen, men som gir deg kraften du trenger for å vokse.
              </p>
              <ul className="check-list">
                <li>
                  <CheckCircle size={20} className="icon-primary" /> <span>Rask og personlig support</span>
                </li>
                <li>
                  <CheckCircle size={20} className="icon-primary" /> <span>Forutsigbare kostnader</span>
                </li>
                <li>
                  <CheckCircle size={20} className="icon-primary" /> <span>Sikkerhet i høysetet</span>
                </li>
              </ul>
            </div>
            <div className="about-image">
              <img src="/modern_office_01.jpg" alt="Moderne arbeidsområde" className="rounded-image" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="container">
          <div className="cta-box">
            <h2>Klar for enklere IT?</h2>
            <p className="section-intro">
              Ta kontakt for en uforpliktende samtale om hvordan vi kan hjelpe din bedrift.
            </p>
            <div className="cta-box-action">
              <Link href="/kontakt" className="btn" data-testid="link-contact-bottom">
                Kontakt oss
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
