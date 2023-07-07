import '@/styles/globals.css';
import Layout from '@/components/Layout';

import NextNProgress from 'nextjs-progressbar';

import { ThemeProvider } from 'next-themes'

import AppWrapper from '@/context/state';
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>

    <NextNProgress />

    <AppWrapper>
    <Layout>
     <Component {...pageProps} />
     </Layout>
     </AppWrapper>
     </ThemeProvider>
  )
}
