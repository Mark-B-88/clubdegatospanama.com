import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang='es'>
        <Head>
            <meta name='description' content='Somos un pequeño grupo dedicado a rescatar gatitos dentro de Panamá.' />
            <meta name='keywords' content='club, gatos, panama' />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
        </Html>
    )
}