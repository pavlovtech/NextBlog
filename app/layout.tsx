import '../styles/globals.css';

import { Header } from '../components/header';

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Alex Pavlov - blog',
  description: 'Alex Pavlov - blog'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Alex Pavlov - blog</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </head>
      <body className={inter.className}>
        <Header />
        <div className="px-6">{children}</div>
      </body>
    </html>
  )
}
