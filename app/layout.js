import '@/styles/globals.css'
import NavBar from '@/components/navbar'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import {
  IBM_Plex_Mono,
  IBM_Plex_Sans,
  IBM_Plex_Sans_Condensed,
  Inter,
  Roboto_Mono,
} from 'next/font/google'

const IBMPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-ibm-plex-sans',
})

const IBMPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-ibm-plex-mono',
})

export const metadata = {
  title: '[dino.codes]',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${IBMPlexMono.variable} ${IBMPlexSans.variable} font-sans`}
    >
      <body>
        <NavBar />
        <div className="overflow-visible px-6">
          <Script
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=G-LF9R8Y4KG2"
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-LF9R8Y4KG2', {
page_path: window.location.pathname,
});
`,
            }}
          />

          <Analytics />
          <div className="mx-auto max-w-3xl">{children}</div>
        </div>
      </body>
    </html>
  )
}
