import '@/styles/globals.css'
import NavBar from '@/components/navbar'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

export const metadata = {
  title: '[dino.codes]',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <NavBar />
        <div className="overflow-visible px-6">
          <Analytics />
          <div className="mx-auto max-w-2xl">{children}</div>
        </div>
        <footer className="mt-6" />
      </body>
    </html>
  )
}
