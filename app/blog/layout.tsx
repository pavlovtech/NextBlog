import { Header } from '../components/header';
import '../../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';

import { Inter } from 'next/font/google'

export const metadata = {
  title: 'Alex Pavlov - blog',
  description: 'Alex Pavlov - blog about programming'
}

const headerNavLinks = [
  { href: '/blog', title: 'Blog' },
  { href: '/blog/tags', title: 'Tags' },
  { href: '/blog/projects', title: 'Projects' }
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
      <Analytics />
    </>
  )
}
