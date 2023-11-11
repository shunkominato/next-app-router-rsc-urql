'use client';

import { Flex, AppShell as MAppShell, useMantineTheme } from '@mantine/core';
import Image from 'next/image';
import { ReactNode, useMemo } from 'react';
// import { cacheExchange, createClient, fetchExchange, ssrExchange, UrqlProvider } from '@urql/next';
import { cacheExchange, Client, debugExchange, fetchExchange, Provider } from 'urql';
import AppShellClass from './AppShell.module.css';
import { MobileMenu } from './MobileMenu';

// const client = new Client({
//   url: 'http://127.0.0.1:81/query',
//   exchanges: [cacheExchange, fetchExchange, debugExchange],
// });

export function AppShell({ children }: { children: ReactNode }) {
  const { shadows } = useMantineTheme();
  // const [client, ssr] = useMemo(() => {
  //   const ssr = ssrExchange();
  //   const client = createClient({
  //     url: 'http://localhost:81/query',
  //     exchanges: [cacheExchange, ssr, fetchExchange],
  //     suspense: true,
  //   });

  //   return [client, ssr];
  // }, []);
  return (
    <MAppShell header={{ height: '64px' }} padding='md'>
      <MAppShell.Header style={{ boxShadow: shadows['sm'] }}>
        <div className='mx-auto h-full max-w-7xl'>
          <div className='mx-4 flex h-full items-center justify-between'>
            <Image src='/logo/logo_engin.svg' alt='Vercel Logo' width={120} height={40} priority />
            <Flex gap={{ base: 'sm', sm: 'lg' }}>
              <Image src='/icon/message.svg' alt='Vercel Logo' width={36} height={36} priority />
              <Image src='/icon/notify.svg' alt='Vercel Logo' width={36} height={36} priority />
              <Image
                src='/icon/avater.svg'
                alt='Vercel Logo'
                width={36}
                height={36}
                priority
                className='mobile-hidden'
              />
              <MobileMenu />
            </Flex>
          </div>
        </div>
      </MAppShell.Header>

      <MAppShell.Main className={AppShellClass.main}>
        {/* <UrqlProvider client={client} ssr={ssr}> */}
        {/* <Provider value={client}> */}
        {children}
        {/* </UrqlProvider> */}
        {/* </Provider> */}
      </MAppShell.Main>
    </MAppShell>
  );
}
