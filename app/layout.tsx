import '../styles/globals.css'

import { Header } from '../components/header'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <title>Alex Pavlov - blog</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </head>
      <body>
        <Header />
        <div className="px-6">{children}</div>
      </body>
    </html>
  )
}
