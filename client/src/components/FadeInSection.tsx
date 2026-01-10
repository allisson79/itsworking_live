import { ReactNode, RefObject } from 'react';
import { useFadeIn } from '../hooks/use-fade-in';

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
}

export function FadeInSection({ children, className = '' }: FadeInSectionProps) {
  const { ref, isVisible } = useFadeIn();

  const combinedClassName = `fade-in-section ${isVisible ? 'visible' : ''} ${className}`.trim();

  return (
    <section ref={ref as RefObject<HTMLElement>} className={combinedClassName}>
      {children}
    </section>
  );
}
