import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsSubmitted(true);
    setIsLoading(false);
    setEmail("");
  };

  if (isSubmitted) {
    return (
      <div className="newsletter-success">
        <CheckCircle size={24} />
        <span>Takk for påmeldingen!</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="newsletter-form">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Din e-postadresse"
        required
        disabled={isLoading}
        className="newsletter-input"
      />
      <button type="submit" disabled={isLoading} className="newsletter-btn">
        <Send size={18} />
      </button>
    </form>
  );
}
