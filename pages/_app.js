import '@/styles/globals.css';
import Layout from '@/components/Layout';

import NextNProgress from 'nextjs-progressbar';

import { ThemeProvider } from 'next-themes'
import { SessionProvider } from "next-auth/react"

import { UserProvider } from '@/context/authUser';


import AppWrapper from '@/context/state';
export default function App({ Component, pageProps: { session, ...pageProps }, }) {
  return (
    <SessionProvider session={session}>

      <UserProvider>
      <ThemeProvider>

      <NextNProgress />

      <AppWrapper>
      <Layout>
      <Component {...pageProps} />
      </Layout>
      </AppWrapper>
      </ThemeProvider>

      </UserProvider>
     </SessionProvider>
  )
}
