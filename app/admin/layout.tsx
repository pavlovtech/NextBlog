import '../../styles/globals.css';

import { Inter } from 'next/font/google'
import { NextAuthProvider } from './components/provider';
import { Header } from 'app/components/header';

const inter = Inter({ subsets: ['latin'] })

const headerNavLinks = [
  { href: '/blog', title: 'Home' },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className='mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0'>
          <div className="flex h-screen flex-col justify-between">
            <Header navLinks={headerNavLinks} />
            <main className="mb-auto">{children}</main>
          </div>
        </div>
    </>
  )
}
