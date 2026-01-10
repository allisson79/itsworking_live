import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import App from "./App";
import "./index.css";

const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY || "";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <GoogleReCaptchaProvider reCaptchaKey={recaptchaSiteKey}>
      <App />
    </GoogleReCaptchaProvider>
  </HelmetProvider>
);
