import { Layout } from "@/components/Layout";
import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container">
          <h1>Om Its Working</h1>
          <p>
            Et personlig IT-selskap bygget på erfaring
          </p>
        </div>
      </section>

      <section className="section-padding section-white">
        <div className="container">
          <div className="about-section-text">
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
              Its Working er et lokalt IT-selskap i Trondheim, etablert for å levere stabile, ærlige og forståelige IT-tjenester til små og mellomstore bedrifter.
            </p>
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
      </section>

      <section className="section-padding section-light">
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
            <ul className="about-list">
              <li>Tar oss tid til kundene våre – også når det ikke brenner</li>
              <li>Gjerne kommer innom for å høre hvordan det faktisk går</li>
              <li>Setter oss inn i hva kundene jobber med, ikke bare hva som står i systemene</li>
              <li>Ser IT som et verktøy for mennesker, ikke som et mål i seg selv</li>
            </ul>
            <p>
              For oss er IT mer enn data, nettverk og plattformer. Det er innsikt i kundens hverdag som gjør faget spennende – og leveransen riktig.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding section-white">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Én kontaktperson. Ett ansvar.</h2>
              <p>
                Som kunde hos Its Working forholder du deg til én fast kontaktperson som tar ansvar for rådgivning, oppsett, drift og oppfølging av IT-miljøet.
              </p>
              <p>
                Den tekniske infrastrukturen leveres gjennom nøye utvalgte samarbeidspartnere, men ansvaret er alltid samlet hos Its Working.
              </p>
            </div>
            <div className="about-image">
              <img 
                src="/ProfilbildeThomas.png" 
                alt="Thomas Allisson - Its Working" 
                className="rounded-image"
                style={{ maxWidth: '280px' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-light">
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
              <img src="/trondheim_city.jpg" alt="Trondheim sentrum" className="rounded-image" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-white">
        <div className="container">
          <div className="about-section-text" style={{ textAlign: 'center' }}>
            <h2>Ta kontakt</h2>
            <p>
              Har du spørsmål eller ønsker en uforpliktende prat, er du velkommen til å ta direkte kontakt.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', marginTop: '32px' }}>
              <div className="contact-person" style={{ fontSize: '1.25rem' }}>
                <strong>Thomas Allisson</strong>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div className="contact-inline-item" style={{ justifyContent: 'center' }}>
                  <Mail size={18} className="icon-primary" />
                  <a href="mailto:thomas@itsworking.no">thomas@itsworking.no</a>
                </div>
                <div className="contact-inline-item" style={{ justifyContent: 'center' }}>
                  <Phone size={18} className="icon-primary" />
                  <a href="tel:+4798850462">988 50 462</a>
                </div>
                <div className="contact-inline-item" style={{ justifyContent: 'center' }}>
                  <MapPin size={18} className="icon-primary" />
                  <span>Fjordgata 43, 7010 Trondheim – 2. etasje</span>
                </div>
              </div>
              
              <p className="contact-availability" style={{ marginTop: '8px' }}>
                Tilgjengelig på kort varsel
              </p>
              
              <div style={{ marginTop: '16px' }}>
                <Link href="/kontakt" className="btn" data-testid="link-contact-about">
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
