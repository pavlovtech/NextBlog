import { Header } from './components/header';
import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Alex Pavlov - blog',
  description: 'Alex Pavlov - blog about programming'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className='dark'>
      <head>
        <title>Alex Pavlov - blog</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </head>
      <body className={`${inter.className} dark:bg-slate-800 dark:text-slate-200`}>
        <Header />
        <div className="px-6">{children}</div>
        <Analytics />
      </body>
    </html>
  )
}
