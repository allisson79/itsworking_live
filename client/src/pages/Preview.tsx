import { Check, ArrowRight, Shield, Users, Zap } from "lucide-react";

export default function Preview() {
  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto", fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ marginBottom: "32px", color: "#0f172a" }}>Preview: Kort-stil punktlister</h1>
      
      <section style={{ marginBottom: "48px" }}>
        <h2 style={{ color: "#0b4ea2", marginBottom: "20px" }}>Alternativ A: Sjekkmerke-kort</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {[
            "Besvare henvendelser sendt via kontaktskjema",
            "Sikre stabil og sikker teknisk drift av nettsiden",
            "Forbedre nettsidens funksjonalitet og brukeropplevelse"
          ].map((text, i) => (
            <div key={i} style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "16px",
              background: "#f8fafc",
              padding: "16px 20px",
              borderRadius: "8px",
              border: "1px solid #e2e8f0"
            }}>
              <div style={{
                background: "#0b4ea2",
                borderRadius: "50%",
                padding: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              }}>
                <Check size={14} color="white" strokeWidth={3} />
              </div>
              <span style={{ color: "#334155", lineHeight: 1.5 }}>{text}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "48px" }}>
        <h2 style={{ color: "#0b4ea2", marginBottom: "20px" }}>Alternativ B: Pil-kort</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {[
            "Be om innsyn i hvilke personopplysninger vi har lagret",
            "Be om retting av uriktige eller ufullstendige opplysninger",
            "Be om sletting av personopplysninger"
          ].map((text, i) => (
            <div key={i} style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "16px",
              background: "#ffffff",
              padding: "16px 20px",
              borderRadius: "8px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
            }}>
              <ArrowRight size={18} color="#0b4ea2" style={{ flexShrink: 0, marginTop: "2px" }} />
              <span style={{ color: "#334155", lineHeight: 1.5 }}>{text}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "48px" }}>
        <h2 style={{ color: "#0b4ea2", marginBottom: "20px" }}>Alternativ C: Ikon-kort med unik ikon per punkt</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {[
            { icon: Shield, text: "Sikkerhet og personvern i fokus" },
            { icon: Users, text: "Dedikert support og rådgivning" },
            { icon: Zap, text: "Rask og effektiv problemløsning" }
          ].map(({ icon: Icon, text }, i) => (
            <div key={i} style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "16px",
              background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
              padding: "18px 22px",
              borderRadius: "10px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 2px 4px rgba(0,0,0,0.04)"
            }}>
              <div style={{
                background: "#eff6ff",
                borderRadius: "8px",
                padding: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              }}>
                <Icon size={20} color="#0b4ea2" />
              </div>
              <span style={{ color: "#334155", lineHeight: 1.5, fontWeight: 500 }}>{text}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 style={{ color: "#0b4ea2", marginBottom: "20px" }}>Alternativ D: Enkel med blå linje</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {[
            "Kontaktskjema med navn og e-post",
            "Teknisk informasjon for sikker drift",
            "Samtykkevalg for informasjonskapsler"
          ].map((text, i) => (
            <div key={i} style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              background: "#ffffff",
              padding: "14px 18px",
              borderRadius: "6px",
              borderLeft: "3px solid #0b4ea2"
            }}>
              <span style={{ color: "#334155", lineHeight: 1.5 }}>{text}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
