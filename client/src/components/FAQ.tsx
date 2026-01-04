import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Hva koster IT-support fra Its Working?",
    answer: "Vi tilbyr skreddersydde løsninger basert på bedriftens behov. Kontakt oss for et uforpliktende tilbud tilpasset din virksomhet. Vi har både faste månedsavtaler og timebasert support.",
  },
  {
    question: "Hvor raskt kan dere hjelpe ved akutte problemer?",
    answer: "Ved kritiske problemer prioriterer vi alltid rask respons. De fleste henvendelser besvares innen kort tid, og vi tilbyr samme-dag support for akutte situasjoner.",
  },
  {
    question: "Jobber dere med bedrifter utenfor Trondheim?",
    answer: "Ja, vi betjener bedrifter i hele Midt-Norge. Mye kan løses via fjernsupport, og vi kommer gjerne på besøk ved behov.",
  },
  {
    question: "Hva slags sikkerhetstiltak tilbyr dere?",
    answer: "Vi tilbyr komplett sikkerhetspakke inkludert antivirus, brannmur, backup-løsninger, sikker e-post og opplæring av ansatte i cybersikkerhet.",
  },
  {
    question: "Kan dere hjelpe med overgang til skytjenester?",
    answer: "Absolutt! Vi er eksperter på Microsoft 365 og hjelper bedrifter med smidig overgang til skybaserte løsninger. Vi tar oss av hele prosessen fra planlegging til gjennomføring.",
  },
  {
    question: "Hva inkluderer en IT-driftsavtale?",
    answer: "En typisk driftsavtale inkluderer proaktiv overvåking, vedlikehold, sikkerhetskopier, brukerstøtte og rådgivning. Vi tilpasser avtalen etter bedriftens størrelse og behov.",
  },
];

export function FAQ() {
  return (
    <section className="section-padding section-white">
      <div className="container">
        <div className="section-header text-center">
          <h2>Ofte stilte spørsmål</h2>
          <p className="section-intro">
            Finn svar på vanlige spørsmål om våre tjenester.
          </p>
        </div>
        <div className="faq-container">
          <Accordion type="single" collapsible className="faq-accordion">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="faq-item">
                <AccordionTrigger className="faq-trigger">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="faq-content">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
