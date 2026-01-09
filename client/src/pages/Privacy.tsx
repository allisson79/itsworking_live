import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Personvern og informasjonskapsler | Its Working AS</title>
        <meta name="description" content="Personvernpolicy og informasjon om bruk av informasjonskapsler på Its Working AS sine nettsider." />
      </Helmet>

      <Header />

      <main>
        <section className="section-padding section-white">
          <div className="container">
            <div className="privacy-content">
              <h1>Personvern og informasjonskapsler</h1>
              
              <p className="privacy-intro">
                Denne personvernpolicyen beskriver hvordan Its Working AS samler inn, bruker og beskytter personopplysninger når du besøker nettsiden vår.
              </p>

              <section className="privacy-section">
                <h2>Behandlingsansvarlig</h2>
                <p>Its Working AS er behandlingsansvarlig for personopplysninger som behandles via denne nettsiden.</p>
                <div className="contact-card">
                  <p><strong>Bedrift:</strong> Its Working AS</p>
                  <p><strong>Adresse:</strong> Fjordgata 43, 7010 Trondheim</p>
                  <p><strong>E-post:</strong> kontakt@itsworking.no</p>
                  <p><strong>Telefon:</strong> 988 50 462</p>
                </div>
              </section>

              <section className="privacy-section">
                <h2>Hvilke opplysninger samler vi inn?</h2>
                <p>Vi samler inn følgende personopplysninger når du bruker nettsiden:</p>
                <ul>
                  <li><strong>Kontaktskjema:</strong> Navn, e-postadresse, bedriftsnavn (valgfritt) og melding når du sender oss en henvendelse.</li>
                  <li><strong>Teknisk informasjon:</strong> IP-adresse (behandles som personopplysning), nettlesertype og enhetstype, for å sikre korrekt teknisk drift av nettsiden.</li>
                </ul>
              </section>

              <section className="privacy-section">
                <h2>Formål med behandlingen</h2>
                <p>Opplysningene brukes til å:</p>
                <ul>
                  <li>Besvare henvendelser sendt via kontaktskjema</li>
                  <li>Sikre stabil og sikker teknisk drift av nettsiden</li>
                  <li>Forbedre nettsidens funksjonalitet og brukeropplevelse</li>
                </ul>
              </section>

              <section className="privacy-section">
                <h2>Rettslig grunnlag</h2>
                <p>Behandling av personopplysninger skjer på følgende grunnlag:</p>
                <ul>
                  <li><strong>Samtykke</strong>, der dette er påkrevd (for informasjonskapsler)</li>
                  <li><strong>Berettiget interesse</strong>, for å kunne besvare henvendelser og sikre teknisk drift av nettsiden</li>
                </ul>
              </section>

              <section className="privacy-section">
                <h2>Informasjonskapsler (cookies)</h2>
                <p>Informasjonskapsler er små tekstfiler som lagres på din enhet når du besøker en nettside.</p>
                
                <div className="cookie-group">
                  <h3>Nødvendige informasjonskapsler</h3>
                  <p>Disse er påkrevd for at nettsiden skal fungere og kan ikke deaktiveres.</p>
                  <ul>
                    <li><strong>cookie-consent:</strong> Lagrer ditt samtykkevalg. Lagring skjer lokalt i nettleseren og utløper ikke automatisk.</li>
                  </ul>
                </div>

                <div className="cookie-group">
                  <h3>Analyseinformasjonskapsler</h3>
                  <p>Brukes for å forstå hvordan nettsiden benyttes, slik at den kan forbedres.</p>
                  <p>Disse settes <strong>kun dersom du gir samtykke</strong>.</p>
                  <p>Per i dag benytter Its Working AS <strong>ingen tredjeparts analyseverktøy</strong>.</p>
                </div>
              </section>

              <section className="privacy-section">
                <h2>Administrer samtykke</h2>
                <p>
                  Du kan når som helst endre eller trekke tilbake dine samtykkepreferanser ved å klikke på 
                  <button 
                    onClick={() => window.dispatchEvent(new Event("open-cookie-preferences"))}
                    className="inline-link-btn"
                  >
                    «Samtykkepreferanser»
                  </button> 
                  i bunnteksten på nettsiden.
                </p>
              </section>

              <section className="privacy-section">
                <h2>Oppbevaring</h2>
                <ul>
                  <li>Henvendelser via kontaktskjema lagres så lenge dialogen pågår, og slettes senest innen <strong>12 måneder etter avsluttet sak</strong>, med mindre videre oppbevaring er lovpålagt.</li>
                  <li>Samtykkevalg for informasjonskapsler lagres lokalt i din nettleser.</li>
                </ul>
              </section>

              <section className="privacy-section">
                <h2>Overføring til tredjeland</h2>
                <p>Personopplysninger overføres ikke til land utenfor EU/EØS.</p>
              </section>

              <section className="privacy-section">
                <h2>Dine rettigheter</h2>
                <p>Du har rett til å:</p>
                <ul>
                  <li>Be om innsyn i hvilke personopplysninger vi har lagret om deg</li>
                  <li>Be om retting av uriktige eller ufullstendige opplysninger</li>
                  <li>Be om sletting av personopplysninger</li>
                  <li>Trekke tilbake samtykke til bruk av informasjonskapsler</li>
                  <li>Klage til Datatilsynet dersom du mener behandlingen skjer i strid med regelverket</li>
                </ul>
              </section>

              <section className="privacy-section">
                <h2>Sikkerhet</h2>
                <p>Its Working AS benytter egnede tekniske og organisatoriske tiltak for å beskytte personopplysninger mot uautorisert tilgang, endring, utlevering eller sletting.</p>
              </section>

              <section className="privacy-section">
                <h2>Endringer</h2>
                <p>Denne personvernpolicyen kan oppdateres ved behov.</p>
                <p><strong>Sist oppdatert:</strong> Januar 2026.</p>
              </section>

              <section className="privacy-section">
                <h2>Kontakt</h2>
                <p>Har du spørsmål om personvern eller ønsker å utøve dine rettigheter, kontakt oss på:</p>
                <p><strong><a href="mailto:kontakt@itsworking.no">kontakt@itsworking.no</a></strong></p>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
