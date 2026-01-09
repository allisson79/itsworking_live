import { useState, useEffect, memo, useCallback } from "react";
import { X } from "lucide-react";

export const CookieConsent = memo(function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    } else {
      try {
        const parsed = JSON.parse(consent);
        setAnalyticsEnabled(parsed.analytics ?? false);
      } catch {
        setAnalyticsEnabled(false);
      }
    }
  }, []);

  useEffect(() => {
    const handleOpenPreferences = () => {
      const consent = localStorage.getItem("cookie-consent");
      if (consent) {
        try {
          const parsed = JSON.parse(consent);
          setAnalyticsEnabled(parsed.analytics ?? false);
        } catch {
          setAnalyticsEnabled(false);
        }
      }
      setShowPreferences(true);
    };

    window.addEventListener("open-cookie-preferences", handleOpenPreferences);
    return () => window.removeEventListener("open-cookie-preferences", handleOpenPreferences);
  }, []);

  const handleAcceptAll = useCallback(() => {
    localStorage.setItem("cookie-consent", JSON.stringify({ 
      necessary: true, 
      analytics: true,
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
    setAnalyticsEnabled(true);
  }, []);

  const handleAcceptNecessary = useCallback(() => {
    localStorage.setItem("cookie-consent", JSON.stringify({ 
      necessary: true, 
      analytics: false,
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
    setAnalyticsEnabled(false);
  }, []);

  const handleOpenPreferences = useCallback(() => {
    setShowPreferences(true);
  }, []);

  const handleClosePreferences = useCallback(() => {
    setShowPreferences(false);
  }, []);

  const handleSavePreferences = useCallback(() => {
    localStorage.setItem("cookie-consent", JSON.stringify({ 
      necessary: true, 
      analytics: analyticsEnabled,
      timestamp: new Date().toISOString()
    }));
    setShowPreferences(false);
    setIsVisible(false);
  }, [analyticsEnabled]);

  if (!isVisible && !showPreferences) return null;

  if (showPreferences) {
    return (
      <div className="cookie-modal-overlay">
        <div className="cookie-modal">
          <div className="cookie-modal-header">
            <h3>Samtykkepreferanser</h3>
            <button onClick={handleClosePreferences} className="cookie-close-btn" aria-label="Lukk">
              <X size={20} />
            </button>
          </div>
          <div className="cookie-modal-body">
            <div className="cookie-category">
              <div className="cookie-category-header">
                <span className="cookie-category-name">Nødvendige informasjonskapsler</span>
                <span className="cookie-always-on">Alltid på</span>
              </div>
              <p className="cookie-category-desc">
                Disse informasjonskapslene er nødvendige for at nettsiden skal fungere og kan ikke slås av.
              </p>
            </div>
            <div className="cookie-category">
              <div className="cookie-category-header">
                <span className="cookie-category-name">Analyseinformasjonskapsler</span>
                <label className="cookie-toggle">
                  <input 
                    type="checkbox" 
                    checked={analyticsEnabled}
                    onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                  />
                  <span className="cookie-toggle-slider"></span>
                </label>
              </div>
              <p className="cookie-category-desc">
                Disse hjelper oss å forstå hvordan besøkende bruker nettsiden, slik at vi kan forbedre den.
              </p>
            </div>
          </div>
          <div className="cookie-modal-footer">
            <button onClick={handleSavePreferences} className="btn">
              Lagre preferanser
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
          <button onClick={handleAcceptNecessary} className="btn">
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
