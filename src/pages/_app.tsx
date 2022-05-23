import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import '@/styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="Saurabh"
        description="I cannot think on any good description right now, so this is just for the sake of SEO."
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
