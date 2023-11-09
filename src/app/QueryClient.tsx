'use client';

import { cacheExchange, Client, fetchExchange, Provider, ssrExchange } from 'urql';
import './globals.css';
import { ReactNode } from 'react';

const ssr = ssrExchange({ isClient: false });

const client = new Client({
  url: 'http://localhost:81/query',
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: { cache: 'no-store' },
});

export default function QueryClient({ children }: { children: ReactNode }) {
  return <Provider value={client}>{children}</Provider>;
}
