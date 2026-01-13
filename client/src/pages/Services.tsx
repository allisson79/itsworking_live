import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { FadeInSection } from "@/components/FadeInSection";
import { Link } from "wouter";
import { Wifi, Globe, Shield, Monitor, Phone, Mail, Zap, Settings, TrendingUp, Users, Lock, Key, RefreshCw, Cloud, Headphones, HardDrive, LayoutDashboard } from "lucide-react";

export default function Services() {
  return (
    <Layout>
      <SEO
        title="Tjenester"
        description="Fiber, nettverk, WiFi, IT-sikkerhet og Microsoft 365 for bedrifter i Trondheim. Profesjonelle IT-tjenester med personlig oppfølging."
        path="/tjenester"
      />
      <section className="hero-fullscreen" style={{ backgroundImage: 'url(/tjenester.webp)' }}>
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-fullscreen-content">
              <h1>Tjenester</h1>
              <p className="hero-subtitle-light">
                Praktiske IT-tjenester for små og mellomstore bedrifter – levert med én fast kontaktperson og ansvar samlet ett sted.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FadeInSection className="section-padding section-white">
        <div className="container">
          <div className="service-detail-section">
            <div className="service-detail-icon">
              <Globe size={36} />
            </div>
            <div className="service-detail-content">
              <h2>Fiber og internett</h2>
              <p>
                Stabil og rask internettforbindelse er grunnmuren i et velfungerende IT-miljø. Its Working leverer fiberbaserte løsninger bygget på profesjonell infrastruktur, tilpasset små og mellomstore bedrifters behov.
              </p>
              <p>
                Løsningene skaleres enkelt og tilpasses både dagens bruk og fremtidig vekst.
              </p>
              
              <h3 className="service-subheading">Dette får du:</h3>
              <div className="card-list">
                <div className="card-list-item">
                  <div className="card-list-icon"><Zap size={20} /></div>
                  <span className="card-list-text">Stabil og skalerbar fiberforbindelse</span>
                </div>
                <div className="card-list-item">
                  <div className="card-list-icon"><Settings size={20} /></div>
                  <span className="card-list-text">Tilpasset kapasitet og redundans basert på virksomhetens behov</span>
                </div>
                <div className="card-list-item">
                  <div className="card-list-icon"><Users size={20} /></div>
                  <span className="card-list-text">Én ansvarlig leveranse gjennom Its Working</span>
                </div>
                <div className="card-list-item">
                  <div className="card-list-icon"><LayoutDashboard size={20} /></div>
                  <span className="card-list-text">Full oversikt gjennom en administrasjonsportal levert av Global Connect</span>
                </div>
              </div>
              
              <p className="service-closing">
                Portalen gir deg som kunde god innsikt i tjenestene du mottar og en samlet oversikt på tvers av lokasjoner. Enten virksomheten har én eller mange lokasjoner, sikrer dette forutsigbarhet, kontroll og enkel oppfølging over tid.
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="section-padding section-light">
        <div className="container">
          <div className="service-detail-section">
            <div className="service-detail-icon">
              <Wifi size={36} />
            </div>
            <div className="service-detail-content">
              <h2>Nettverk og WiFi</h2>
              <p>
                Et stabilt og godt nettverk er avgjørende for en effektiv arbeidshverdag. Its Working leverer moderne nettverks- og WiFi-løsninger tilpasset både kontor, lager og kombinerte arbeidsmiljøer.
              </p>
              
              <h3 className="service-subheading">Dette får du:</h3>
              <div className="card-list">
                <div className="card-list-item">
                  <div className="card-list-icon"><Wifi size={20} /></div>
                  <span className="card-list-text">Profesjonelle nettverks- og WiFi-løsninger tilpasset virksomhetens behov</span>
                </div>
                <div className="card-list-item">
                  <div className="card-list-icon"><Monitor size={20} /></div>
                  <span className="card-list-text">Sentralisert styring og overvåkning av nettverket</span>
                </div>
                <div className="card-list-item">
                  <div className="card-list-icon"><TrendingUp size={20} /></div>
                  <span className="card-list-text">Skalerbart oppsett som vokser med virksomheten</span>
                </div>
                <div className="card-list-item">
                  <div className="card-list-icon"><Headphones size={20} /></div>
                  <span className="card-list-text">Support og oppfølging gjennom Its Working</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="section-padding section-white">
        <div className="container">
          <div className="service-detail-section">
            <div className="service-detail-icon">
              <Shield size={36} />
            </div>
            <div className="service-detail-content">
              <h2>IT-sikkerhet</h2>
              <p>
                Sikkerhet er en forutsetning for trygg drift. Its Working leverer sikkerhetsløsninger som beskytter bedriftens data, brukere og systemer mot trusler.
              </p>
              
              <h3 className="service-subheading">Dette får du:</h3>
              <div className="card-list">
                <div className="card-list-item">
                  <div className="card-list-icon"><Shield size={20} /></div>
                  <span className="card-list-text">Brannmur og endepunktssikkerhet fra anerkjente leverandører</span>
                </div>
                <div className="card-list-item">
                  <div className="card-list-icon"><Key size={20} /></div>
                  <span className="card-list-text">Tofaktor-autentisering og tilgangsstyring</span>
                </div>
                <div className="card-list-item">
                  <div className="card-list-icon"><RefreshCw size={20} /></div>
                  <span className="card-list-text">Regelmessig gjennomgang og oppfølging av sikkerhetsstatus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="section-padding section-light">
        <div className="container">
          <div className="service-detail-section">
            <div className="service-detail-icon">
              <Monitor size={36} />
            </div>
            <div className="service-detail-content">
              <h2>Microsoft 365 og skytjenester</h2>
              <p>
                Moderne arbeidsverktøy gir fleksibilitet og effektivitet. Its Working leverer og drifter Microsoft 365-løsninger tilpasset små og mellomstore bedrifter.
              </p>
              
              <h3 className="service-subheading">Dette får du:</h3>
              <div className="card-list">
                <div className="card-list-item">
                  <div className="card-list-icon"><Cloud size={20} /></div>
                  <span className="card-list-text">Oppsett og drift av Microsoft 365</span>
                </div>
                <div className="card-list-item">
                  <div className="card-list-icon"><Mail size={20} /></div>
                  <span className="card-list-text">E-post, kalender og samhandlingsverktøy</span>
                </div>
                <div className="card-list-item">
                  <div className="card-list-icon"><HardDrive size={20} /></div>
                  <span className="card-list-text">Sikker lagring og deling av filer</span>
                </div>
                <div className="card-list-item">
                  <div className="card-list-icon"><Headphones size={20} /></div>
                  <span className="card-list-text">Brukerstøtte og lisensstyring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="section-padding section-light">
        <div className="container">
          <div className="cta-box">
            <h2>Vil du vite mer?</h2>
            <p className="section-intro">
              Ta gjerne kontakt for en uforpliktende prat om hvordan Its Working kan hjelpe din bedrift.
            </p>
            <div className="cta-contact">
              <div className="contact-inline-item">
                <Mail size={18} className="icon-primary" />
                <a href="mailto:thomas@itsworking.no">thomas@itsworking.no</a>
              </div>
              <div className="contact-inline-item">
                <Phone size={18} className="icon-primary" />
                <a href="tel:+4798850462">988 50 462</a>
              </div>
            </div>
            <div className="cta-box-action">
              <Link href="/kontakt" className="btn" data-testid="link-contact-services">
                Send melding
              </Link>
            </div>
          </div>
        </div>
      </FadeInSection>
    </Layout>
  );
}
