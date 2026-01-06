import { memo, useCallback, useState, type ChangeEvent, type FormEvent } from "react";

const formStyle = { display: "flex", flexDirection: "column", gap: "10px" } as const;
const labelStyle = { fontSize: "0.9rem", color: "rgba(255,255,255,0.85)" } as const;
const inputStyle = { padding: "12px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.2)", backgroundColor: "var(--text-light)", color: "var(--text-dark)", fontSize: "0.95rem" } as const;
const buttonStyle = { padding: "12px", borderRadius: "10px", border: "none", backgroundColor: "var(--primary)", color: "var(--text-light)", fontWeight: 600, cursor: "pointer", transition: "background-color 0.2s ease" } as const;
const successMessageStyle = { color: "var(--text-light)", fontSize: "0.9rem", marginTop: "4px" } as const;

export const Newsletter = memo(function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;

    setSubmitted(true);
    setEmail("");
  }, [email]);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSubmitted(false);
    setEmail(event.target.value);
  }, []);

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <label htmlFor="newsletter-email" style={labelStyle}>
        E-post
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="din@epost.no"
        value={email}
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>
        Meld meg på
      </button>
      {submitted && (
        <p style={successMessageStyle} aria-live="polite">
          Takk! Dette er en forhåndsvisning – e-posten sendes ikke automatisk. Kontakt oss på kontakt@itsworking.no for rask respons.
        </p>
      )}
    </form>
  );
});
