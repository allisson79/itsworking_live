import { memo } from "react";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { FadeInSection } from "@/components/FadeInSection";
import { CheckCircle, ArrowRight, Zap, Bug } from "lucide-react";

export default memo(function Changelog() {
  return (
    <Layout>
      <SEO
        title="Endringslogg - Its Working AS"
        description="Se historikken over endringer, nye funksjoner og forbedringer til itsworking.no. Følg med på utviklingen av vår IT-tjeneste."
        path="/endringslogg"
      />

      <section className="hero-fullscreen hero-animated" style={{ backgroundImage: 'url(/trondheim_city.webp)' }}>
        <div className="hero-bg" style={{ backgroundImage: 'url(/trondheim_city.webp)' }} />
        <div className="hero-overlay">
          <div className="hero-fullscreen-content">
            <h1>Endringslogg</h1>
            <p className="hero-subtitle-light">
              Hold deg oppdatert på nye funksjoner, forbedringer og endringer til vårt nettsted.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#f8fafc' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <FadeInSection>
            <div className="changelog-intro" style={{ textAlign: 'center', marginBottom: '48px' }}>
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.7' }}>
                Her finner du en oversikt over alle viktige endringer og oppdateringer vi har gjort. 
                Vi følger <a href="https://keepachangelog.com/en/1.0.0/" target="_blank" rel="noopener noreferrer" style={{ color: '#0b4ea2', textDecoration: 'underline' }}>Keep a Changelog</a> formatet 
                og <a href="https://semver.org/spec/v2.0.0.html" target="_blank" rel="noopener noreferrer" style={{ color: '#0b4ea2', textDecoration: 'underline' }}>Semantic Versioning</a>.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="changelog-version" style={{
              background: '#fff',
              padding: '32px',
              borderRadius: '12px',
              marginBottom: '32px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <span style={{
                  fontSize: '1.75rem',
                  fontWeight: '700',
                  color: '#0f172a'
                }}>
                  Versjon 1.0.0
                </span>
                <span style={{
                  padding: '4px 12px',
                  background: '#dcfce7',
                  color: '#166534',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  fontWeight: '600'
                }}>
                  Gjeldende
                </span>
              </div>
              <div style={{ color: '#64748b', marginBottom: '24px', fontSize: '0.95rem' }}>
                15. januar 2026
              </div>

              <div className="changelog-section" style={{ marginBottom: '28px' }}>
                <h3 style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  color: '#059669', 
                  fontSize: '1.1rem',
                  marginBottom: '16px'
                }}>
                  <CheckCircle size={20} />
                  Lagt til
                </h3>
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0, 
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <ArrowRight size={16} style={{ marginTop: '4px', color: '#64748b', flexShrink: 0 }} />
                    <span>Endringslogg for å spore versjoner og endringer</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <ArrowRight size={16} style={{ marginTop: '4px', color: '#64748b', flexShrink: 0 }} />
                    <span>Cookie consent banner med GDPR-kompatibilitet og preferansehåndtering</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <ArrowRight size={16} style={{ marginTop: '4px', color: '#64748b', flexShrink: 0 }} />
                    <span>LinkedIn-integrasjon i footer og kontaktseksjoner</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <ArrowRight size={16} style={{ marginTop: '4px', color: '#64748b', flexShrink: 0 }} />
                    <span>Scroll-bevisst sticky header med skyggeeffekt ved scrolling</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <ArrowRight size={16} style={{ marginTop: '4px', color: '#64748b', flexShrink: 0 }} />
                    <span>Zoom-animasjon på hero bakgrunnsbilde</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <ArrowRight size={16} style={{ marginTop: '4px', color: '#64748b', flexShrink: 0 }} />
                    <span>Hover lift-effekter på tjenestekort, partnerkort og CTA-bokser</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <ArrowRight size={16} style={{ marginTop: '4px', color: '#64748b', flexShrink: 0 }} />
                    <span>Scroll-utløste fade-in animasjoner på innholdsseksjoner</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <ArrowRight size={16} style={{ marginTop: '4px', color: '#64748b', flexShrink: 0 }} />
                    <span>Grunnleggerfoto med "20+ års erfaring" merke i Personlig IT-partner-seksjonen</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <ArrowRight size={16} style={{ marginTop: '4px', color: '#64748b', flexShrink: 0 }} />
                    <span><code style={{ background: '#f1f5f9', padding: '2px 6px', borderRadius: '4px', fontSize: '0.9em' }}>/api/status</code> endepunkt for integrasjons health checks</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <ArrowRight size={16} style={{ marginTop: '4px', color: '#64748b', flexShrink: 0 }} />
                    <span>SEO metadata med Open Graph og Twitter card støtte på alle sider</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <ArrowRight size={16} style={{ marginTop: '4px', color: '#64748b', flexShrink: 0 }} />
                    <span>Favicon (SVG, PNG, Apple touch icon)</span>
                  </li>
                </ul>
              </div>

              <div className="changelog-section" style={{ marginBottom: '28px' }}>
                <h3 style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  color: '#0284c7', 
                  fontSize: '1.1rem',
                  marginBottom: '16px'
                }}>
                  <ArrowRight size={20} />
                  Endret
                </h3>
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0, 
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <ArrowRight size={16} style={{ marginTop: '4px', color: '#64748b', flexShrink: 0 }} />
                    <span>Flyttet "Kontakt oss" i header til fremtredende blå knapp</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <ArrowRight size={16} style={{ marginTop: '4px', color: '#64748b', flexShrink: 0 }} />
                    <span>Restylet cookie banner - flytende, mørk bakgrunn, mer subtil</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <ArrowRight size={16} style={{ marginTop: '4px', color: '#64748b', flexShrink: 0 }} />
                    <span>Fjernet blå taglines fra alle hero-seksjoner for renere utseende</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <ArrowRight size={16} style={{ marginTop: '4px', color: '#64748b', flexShrink: 0 }} />
                    <span>Forbedret mobilresponsivitet på tvers av alle sider</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <ArrowRight size={16} style={{ marginTop: '4px', color: '#64748b', flexShrink: 0 }} />
                    <span>Implementert fullscreen hero-seksjoner med bakgrunnsbilder på alle sider</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <ArrowRight size={16} style={{ marginTop: '4px', color: '#64748b', flexShrink: 0 }} />
                    <span>Oppdatert header-logo til høyoppløselig PNG for skarp visning</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <ArrowRight size={16} style={{ marginTop: '4px', color: '#64748b', flexShrink: 0 }} />
                    <span>Sentrert all tekst på tvers av alle sider for konsistent presentasjon</span>
                  </li>
                </ul>
              </div>

              <div className="changelog-section" style={{ marginBottom: '28px' }}>
                <h3 style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  color: '#7c3aed', 
                  fontSize: '1.1rem',
                  marginBottom: '16px'
                }}>
                  <Zap size={20} />
                  Optimalisert
                </h3>
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0, 
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <ArrowRight size={16} style={{ marginTop: '4px', color: '#64748b', flexShrink: 0 }} />
                    <span>React.lazy() code splitting for alle sider og lazy loading for bilder</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <ArrowRight size={16} style={{ marginTop: '4px', color: '#64748b', flexShrink: 0 }} />
                    <span>Total bildestørrelse redusert fra ~29MB til ~1.4MB (95% reduksjon)</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <ArrowRight size={16} style={{ marginTop: '4px', color: '#64748b', flexShrink: 0 }} />
                    <span>WebP-format for hero-bilder (27% mindre enn JPEG)</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <ArrowRight size={16} style={{ marginTop: '4px', color: '#64748b', flexShrink: 0 }} />
                    <span>Header-logo 443KB→17KB (96% mindre), footer-logo 188KB→1.4KB (99% mindre)</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <ArrowRight size={16} style={{ marginTop: '4px', color: '#64748b', flexShrink: 0 }} />
                    <span>Partnerlogoer konvertert til WebP med riktig størrelse</span>
                  </li>
                </ul>
              </div>

              <div className="changelog-section">
                <h3 style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  color: '#dc2626', 
                  fontSize: '1.1rem',
                  marginBottom: '16px'
                }}>
                  <Bug size={20} />
                  Fikset
                </h3>
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0, 
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <ArrowRight size={16} style={{ marginTop: '4px', color: '#64748b', flexShrink: 0 }} />
                    <span>Manglende bildereferanse på Teknologi-siden</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <ArrowRight size={16} style={{ marginTop: '4px', color: '#64748b', flexShrink: 0 }} />
                    <span>PostgreSQL database oppsett for kontaktskjema-innsendinger</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <ArrowRight size={16} style={{ marginTop: '4px', color: '#64748b', flexShrink: 0 }} />
                    <span>Alle sider fullt funksjonelle med fungerende kontaktskjema</span>
                  </li>
                </ul>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div style={{
              background: '#fff',
              padding: '32px',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              textAlign: 'center'
            }}>
              <h3 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '16px' }}>
                Tidligere versjoner
              </h3>
              <p style={{ color: '#64748b', marginBottom: '20px' }}>
                Tidligere versjoner er ikke dokumentert i endringsloggen.
              </p>
              <a 
                href="https://github.com/allisson79/itsworking_live" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 20px',
                  background: '#0b4ea2',
                  color: '#fff',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  fontWeight: '600',
                  transition: 'background 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = '#093f84'}
                onMouseOut={(e) => e.currentTarget.style.background = '#0b4ea2'}
              >
                Se git commit-historikk
                <ArrowRight size={18} />
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </Layout>
  );
});
