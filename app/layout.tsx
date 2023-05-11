export const runtime = 'nodejs';

import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import { siteMetadata } from '@/configuration/site-metadata';
import Link from 'next/link';
import headerNavLinks from '@/configuration/header-nav-links';
import Footer from './components/layout/footer';
import Image from 'next/image';

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
      <body className='bg-white text-black antialiased dark:bg-gray-900 dark:text-white'>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
          <div className="flex h-screen flex-col justify-between">
            <header className="flex items-center justify-between py-10">
              <div>

                <div className="flex items-center justify-between">
                  <div className="mr-3">
                    <Image
                      src="/logo.svg"
                      width={20}
                      height={20}
                      alt="Picture of the author"
                    />
                  </div>
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    <Link href="/">
                      {siteMetadata.headerTitle}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex items-center text-base leading-5">
                <div className="hidden sm:block">
                  {headerNavLinks.map((link) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
                {/* <MobileNav /> */}
              </div>
            </header>
            <main className="mb-auto">{children}</main>
            <Footer />
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  )
}

export default RootLayout
