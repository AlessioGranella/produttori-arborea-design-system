import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variante = 'primario' | 'secondario' | 'pop' | 'inverso';

export function Bottone({
  variante = 'primario', piccolo = false, children, className = '', ...rest
}: { variante?: Variante; piccolo?: boolean; children: ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>) {
  const mod = { primario: '', secondario: ' pa-btn--secondary', pop: ' pa-btn--pop', inverso: ' pa-btn--inverse' }[variante];
  return (
    <button className={`pa-btn${mod}${piccolo ? ' pa-btn--s' : ''} ${className}`} {...rest}>
      {children}
    </button>
  );
}
