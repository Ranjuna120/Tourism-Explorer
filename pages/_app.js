import '../styles/globals.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }){
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Experience the wonder of Sri Lanka with our premium transport services" />
        <title>Tourism Explorer</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
