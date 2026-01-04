import { useState, useEffect } from "react";
import { X } from "lucide-react";

function getStoredConsent(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return localStorage.getItem("cookie-consent");
  } catch {
    return null;
  }
}

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = getStoredConsent();
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = (accepted: boolean) => {
    try {
      localStorage.setItem("cookie-consent", accepted ? "accepted" : "declined");
    } catch {
      // localStorage unavailable
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      className="cookie-banner" 
      role="dialog" 
      aria-label="Informasjonskapsler"
      aria-describedby="cookie-description"
    >
      <div className="cookie-content">
        <p id="cookie-description">
          Vi bruker informasjonskapsler for å forbedre din opplevelse på nettstedet vårt. 
          Ved å fortsette å bruke siden, godtar du vår bruk av informasjonskapsler.
        </p>
        <div className="cookie-actions">
          <button 
            className="btn cookie-accept" 
            onClick={() => handleConsent(true)}
            aria-label="Godta informasjonskapsler"
          >
            Godta
          </button>
          <button 
            className="btn-outline cookie-decline" 
            onClick={() => handleConsent(false)}
            aria-label="Avslå informasjonskapsler"
          >
            Avslå
          </button>
        </div>
      </div>
      <button 
        className="cookie-close" 
        onClick={() => handleConsent(false)} 
        aria-label="Lukk"
      >
        <X size={20} />
      </button>
    </div>
  );
}
