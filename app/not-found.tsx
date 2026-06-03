import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-extrabold text-primary-500">404</h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        This page could not be found.
      </p>
      <Link
        href="/blog"
        className="mt-8 rounded-lg border border-primary-500 px-5 py-2 text-sm font-medium uppercase text-primary-500 transition duration-300 ease-in-out hover:bg-primary-500 hover:text-gray-900"
      >
        Back to blog
      </Link>
    </div>
  )
}
