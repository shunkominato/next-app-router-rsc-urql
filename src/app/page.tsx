import './globals.css';
import { registerUrql } from '@urql/next/rsc';
import Link from 'next/link';
import { cacheExchange, createClient, fetchExchange } from 'urql';
import Todo from './todo/page';

const makeClient = () => {
  return createClient({
    url: 'http://localhost:81/query',
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: { cache: 'no-store' },
  });
};

export const { getClient } = registerUrql(makeClient);

export default function HomePage() {
  return (
    <>
      <Link prefetch={true} href='todo'>
        todo
      </Link>
    </>
  );
}
