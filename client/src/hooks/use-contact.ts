import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import type { ContactFormSubmission } from "@shared/schema";

export function useContactForm() {
  return useMutation({
    mutationFn: async (data: ContactFormSubmission) => {
      const validated = api.contact.create.input.parse(data);
      
      const res = await fetch(api.contact.create.path, {
        method: api.contact.create.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.contact.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        if (res.status === 500) {
           const error = api.contact.create.responses[500].parse(await res.json());
           throw new Error(error.message);
        }
        throw new Error('Noe gikk galt. Prøv igjen senere.');
      }

      return api.contact.create.responses[201].parse(await res.json());
    },
  });
}
