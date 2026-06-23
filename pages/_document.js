import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="id">
      <Head>
        <meta name="description" content="Aksara & Co — PR Agency independen yang bergerak di bidang strategi komunikasi, manajemen reputasi, dan pengelolaan citra perusahaan." />
        <meta property="og:title" content="Aksara & Co — PR Agency" />
        <meta property="og:description" content="Strategi komunikasi yang berdampak. Reputasi yang terjaga." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
