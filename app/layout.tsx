import '../styles/globals.css';

import { Inter } from 'next/font/google'

import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://alexpavlov.dev'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className='dark scroll-smooth'>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </head>
      <body className={`${inter.className} bg-white text-black antialiased dark:bg-background-color dark:text-white`}>
        {children}
        <SpeedInsights/>
      </body>
    </html>
  )
}
