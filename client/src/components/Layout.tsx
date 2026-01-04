import { Header } from "./Header";
import { Footer } from "./Footer";
import { CookieConsent } from "./CookieConsent";
import { ScrollToTop } from "./ScrollToTop";
import { ReactNode, useEffect } from "react";
import { useLocation } from "wouter";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <div className="page-wrapper">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
      <CookieConsent />
      <ScrollToTop />
    </div>
  );
}
