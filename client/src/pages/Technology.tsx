import { Layout } from "@/components/Layout";
import { Link } from "wouter";
import { CheckCircle, Network, Shield, Phone, Mail, MapPin } from "lucide-react";

export default function Technology() {
  return (
    <Layout>
      <section className="hero-elevated">
        <div className="container">
          <div className="hero-card">
            <div className="hero-card-content">
              <p className="hero-tagline">Samarbeid og leveranse</p>
              <h1>Teknologi & partnere</h1>
              <p className="hero-subtitle">
                Etablert teknologi og profesjonelle partnere gir deg stabilitet og sikkerhet – med én kontaktperson som tar ansvar for helheten.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-white section-overlap">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Én kontaktperson – profesjonell infrastruktur</h2>
              <p>
                Som kunde hos Its Working forholder du deg til én fast kontaktperson som tar ansvar for rådgivning, oppsett, drift og oppfølging av IT-miljøet.
              </p>
              <p>
                Den underliggende infrastrukturen leveres gjennom nøye utvalgte teknologipartnere. Dette gir tilgang på robuste og velprøvde løsninger, samtidig som ansvaret er samlet ett sted.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="container">
          <div className="section-header-offset">
            <h2>Våre teknologipartnere</h2>
          </div>
          
          <div className="partner-cards-grid">
            <div className="partner-card-large" data-testid="card-partner-globalconnect">
              <div className="partner-card-header">
                <div className="card-icon">
                  <Network size={28} />
                </div>
                <h3>Global Connect</h3>
              </div>
              <p>
                Its Working har hatt et tett samarbeid med Global Connect i over 15 år. Dette gir gode relasjoner og etablerte kanaler inn hos leverandøren, og sikrer effektiv oppfølging.
              </p>
              <p>
                Global Connect leverer fiber-, nettverks- og sikkerhetsløsninger til bedriftsmarkedet og utgjør den tekniske grunnmuren for stabile IT-tjenester.
              </p>
              <div className="partner-subheading">Nettverk, WiFi og sikkerhet</div>
              <p>
                Global Connect leverer markedsledende løsninger innen nettverk, WiFi og sikkerhet for SMB-markedet. Innen sikkerhet benyttes SOC-tjenester levert av Netsecurity, som er godkjent av Nasjonal kommunikasjonsmyndighet (Nkom).
              </p>
              <ul className="check-list-compact">
                <li>
                  <CheckCircle size={16} className="icon-primary" /> <span>Stabil og skalerbar infrastruktur</span>
                </li>
                <li>
                  <CheckCircle size={16} className="icon-primary" /> <span>Profesjonell overvåkning og sikkerhet</span>
                </li>
                <li>
                  <CheckCircle size={16} className="icon-primary" /> <span>Én ansvarlig leveranse gjennom Its Working</span>
                </li>
              </ul>
            </div>
            
            <div className="partner-card-large" data-testid="card-partner-digiflow">
              <div className="partner-card-header">
                <div className="card-icon">
                  <Shield size={28} />
                </div>
                <h3>Digiflow</h3>
              </div>
              <p>
                Digiflow leverer driftstjenester og teknologiplattformer for profesjonelle IT-miljøer, med et tydelig fokus på SMB-markedet.
              </p>
              <p>
                Gjennom samarbeidet med Digiflow har Its Working tilgang på moderne og velprøvde plattformer som støtter sikker og effektiv IT-drift.
              </p>
              <div className="partner-subheading">Plattformer og løsninger</div>
              <ul className="check-list-compact">
                <li>
                  <CheckCircle size={16} className="icon-primary" /> <span>Microsoft 365</span>
                </li>
                <li>
                  <CheckCircle size={16} className="icon-primary" /> <span>Sikkerhetsløsninger fra anerkjente leverandører som Fortinet</span>
                </li>
              </ul>
              <p className="partner-note">
                Its Working har ansvar for valg av løsning, oppsett, drift og oppfølging.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-white">
        <div className="container">
          <div className="contact-local-section">
            <div className="contact-local-image">
              <img src={trondheimOverviewImage} alt="Trondheim sentrum" className="rounded-image" />
            </div>
            <div className="contact-local-text">
              <h2>Kontakt og lokal forankring</h2>
              <p>
                Its Working holder til i Klingenberggården i Trondheim – et kontorfellesskap med flere bedrifter midt i byen.
              </p>
              <p>
                Har du spørsmål eller ønsker en uforpliktende prat, er du velkommen til å ta direkte kontakt.
              </p>
              
              <div className="contact-details-compact">
                <div className="contact-person">
                  <strong>Thomas Allisson</strong>
                </div>
                <div className="contact-inline-item">
                  <Mail size={18} className="icon-primary" />
                  <a href="mailto:kontakt@itsworking.no">kontakt@itsworking.no</a>
                </div>
                <div className="contact-inline-item">
                  <Phone size={18} className="icon-primary" />
                  <a href="tel:+4798850462">988 50 462</a>
                </div>
                <div className="contact-inline-item">
                  <MapPin size={18} className="icon-primary" />
                  <span>Fjordgata 43, 7010 Trondheim – 2. etasje</span>
                </div>
              </div>
              
              <p className="contact-availability">
                Tilgjengelig på kort varsel
              </p>
              
              <div style={{ marginTop: '24px' }}>
                <Link href="/kontakt" className="btn" data-testid="link-contact-technology">
                  Send melding
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
