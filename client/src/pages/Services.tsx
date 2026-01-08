import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { CheckCircle, Wifi, Globe, Shield, Monitor, Phone, Mail } from "lucide-react";

export default function Services() {
  return (
    <Layout>
      <SEO
        title="Tjenester"
        description="Fiber, nettverk, WiFi, IT-sikkerhet og Microsoft 365 for bedrifter i Trondheim. Profesjonelle IT-tjenester med personlig oppfølging."
        path="/tjenester"
      />
      <section className="hero-elevated">
        <div className="container">
          <div className="hero-card">
            <div className="hero-card-content">
              <p className="hero-tagline">IT for SMB</p>
              <h1>Tjenester</h1>
              <p className="hero-subtitle">
                Praktiske IT-tjenester for små og mellomstore bedrifter – levert med én fast kontaktperson og ansvar samlet ett sted.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-white section-overlap">
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
              <ul className="check-list">
                <li>
                  <CheckCircle size={18} className="icon-primary" />
                  <span>Stabil og skalerbar fiberforbindelse</span>
                </li>
                <li>
                  <CheckCircle size={18} className="icon-primary" />
                  <span>Tilpasset kapasitet og redundans basert på virksomhetens behov</span>
                </li>
                <li>
                  <CheckCircle size={18} className="icon-primary" />
                  <span>Én ansvarlig leveranse gjennom Its Working</span>
                </li>
                <li>
                  <CheckCircle size={18} className="icon-primary" />
                  <span>Full oversikt gjennom en administrasjonsportal levert av Global Connect</span>
                </li>
              </ul>
              
              <p className="service-closing">
                Portalen gir deg som kunde god innsikt i tjenestene du mottar og en samlet oversikt på tvers av lokasjoner. Enten virksomheten har én eller mange lokasjoner, sikrer dette forutsigbarhet, kontroll og enkel oppfølging over tid.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-light">
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
              <ul className="check-list">
                <li>
                  <CheckCircle size={18} className="icon-primary" />
                  <span>Profesjonelle nettverks- og WiFi-løsninger tilpasset virksomhetens behov</span>
                </li>
                <li>
                  <CheckCircle size={18} className="icon-primary" />
                  <span>Sentralisert styring og overvåkning av nettverket</span>
                </li>
                <li>
                  <CheckCircle size={18} className="icon-primary" />
                  <span>Skalerbart oppsett som vokser med virksomheten</span>
                </li>
                <li>
                  <CheckCircle size={18} className="icon-primary" />
                  <span>Support og oppfølging gjennom Its Working</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-white">
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
              <ul className="check-list">
                <li>
                  <CheckCircle size={18} className="icon-primary" />
                  <span>Brannmur og endepunktssikkerhet fra anerkjente leverandører</span>
                </li>
                <li>
                  <CheckCircle size={18} className="icon-primary" />
                  <span>SOC-tjenester via Netsecurity (godkjent av Nkom)</span>
                </li>
                <li>
                  <CheckCircle size={18} className="icon-primary" />
                  <span>Tofaktor-autentisering og tilgangsstyring</span>
                </li>
                <li>
                  <CheckCircle size={18} className="icon-primary" />
                  <span>Regelmessig gjennomgang og oppfølging av sikkerhetsstatus</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-light">
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
              <ul className="check-list">
                <li>
                  <CheckCircle size={18} className="icon-primary" />
                  <span>Oppsett og drift av Microsoft 365</span>
                </li>
                <li>
                  <CheckCircle size={18} className="icon-primary" />
                  <span>E-post, kalender og samhandlingsverktøy</span>
                </li>
                <li>
                  <CheckCircle size={18} className="icon-primary" />
                  <span>Sikker lagring og deling av filer</span>
                </li>
                <li>
                  <CheckCircle size={18} className="icon-primary" />
                  <span>Brukerstøtte og lisensstyring</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="container">
          <div className="cta-box">
            <h2>Vil du vite mer?</h2>
            <p className="section-intro">
              Ta gjerne kontakt for en uforpliktende prat om hvordan Its Working kan hjelpe din bedrift.
            </p>
            <div className="cta-contact">
              <div className="contact-inline-item">
                <Mail size={18} className="icon-primary" />
                <a href="mailto:kontakt@itsworking.no">kontakt@itsworking.no</a>
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
      </section>
    </Layout>
  );
}
