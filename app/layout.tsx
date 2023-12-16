import '../styles/globals.css';

import { Inter } from 'next/font/google'
import { NextAuthProvider } from './admin/components/provider';

import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className='dark scroll-smooth'>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </head>
      <body className={`${inter.className} bg-white text-black antialiased dark:bg-background-color dark:text-white`}>
        <NextAuthProvider>
          {children}
          <SpeedInsights/>
        </NextAuthProvider>
      </body>
    </html>
  )
}
