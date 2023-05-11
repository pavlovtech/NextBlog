'use client'

import { useState } from 'react'

import Link from 'next/link'

import { SignInButton, UserButton, SignedIn, SignedOut } from '@clerk/nextjs'

const Header = () => {
  //const { data: cart, isLoading } = useSWR('cart', getCart)
  //const [cartSliderIsOpen, setCartSliderIsOpen] = useState(false)

  return (
    <>
      <header className='z-10 py-10 text-stone-400'>
        <nav className='container flex items-center justify-between'>
          {/* Logo */}
          <div>
            <Link
              href='/'
              className='text-2xl font-bold uppercase tracking-widest'
            >
              Pipelined
            </Link>
          </div>

          {/* Nav links */}
          <ul className='flex items-center gap-10'>
            
            <SignedIn>
              <li className='text-sm font-medium uppercase tracking-wider'>
                <Link href='/projects'>Posts</Link>
              </li>
            </SignedIn>
          </ul>

          <div className='flex items-center justify-between gap-6'>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode='modal'>
                <button className='rounded border border-gray-400 px-3 py-0.5'>
                  Sign in
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
