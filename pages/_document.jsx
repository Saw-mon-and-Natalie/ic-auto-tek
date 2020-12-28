import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
            <meta key="viewport" name="viewport" content="width=device-width,minimum-scale=1.0,initial-scale=1,user-scalable=yes" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
            <link rel="icon" type="image/x-icon" size="16x16 32x32 64x64 128x128 256x256" href="/icons/favicon.ico"/>
            <link rel="apple-touch-icon-precomposed" sizes="180x180" href="/icons/180x180-precomposed.png"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/icons/180x180.png"/>
            <link rel="apple-touch-icon-precomposed" sizes="152x152" href="/icons/152x152-precomposed.png"/>
            <link rel="apple-touch-icon" sizes="152x152" href="/icons/152x152.png"/>
            <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/icons/144x144-precomposed.png"/>
            <link rel="apple-touch-icon" sizes="144x144" href="/icons/144x144-apple.png"/>
            <link rel="apple-touch-icon-precomposed" sizes="120x120" href="/icons/120x120-precomposed.png"/>
            <link rel="apple-touch-icon" sizes="120x120" href="/icons/120x120.png"/>
            <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/icons/114x114-precomposed.png"/>
            <link rel="apple-touch-icon" sizes="114x114" href="/icons/114x114.png"/>
            <link rel="apple-touch-icon-precomposed" sizes="76x76" href="/icons/76x76-precomposed.png"/>
            <link rel="apple-touch-icon" sizes="76x76" href="/icons/76x76.png"/>
            <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/icons/72x72-precomposed.png"/>
            <link rel="apple-touch-icon" sizes="72x72" href="/icons/72x72-apple.png"/>
            <link rel="apple-touch-icon-precomposed" sizes="60x60" href="/icons/60x60-precomposed.png"/>
            <link rel="apple-touch-icon" sizes="60x60" href="/icons/60x60.png"/>
            <link rel="apple-touch-icon-precomposed" sizes="57x57" href="/icons/57x57-precomposed.png"/>
            <link rel="apple-touch-icon" sizes="57x57" href="/icons/57x57.png"/>
            <link rel="apple-touch-icon-precomposed" sizes="180x180" href="/icons/180x180-precomposed.png"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/icons/180x180.png"/>
            <link rel="icon" type="image/png" sizes="256x256" href="/icons/256x256.png"/>
            <link rel="icon" type="image/png" sizes="196x196" href="/icons/196x196.png"/>
            <link rel="icon" type="image/png" sizes="194x194" href="/icons/194x194.png"/>
            <link rel="icon" type="image/png" sizes="128x128" href="/icons/128x128.png"/>
            <link rel="icon" type="image/png" sizes="96x96" href="/icons/96x96.png"/>
            <link rel="icon" type="image/png" sizes="72x72" href="/icons/72x72.png"/>
            <link rel="icon" type="image/png" sizes="64x64" href="/icons/64x64.png"/>
            <link rel="icon" type="image/png" sizes="48x48" href="/icons/48x48.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/icons/32x32.png"/>
            <link rel="icon" type="image/png" sizes="24x24" href="/icons/24x24.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/icons/16x16.png"/>
            <link rel="mask-icon" href="/icons/icon.svg" color="#5a7092"></link>
            <meta name="msapplication-TileImage" content="/icons/144x144.png"/>
            <meta name="theme-color" content="#ffffff"/>
            <link rel="manifest" href="/manifest.json" />
            <meta name="msapplication-config" content="/browserconfig.xml" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument