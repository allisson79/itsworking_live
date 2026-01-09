import { useState, useEffect, memo, useCallback } from "react";
import { X, ChevronRight } from "lucide-react";

interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  performance: boolean;
  advertising: boolean;
}

const defaultPreferences: CookiePreferences = {
  necessary: true,
  functional: false,
  analytics: false,
  performance: false,
  advertising: false,
};

export const CookieConsent = memo(function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    } else {
      try {
        const parsed = JSON.parse(consent);
        setPreferences({
          necessary: true,
          functional: parsed.functional ?? false,
          analytics: parsed.analytics ?? false,
          performance: parsed.performance ?? false,
          advertising: parsed.advertising ?? false,
        });
      } catch {
        setPreferences(defaultPreferences);
      }
    }
  }, []);

  useEffect(() => {
    const handleOpenPreferences = () => {
      const consent = localStorage.getItem("cookie-consent");
      if (consent) {
        try {
          const parsed = JSON.parse(consent);
          setPreferences({
            necessary: true,
            functional: parsed.functional ?? false,
            analytics: parsed.analytics ?? false,
            performance: parsed.performance ?? false,
            advertising: parsed.advertising ?? false,
          });
        } catch {
          setPreferences(defaultPreferences);
        }
      }
      setShowPreferences(true);
    };

    window.addEventListener("open-cookie-preferences", handleOpenPreferences);
    return () => window.removeEventListener("open-cookie-preferences", handleOpenPreferences);
  }, []);

  const handleAcceptAll = useCallback(() => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true,
      performance: true,
      advertising: true,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem("cookie-consent", JSON.stringify(allAccepted));
    setIsVisible(false);
    setPreferences({
      necessary: true,
      functional: true,
      analytics: true,
      performance: true,
      advertising: true,
    });
  }, []);

  const handleRejectAll = useCallback(() => {
    const onlyNecessary = {
      necessary: true,
      functional: false,
      analytics: false,
      performance: false,
      advertising: false,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem("cookie-consent", JSON.stringify(onlyNecessary));
    setIsVisible(false);
    setShowPreferences(false);
    setPreferences(defaultPreferences);
  }, []);

  const handleOpenPreferences = useCallback(() => {
    setShowPreferences(true);
  }, []);

  const handleClosePreferences = useCallback(() => {
    setShowPreferences(false);
  }, []);

  const handleSavePreferences = useCallback(() => {
    localStorage.setItem("cookie-consent", JSON.stringify({ 
      ...preferences,
      timestamp: new Date().toISOString()
    }));
    setShowPreferences(false);
    setIsVisible(false);
  }, [preferences]);

  const updatePreference = useCallback((key: keyof CookiePreferences, value: boolean) => {
    if (key === 'necessary') return;
    setPreferences(prev => ({ ...prev, [key]: value }));
  }, []);

  if (!isVisible && !showPreferences) return null;

  if (showPreferences) {
    return (
      <div className="cookie-modal-overlay">
        <div className="cookie-modal cookie-modal-large">
          <div className="cookie-modal-header">
            <h3>Tilpass samtykkepreferanser</h3>
            <button onClick={handleClosePreferences} className="cookie-close-btn" aria-label="Lukk">
              <X size={20} />
            </button>
          </div>
          <div className="cookie-modal-intro">
            <p>
              Vi bruker informasjonskapsler for å hjelpe deg med å navigere effektivt og utføre visse funksjoner. 
              Du finner detaljert informasjon om alle informasjonskapsler under hver samtykkekategori nedenfor. 
              Informasjonskapslene som er kategorisert som "Nødvendig" lagres i nettleseren din da de er avgjørende 
              for å aktivere de grunnleggende funksjonene til nettstedet.
            </p>
          </div>
          <div className="cookie-modal-body">
            <div className="cookie-category">
              <div className="cookie-category-header">
                <ChevronRight size={16} className="cookie-chevron" />
                <span className="cookie-category-name">Nødvendig</span>
                <span className="cookie-always-on">Alltid aktiv</span>
              </div>
              <p className="cookie-category-desc">
                Nødvendige cookies er avgjørende for grunnleggende funksjoner på nettstedet, og nettstedet fungerer ikke på 
                den tiltenkte måten uten dem. Disse cookies lagrer ikke personlig identifiserbare data.
              </p>
            </div>
            
            <div className="cookie-category">
              <div className="cookie-category-header">
                <ChevronRight size={16} className="cookie-chevron" />
                <span className="cookie-category-name">Funksjonell</span>
                <label className="cookie-toggle">
                  <input 
                    type="checkbox" 
                    checked={preferences.functional}
                    onChange={(e) => updatePreference('functional', e.target.checked)}
                  />
                  <span className="cookie-toggle-slider"></span>
                </label>
              </div>
              <p className="cookie-category-desc">
                Funksjonelle cookies hjelper deg med å utføre visse funksjoner som å dele innholdet på nettstedet på sosiale 
                medieplattformer, samle tilbakemeldinger og andre tredjepartsfunksjoner.
              </p>
            </div>
            
            <div className="cookie-category">
              <div className="cookie-category-header">
                <ChevronRight size={16} className="cookie-chevron" />
                <span className="cookie-category-name">Analytics</span>
                <label className="cookie-toggle">
                  <input 
                    type="checkbox" 
                    checked={preferences.analytics}
                    onChange={(e) => updatePreference('analytics', e.target.checked)}
                  />
                  <span className="cookie-toggle-slider"></span>
                </label>
              </div>
              <p className="cookie-category-desc">
                Analytiske cookies brukes til å forstå hvordan besøkende samhandler med nettstedet. Disse cookies hjelper deg 
                med å gi informasjon om beregningene antall besøkende, fluktfrekvens, trafikkilde osv.
              </p>
            </div>
            
            <div className="cookie-category">
              <div className="cookie-category-header">
                <ChevronRight size={16} className="cookie-chevron" />
                <span className="cookie-category-name">Ytelse</span>
                <label className="cookie-toggle">
                  <input 
                    type="checkbox" 
                    checked={preferences.performance}
                    onChange={(e) => updatePreference('performance', e.target.checked)}
                  />
                  <span className="cookie-toggle-slider"></span>
                </label>
              </div>
              <p className="cookie-category-desc">
                Ytelsescookies til å forstå og analysere de viktigste ytelsesindeksene til nettstedet som hjelper til med å 
                gi en bedre brukeropplevelse for de besøkende.
              </p>
            </div>
            
            <div className="cookie-category">
              <div className="cookie-category-header">
                <ChevronRight size={16} className="cookie-chevron" />
                <span className="cookie-category-name">Annonse</span>
                <label className="cookie-toggle">
                  <input 
                    type="checkbox" 
                    checked={preferences.advertising}
                    onChange={(e) => updatePreference('advertising', e.target.checked)}
                  />
                  <span className="cookie-toggle-slider"></span>
                </label>
              </div>
              <p className="cookie-category-desc">
                Annonsecookies brukes til å levere besøkende med tilpassede annonser basert på sidene de besøkte før og 
                analysere effektiviteten av annonsekampanjen.
              </p>
            </div>
          </div>
          <div className="cookie-modal-footer cookie-modal-footer-three">
            <button onClick={handleRejectAll} className="btn btn-outline">
              Avvis
            </button>
            <button onClick={handleSavePreferences} className="btn btn-outline">
              Lagre mine preferanser
            </button>
            <button onClick={handleAcceptAll} className="btn">
              Aksepter alt
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <p>
          Vi bruker informasjonskapsler for å forbedre opplevelsen din på nettsiden vår. 
          Les mer i vår <a href="/personvern" className="cookie-policy-link">personvernpolicy</a>.
        </p>
        <div className="cookie-actions">
          <button onClick={handleRejectAll} className="btn btn-outline">
            Bare nødvendige
          </button>
          <button onClick={handleAcceptAll} className="btn">
            Godta alle
          </button>
          <button onClick={handleOpenPreferences} className="cookie-link-btn">
            Administrer
          </button>
        </div>
      </div>
    </div>
  );
});

export function openCookiePreferences() {
  window.dispatchEvent(new Event("open-cookie-preferences"));
}
