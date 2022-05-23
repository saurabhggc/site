import Document, { Html, Head, Main, NextScript } from 'next/document'

const fontsToPreload = ['DMSans-Regular', 'DMSans-Medium', 'DMSans-Bold']

const Fonts = () => (
  <>
    {fontsToPreload.map((font) => (
      <link
        key={font}
        rel="preload"
        href={`/fonts/${font}.woff2`}
        type="font/woff2"
        as="font"
        crossOrigin="anonymous"
      />
    ))}
  </>
)

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <Fonts />
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
