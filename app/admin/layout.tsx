import '../../styles/globals.css';

import { Inter } from 'next/font/google'
import { NextAuthProvider } from './components/provider';
import { Header } from 'app/components/header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Alex Pavlov - blog',
  description: 'Alex Pavlov - blog about programming'
}

const headerNavLinks = [
  { href: '/admin', title: 'Dashboard' },
  { href: '/admin/posts', title: 'Posts' },
  { href: '/blog', title: 'Home' },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NextAuthProvider>
        <div className='mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0'>
          <div className="flex h-screen flex-col justify-between">
            <Header navLinks={headerNavLinks} />
            <main className="mb-auto">{children}</main>
          </div>
        </div>
      </NextAuthProvider>
    </>
  )
}
