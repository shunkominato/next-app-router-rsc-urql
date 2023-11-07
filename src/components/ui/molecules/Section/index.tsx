import { ReactNode } from 'react';

export function Section({ children }: { children: ReactNode }) {
  return <section className='mx-4'>{children}</section>;
}
