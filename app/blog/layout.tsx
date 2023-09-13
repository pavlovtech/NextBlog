import { Header } from '../components/header';
import '../../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import { headerNavLinks } from 'configs/header-nav-links';
import Footer from 'app/components/footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className='mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0'>
        <div className="flex h-screen flex-col justify-between">
          <Header navLinks={headerNavLinks} />
          <main className="mb-auto">{children}</main>
          <Footer />
        </div>
      </div>
      <Analytics />
    </>
  )
}
