'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import Typewriter from 'typewriter-effect';


const headerNavLinks = [
  { href: '/', title: 'Blog' },
  { href: '/tags', title: 'Tags' },
  { href: '/projects', title: 'Projects' },
  { href: '/about', title: 'About' },
]

export function Header() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <div className="text-primary-color dark:text-primary-color-dark flex items-center justify-between text-xl font-semibold">
          <Link href='/'  passHref legacyBehavior>
            <a>
            <Typewriter
              options={{
                strings: [`user@alex.pavlov.dev: ~${pathname} `],
                autoStart: true,
                loop: false,
                deleteSpeed: 100000,
                delay: 0
              }}
            />
            </a>
          </Link>
        </div>
      </div>
      <div className="flex items-center text-base leading-5">
        <div className="hidden sm:block">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="link-underline rounded py-1 px-2 text-gray-900 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700 sm:py-2 sm:px-3"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
