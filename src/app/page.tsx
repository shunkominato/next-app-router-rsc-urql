import './globals.css';
import { registerUrql } from '@urql/next/rsc';
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
      <Todo />
    </>
  );
}
