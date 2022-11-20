import '../styles/globals.scss'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

import Head from 'next/head'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name='description' content='Somos un pequeño grupo dedicado a rescatar gatitos dentro de Panamá.' />
        <meta name='keywords' content='club, gatos, panama' />
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Club De Gatos Panama</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App