export const runtime = 'nodejs';

import { ClerkProvider, SignedIn, SignedOut } from '@clerk/nextjs'
import Header from '@/components/layout/header'
import { Inter } from 'next/font/google'
import '../globals.css'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({
  subsets: ['latin']
})

const AdminLayout = ({ children }: {
  children: React.ReactNode;
}) => {
  return (
    <ClerkProvider>
      <html
        lang='en'
        className={`${inter.className} h-full scroll-smooth antialiased`}
      >
        <body className='flex h-full flex-col text-stone-400'>

          <SignedIn>
          </SignedIn>


          <Header />
          <main className='grow'>{children}</main>
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  )
}

export default AdminLayout
