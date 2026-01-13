import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { FadeInSection } from "@/components/FadeInSection";
import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock, Users, Lightbulb, Heart, Linkedin } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <SEO
        title="Om oss"
        description="Its Working er et lokalt IT-selskap i Trondheim, etablert av Thomas Allisson. Vi leverer personlig IT-støtte til små og mellomstore bedrifter."
        path="/om-oss"
        image="/ProfilbildeThomas.jpg"
      />
      <section className="hero-fullscreen hero-fullscreen--about" style={{ backgroundImage: 'url(/oversikt_kontoret.webp)' }}>
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-fullscreen-content">
              <h1>Et personlig IT-selskap bygget på erfaring</h1>
              <p className="hero-subtitle-light">
                Its Working er et lokalt IT-selskap i Trondheim, etablert for å levere stabile, ærlige og forståelige IT-tjenester til små og mellomstore bedrifter.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FadeInSection className="section-padding section-white">
        <div className="container">
          <div className="about-section-text">
            <h2>Erfaringen som formet Its Working</h2>
            <p>
              Its Working er etablert av Thomas Allisson, med bakgrunn som gründer og lang erfaring fra IT-bransjen.
            </p>
            <p>
              Thomas Allisson var tidligere gründer og medeier av Working IT, som senere ble solgt og integrert i det nasjonale IT-selskapet iteam.
            </p>
            <p>
              I starten var dette et miljø preget av stor takhøyde, åpenhet og ærlige diskusjoner. Over tid endret dette seg i takt med vekst og oppkjøp. Kundedialogen ble kortere, beslutninger fjernere og fokuset flyttet seg i større grad mot neste leveranse – fremfor relasjonen som allerede var der.
            </p>
            <p>
              Denne erfaringen ble et tydelig vendepunkt.
            </p>
            <p className="text-emphasis">
              Its Working ble etablert som et alternativ.
            </p>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="section-padding section-light">
        <div className="container">
          <div className="about-section-text">
            <h2>IT handler ikke bare om systemer – men om mennesker</h2>
            <p>
              Its Working er bygget på en enkel, men tydelig filosofi:
            </p>
            <p className="text-emphasis">
              God IT starter med forståelse for menneskene og virksomheten den skal støtte.
            </p>
            <p>Det betyr at vi:</p>
            <div className="card-list">
              <div className="card-list-item">
                <div className="card-list-icon"><Clock size={20} /></div>
                <span className="card-list-text">Tar oss tid til kundene våre – også når det ikke brenner</span>
              </div>
              <div className="card-list-item">
                <div className="card-list-icon"><Users size={20} /></div>
                <span className="card-list-text">Gjerne kommer innom for å høre hvordan det faktisk går</span>
              </div>
              <div className="card-list-item">
                <div className="card-list-icon"><Lightbulb size={20} /></div>
                <span className="card-list-text">Setter oss inn i hva kundene jobber med, ikke bare hva som står i systemene</span>
              </div>
              <div className="card-list-item">
                <div className="card-list-icon"><Heart size={20} /></div>
                <span className="card-list-text">Ser IT som et verktøy for mennesker, ikke som et mål i seg selv</span>
              </div>
            </div>
            <p>
              For oss er IT mer enn data, nettverk og plattformer. Det er innsikt i kundens hverdag som gjør faget spennende – og leveransen riktig.
            </p>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="section-padding section-white">
        <div className="container">
          <div className="about-section-text">
            <h2>Én kontaktperson. Ett ansvar.</h2>
            <p>
              Som kunde hos Its Working forholder du deg til én fast kontaktperson som tar ansvar for rådgivning, oppsett, drift og oppfølging av IT-miljøet.
            </p>
            <p>
              Den tekniske infrastrukturen leveres gjennom nøye utvalgte samarbeidspartnere, men ansvaret er alltid samlet hos Its Working.
            </p>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="section-padding section-light">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Lokal forankring</h2>
              <p>
                Its Working holder til i Klingenberggården i Trondheim sentrum – i et kontorfellesskap med flere lokale bedrifter.
              </p>
              <p>
                Den lokale tilstedeværelsen gjør det enkelt å være tett på kundene – både i hverdagen og når situasjonen krever rask handling.
              </p>
            </div>
            <div className="about-image">
              <img src="/oversikt_kontoret.jpg" alt="Kontoret til Its Working" className="rounded-image" loading="lazy" width="600" height="400" />
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="section-padding section-white">
        <div className="container">
          <div className="about-section-text">
            <h2>Kontakt</h2>
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
              <Link href="/kontakt" className="btn" data-testid="link-contact-about">
                Send melding
              </Link>
            </div>
          </div>
        </div>
      </FadeInSection>
    </Layout>
  );
}
