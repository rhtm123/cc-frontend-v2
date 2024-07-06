import '@/styles/globals.css';
import Layout from '@/components/Layout';

import NextNProgress from 'nextjs-progressbar';

import { ThemeProvider } from 'next-themes'
import { SessionProvider } from "next-auth/react"

import { UserProvider } from '@/context/authUser';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';


import AppWrapper from '@/context/state';
export default function App({ Component, pageProps: { session, ...pageProps }, }) {

  useEffect(() => {
    AOS.init({
        duration: 800,
        once: false,
    })
  }, [])
  
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
