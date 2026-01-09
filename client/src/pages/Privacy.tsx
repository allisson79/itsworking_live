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
                Denne personvernpolicyen beskriver hvordan Its Working AS samler inn, bruker og beskytter din informasjon 
                når du besøker nettsiden vår.
              </p>

              <h2>Behandlingsansvarlig</h2>
              <p>
                Its Working AS er behandlingsansvarlig for personopplysninger som samles inn via denne nettsiden.
              </p>
              <ul className="privacy-list">
                <li><strong>Bedrift:</strong> Its Working AS</li>
                <li><strong>Adresse:</strong> Fjordgata 43, 7010 Trondheim</li>
                <li><strong>E-post:</strong> thomas@itsworking.no</li>
                <li><strong>Telefon:</strong> 988 50 462</li>
              </ul>

              <h2>Hvilke opplysninger samler vi inn?</h2>
              <p>
                Vi samler inn følgende opplysninger når du bruker nettsiden vår:
              </p>
              <ul className="privacy-list">
                <li><strong>Kontaktskjema:</strong> Navn, e-postadresse, bedriftsnavn (valgfritt) og melding når du sender oss en henvendelse.</li>
                <li><strong>Teknisk informasjon:</strong> IP-adresse, nettlesertype og enhetstype for å sikre at nettsiden fungerer riktig.</li>
              </ul>

              <h2>Formål med behandlingen</h2>
              <p>Vi bruker opplysningene til:</p>
              <ul className="privacy-list">
                <li>Besvare henvendelser du sender oss via kontaktskjemaet</li>
                <li>Forbedre nettsiden og brukeropplevelsen</li>
                <li>Sikre at nettsiden fungerer teknisk</li>
              </ul>

              <h2>Informasjonskapsler (cookies)</h2>
              <p>
                Informasjonskapsler er små tekstfiler som lagres på din enhet når du besøker en nettside. 
                Vi bruker følgende typer informasjonskapsler:
              </p>

              <h3>Nødvendige informasjonskapsler</h3>
              <p>
                Disse er påkrevd for at nettsiden skal fungere og kan ikke slås av. De inkluderer:
              </p>
              <ul className="privacy-list">
                <li><strong>cookie-consent:</strong> Lagrer ditt samtykkevalg. Utløper ikke automatisk.</li>
              </ul>

              <h3>Analyseinformasjonskapsler</h3>
              <p>
                Disse hjelper oss å forstå hvordan besøkende bruker nettsiden, slik at vi kan forbedre den. 
                Disse settes kun hvis du gir samtykke. Vi bruker for øyeblikket ingen tredjeparts analyseverktøy.
              </p>

              <h2>Dine rettigheter</h2>
              <p>Du har rett til å:</p>
              <ul className="privacy-list">
                <li>Be om innsyn i hvilke personopplysninger vi har lagret om deg</li>
                <li>Be om retting av uriktige opplysninger</li>
                <li>Be om sletting av dine personopplysninger</li>
                <li>Trekke tilbake samtykke til bruk av informasjonskapsler</li>
                <li>Klage til Datatilsynet hvis du mener vi behandler opplysninger i strid med regelverket</li>
              </ul>

              <h2>Administrer samtykke</h2>
              <p>
                Du kan når som helst endre dine samtykkepreferanser ved å klikke på "Samtykkepreferanser" i bunnteksten på nettsiden, 
                eller ved å klikke på knappen nedenfor:
              </p>
              <div className="privacy-action">
                <button 
                  onClick={() => window.dispatchEvent(new Event("open-cookie-preferences"))} 
                  className="btn btn-outline"
                >
                  Administrer samtykke
                </button>
              </div>

              <h2>Oppbevaring</h2>
              <p>
                Henvendelser via kontaktskjemaet oppbevares så lenge det er nødvendig for å behandle din forespørsel, 
                og slettes deretter. Samtykkevalg lagres lokalt i din nettleser.
              </p>

              <h2>Sikkerhet</h2>
              <p>
                Vi tar sikkerhet på alvor og bruker passende tekniske og organisatoriske tiltak for å beskytte dine personopplysninger 
                mot uautorisert tilgang, endring, utlevering eller sletting.
              </p>

              <h2>Endringer</h2>
              <p>
                Denne personvernpolicyen kan oppdateres ved behov. Siste oppdatering: Januar 2026.
              </p>

              <h2>Kontakt oss</h2>
              <p>
                Har du spørsmål om personvern eller ønsker å utøve dine rettigheter, 
                ta kontakt med oss på <a href="mailto:thomas@itsworking.no">thomas@itsworking.no</a>.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
