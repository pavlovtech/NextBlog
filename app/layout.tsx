import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({
  subsets: ['latin']
})

const RootLayout = ({ children }: {
  children: React.ReactNode;
}) => {
  return (
    <html
      lang='en'
      className={`${inter.className} h-full scroll-smooth antialiased`}
    >
      <body className='flex h-full flex-col dark:text-slate-400 dark:bg-stone-950'>
        <main className='grow'>{children}</main>
        <Analytics />
      </body>
    </html>
  )
}

export default RootLayout
