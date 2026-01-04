import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Endelig en IT-partner som faktisk forstår behovene til en liten bedrift. Rask respons og alltid tilgjengelig når vi trenger hjelp.",
    author: "Kari Nordmann",
    company: "Nordmann Regnskap AS",
  },
  {
    id: 2,
    quote: "Its Working har tatt seg av alt IT for oss i over to år nå. Vi slipper å tenke på IT i det hele tatt - det bare fungerer.",
    author: "Erik Hansen",
    company: "Hansen Eiendom",
  },
  {
    id: 3,
    quote: "Profesjonell og personlig service. Thomas tar seg alltid tid til å forklare ting på en forståelig måte.",
    author: "Lise Berg",
    company: "Berg Consulting",
  },
];

export function Testimonials() {
  return (
    <section className="section-padding section-light">
      <div className="container">
        <div className="section-header text-center">
          <h2>Hva kundene sier</h2>
          <p className="section-intro">
            Vi er stolte av å levere IT-tjenester som våre kunder er fornøyde med.
          </p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-quote-icon">
                <Quote size={32} />
              </div>
              <blockquote className="testimonial-quote">
                "{testimonial.quote}"
              </blockquote>
              <div className="testimonial-author">
                <p className="testimonial-name">{testimonial.author}</p>
                <p className="testimonial-company">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
