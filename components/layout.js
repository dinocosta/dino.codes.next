import NavBar from '@/components/navbar'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'

export default function Layout({ children }) {
  return (
    <div>
      <NavBar />
      <div>
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
      <footer className="mt-4" />
    </div>
  )
}
