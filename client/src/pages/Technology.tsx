import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { FadeInSection } from "@/components/FadeInSection";
import { Link } from "wouter";
import { Phone, Mail, MapPin, Server, Shield, Users, Cloud, Lock, Linkedin, CheckCircle } from "lucide-react";

export default function Technology() {
  return (
    <Layout>
      <SEO
        title="Teknologi og partnere"
        description="Its Working samarbeider med GlobalConnect og Digiflow for å levere stabil fiber, nettverk og sikkerhet til bedrifter i Trondheim."
        path="/teknologi"
      />
      <section className="hero-fullscreen" style={{ backgroundImage: 'url(/fjordgata.jpg)' }}>
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-fullscreen-content">
              <h1>Teknologi & partnere</h1>
              <p className="hero-subtitle-light">
                Etablert teknologi og profesjonelle partnere gir deg stabilitet og sikkerhet – med én kontaktperson som tar ansvar for helheten.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FadeInSection className="section-padding section-white">
        <div className="container">
          <div className="about-content single-column">
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
      </FadeInSection>

      <FadeInSection className="section-padding section-light">
        <div className="container">
          <div className="section-header-offset">
            <h2>Våre teknologipartnere</h2>
          </div>
          
          <div className="partner-cards-grid">
            <div className="partner-card-large" data-testid="card-partner-globalconnect">
              <div className="partner-card-header">
                <img src="/gc-logo-hor-blue.png" alt="GlobalConnect logo" className="partner-logo" loading="lazy" width="200" height="60" />
              </div>
              <p>
                Its Working har hatt et tett samarbeid med Global Connect i over 15 år. Dette gir gode relasjoner og etablerte kanaler inn hos leverandøren, og sikrer effektiv oppfølging.
              </p>
              <p>
                Global Connect leverer fiber-, nettverks- og sikkerhetsløsninger til bedriftsmarkedet og utgjør den tekniske grunnmuren for stabile IT-tjenester.
              </p>
              <div className="partner-subheading">Nettverk, WiFi og sikkerhet</div>
              <p>
                Global Connect leverer markedsledende løsninger innen nettverk, WiFi og sikkerhet for SMB-markedet.
              </p>
              <div className="card-list">
                <div className="card-list-item">
                  <div className="card-list-icon"><Server size={20} /></div>
                  <span className="card-list-text">Stabil og skalerbar infrastruktur</span>
                </div>
                <div className="card-list-item">
                  <div className="card-list-icon"><Shield size={20} /></div>
                  <span className="card-list-text">Profesjonell overvåkning og sikkerhet</span>
                </div>
                <div className="card-list-item">
                  <div className="card-list-icon"><Users size={20} /></div>
                  <span className="card-list-text">Én ansvarlig leveranse gjennom Its Working</span>
                </div>
              </div>
            </div>
            
            <div className="partner-card-large" data-testid="card-partner-digiflow">
              <div className="partner-card-header">
                <img src="/Logo-Digiflow-AS.png" alt="Digiflow logo" className="partner-logo" loading="lazy" width="200" height="60" />
              </div>
              <p>
                Digiflow leverer driftstjenester og teknologiplattformer for profesjonelle IT-miljøer, med et tydelig fokus på SMB-markedet.
              </p>
              <p>
                Gjennom samarbeidet med Digiflow har Its Working tilgang på moderne og velprøvde plattformer som støtter sikker og effektiv IT-drift.
              </p>
              <div className="partner-subheading">Plattformer og løsninger</div>
              <div className="card-list">
                <div className="card-list-item">
                  <div className="card-list-icon"><Cloud size={20} /></div>
                  <span className="card-list-text">Microsoft 365</span>
                </div>
                <div className="card-list-item">
                  <div className="card-list-icon"><Lock size={20} /></div>
                  <span className="card-list-text">Sikkerhetsløsninger fra anerkjente leverandører som Fortinet</span>
                </div>
                <div className="card-list-item">
                  <div className="card-list-icon"><CheckCircle size={20} /></div>
                  <span className="card-list-text">Its Working har ansvar for valg av løsning, oppsett, drift og oppfølging</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="section-padding section-white">
        <div className="container">
          <div className="contact-local-section">
            <div className="contact-local-image">
              <img src="/trondheim_city.jpg" alt="Trondheim sentrum" className="rounded-image" loading="lazy" width="600" height="400" />
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
                  <a href="mailto:thomas@itsworking.no">thomas@itsworking.no</a>
                </div>
                <div className="contact-inline-item">
                  <Phone size={18} className="icon-primary" />
                  <a href="tel:+4798850462">988 50 462</a>
                </div>
                <div className="contact-inline-item">
                  <MapPin size={18} className="icon-primary" />
                  <span>Fjordgata 43, 7010 Trondheim – 2. etasje</span>
                </div>
                <div className="contact-inline-item">
                  <Linkedin size={18} className="icon-primary" />
                  <a href="https://linkedin.com/in/thomas-g-allisson-9a7611126" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
              </div>
              
              <p className="contact-availability">
                Tilgjengelig på kort varsel
              </p>
              
              <div className="cta-box-action">
                <Link href="/kontakt" className="btn" data-testid="link-contact-technology">
                  Send melding
                </Link>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </Layout>
  );
}
