import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Superboard Campaigns</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Superboard Campaigns - Complete Quests, Earn Rewards" />
        <meta property="og:title" content="Superboard Campaigns" />
        <meta property="og:description" content="Complete Quests, Earn CERs, and Unlock Exclusive NFTs" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

