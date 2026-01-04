import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <p>
          Vi bruker informasjonskapsler for å forbedre din opplevelse på nettstedet vårt. 
          Ved å fortsette å bruke siden, godtar du vår bruk av informasjonskapsler.
        </p>
        <div className="cookie-actions">
          <button className="btn cookie-accept" onClick={acceptCookies}>
            Godta
          </button>
          <button className="btn-outline cookie-decline" onClick={declineCookies}>
            Avslå
          </button>
        </div>
      </div>
      <button className="cookie-close" onClick={declineCookies} aria-label="Lukk">
        <X size={20} />
      </button>
    </div>
  );
}
