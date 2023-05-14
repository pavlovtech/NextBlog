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
          <Typewriter
            options={{
              strings: [`user@alex.pavlov.dev: ~${pathname} `],
              autoStart: true,
              loop: false,
              deleteSpeed: 100000
            }}
          />
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
      </div>
    </header>
  )
}
