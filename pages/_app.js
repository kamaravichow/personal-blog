import '@/css/tailwind.css'
import '@/css/prism.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {/* Ad block protect */}
      <Script
        src={`https://fundingchoicesmessages.google.com/i/pub-7463578811537182?ers=1`}
        nonce="dTFROAoAxoV8QMVH0vlhfw"
        strategy="lazyOnload"
      />
      <Script
        id="googlefcPresent"
        nonce="dTFROAoAxoV8QMVH0vlhfw"
        dangerouslySetInnerHTML={{
          __html: `(function() {function signalGooglefcPresent() {if (!window.frames['googlefcPresent']) {if (document.body) {const iframe = document.createElement('iframe'); iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;'; iframe.style.display = 'none'; iframe.name = 'googlefcPresent'; document.body.appendChild(iframe);} else {setTimeout(signalGooglefcPresent, 0);}}}signalGooglefcPresent();})();`,
        }}
        strategy="lazyOnload"
      />
      <Script
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7463578811537182`}
        strategy="lazyOnload"
        crossOrigin="anonymous"
      />
      <Analytics />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
