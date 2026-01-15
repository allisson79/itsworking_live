# Endringslogg

Alle viktige endringer i dette prosjektet vil bli dokumentert i denne filen.

Formatet er basert på [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
og dette prosjektet følger [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-01-15

### Lagt til
- Endringslogg for å spore versjoner og endringer
- Cookie consent banner med GDPR-kompatibilitet og preferansehåndtering
- LinkedIn-integrasjon i footer og kontaktseksjoner
- Scroll-bevisst sticky header med skyggeeffekt ved scrolling
- Zoom-animasjon på hero bakgrunnsbilde
- Hover lift-effekter på tjenestekort, partnerkort og CTA-bokser
- Scroll-utløste fade-in animasjoner på innholdsseksjoner
- Støtte for redusert bevegelse (prefers-reduced-motion) for alle animasjoner
- Grunnleggerfoto med "20+ års erfaring" merke i Personlig IT-partner-seksjonen
- `/api/status` endepunkt for integrasjons health checks
- SEO metadata med Open Graph og Twitter card støtte på alle sider
- Favicon (SVG, PNG, Apple touch icon)

### Endret
- Flyttet "Kontakt oss" i header til fremtredende blå knapp (inspirert av Digiflow)
- Restylet cookie banner - flytende, mørk bakgrunn, mer subtil
- Fjernet blå taglines fra alle hero-seksjoner for renere utseende
- Forbedret mobilresponsivitet på tvers av alle sider (header, navigasjon, footer, skjemaer)
- Implementert fullscreen hero-seksjoner med bakgrunnsbilder på alle sider
- Oppdatert header-logo til høyoppløselig PNG (1965x708, gjennomsiktig bakgrunn) for skarp visning på mobil/retina-skjermer
- Sentrert all tekst på tvers av alle sider for konsistent presentasjon

### Optimalisert
- Ytelsesoptimaliseringer: Lagt til React.lazy() code splitting for alle sider
- Lazy loading for bilder under folden
- Alle hero-bilder komprimert og reskalert for raskere lasting
- Total bildestørrelse redusert fra ~29MB til ~1.4MB (95% reduksjon)
- WebP-format for hero-bilder (27% mindre enn JPEG)
- Hjemmeside hero preloadet i index.html for optimal LCP
- Bilder reskalert til maks 1920px bredde
- Header-logo 443KB→17KB (96% mindre)
- Footer-logo 188KB→1.4KB (99% mindre)
- Partnerlogoer konvertert til WebP med riktig størrelse

### Fikset
- Manglende bildereferanse på Teknologi-siden
- PostgreSQL database oppsett for kontaktskjema-innsendinger
- Alle sider fullt funksjonelle med fungerende kontaktskjema

## Tidligere versjoner

Tidligere versjoner er ikke dokumentert i endringsloggen. For mer informasjon, se git commit-historikken.
