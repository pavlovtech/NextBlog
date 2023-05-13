'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import Typewriter from 'typewriter-effect';

export function Header() {
  const pathname = usePathname();

  return (
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
  )
}
