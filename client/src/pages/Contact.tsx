import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { FadeInSection } from "@/components/FadeInSection";
import { useContactForm } from "@/hooks/use-contact";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { Mail, MapPin, Phone, CheckCircle, Loader2 } from "lucide-react";
import { useState, useCallback } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState<string | null>(null);
  const contactMutation = useContactForm();
  const { executeRecaptcha } = useGoogleReCaptcha();

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: ""
    }
  });

  const onSubmit = useCallback(async (data: InsertContactMessage) => {
    setRecaptchaError(null);
    
    if (!executeRecaptcha) {
      setRecaptchaError("reCAPTCHA er ikke klar. Vennligst vent og prøv igjen.");
      return;
    }

    try {
      const recaptchaToken = await executeRecaptcha("contact_form");
      
      contactMutation.mutate({ ...data, recaptchaToken }, {
        onSuccess: () => {
          setSubmitted(true);
          form.reset();
        }
      });
    } catch {
      setRecaptchaError("Kunne ikke verifisere. Vennligst prøv igjen.");
    }
  }, [contactMutation, form, executeRecaptcha]);

  const handleNewMessage = useCallback(() => setSubmitted(false), []);

  return (
    <Layout>
      <SEO
        title="Kontakt"
        description="Ta kontakt med Its Working i Trondheim. Ring 988 50 462 eller send oss en melding. Vi hjelper din bedrift med IT-løsninger."
        path="/kontakt"
      />
      <section className="hero-fullscreen" style={{ backgroundImage: 'url(/ProfilbildeThomas.png)', backgroundPosition: 'center 85%' }}>
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-fullscreen-content">
              <h1>Kontakt oss</h1>
              <p className="hero-subtitle-light">
                Vi er klare til å hjelpe din bedrift. Fyll ut skjemaet eller ring oss for en hyggelig prat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FadeInSection className="section-padding section-white">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2>Kontaktinformasjon</h2>
              <p>Vi holder til i Trondheim og betjener bedrifter i hele regionen.</p>

              <div className="contact-person-primary">
                <img src="/ProfilbildeThomas.png" alt="Thomas Allisson" className="contact-person-primary-photo" loading="lazy" />
                <div className="contact-person-primary-info">
                  <p className="contact-person-primary-name">Thomas Allisson</p>
                  <p className="contact-person-primary-role">Én fast kontaktperson</p>
                  <p className="contact-person-primary-location">Trondheim</p>
                </div>
              </div>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon-wrapper">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4>Besøksadresse</h4>
                    <p>Fjordgata 43, 7010 Trondheim<br/>2. etasje</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon-wrapper">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4>Telefon</h4>
                    <p><a href="tel:+4798850462">988 50 462</a></p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon-wrapper">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4>E-post</h4>
                    <p><a href="mailto:thomas@itsworking.no">thomas@itsworking.no</a></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <h2>Send oss en melding</h2>
              
              {submitted ? (
                <div className="success-state">
                  <CheckCircle size={56} className="success-icon" />
                  <h3>Takk for din henvendelse!</h3>
                  <p>Vi har mottatt meldingen din og tar kontakt med deg så snart som mulig.</p>
                  <button 
                    className="btn btn-secondary" 
                    onClick={handleNewMessage}
                    data-testid="button-new-message"
                  >
                    Send ny melding
                  </button>
                </div>
              ) : (
                <form onSubmit={form.handleSubmit(onSubmit)} className="contact-form">
                  {(contactMutation.isError || recaptchaError) && (
                    <div className="form-error-banner">
                      {recaptchaError || contactMutation.error?.message}
                    </div>
                  )}

                  <div className="form-group">
                    <label htmlFor="name">Navn *</label>
                    <input 
                      id="name" 
                      type="text" 
                      autoComplete="name"
                      placeholder="Ditt navn"
                      data-testid="input-name"
                      {...form.register("name")}
                      disabled={contactMutation.isPending}
                    />
                    {form.formState.errors.name && (
                      <p className="error-message">{form.formState.errors.name.message}</p>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">E-post *</label>
                    <input 
                      id="email" 
                      type="email" 
                      autoComplete="email"
                      placeholder="din@epost.no"
                      data-testid="input-email"
                      {...form.register("email")}
                      disabled={contactMutation.isPending}
                    />
                    {form.formState.errors.email && (
                      <p className="error-message">{form.formState.errors.email.message}</p>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">Bedrift</label>
                    <input 
                      id="company" 
                      type="text" 
                      autoComplete="organization"
                      placeholder="Firmanavn AS"
                      data-testid="input-company"
                      {...form.register("company")}
                      disabled={contactMutation.isPending}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Melding *</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      autoComplete="off"
                      placeholder="Hva kan vi hjelpe deg med?"
                      data-testid="input-message"
                      {...form.register("message")}
                      disabled={contactMutation.isPending}
                    ></textarea>
                    {form.formState.errors.message && (
                      <p className="error-message">{form.formState.errors.message.message}</p>
                    )}
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-full" 
                    disabled={contactMutation.isPending}
                    data-testid="button-submit"
                  >
                    {contactMutation.isPending && <Loader2 className="spinner" size={20} />}
                    {contactMutation.isPending ? 'Sender...' : 'Send melding'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </FadeInSection>
    </Layout>
  );
}
