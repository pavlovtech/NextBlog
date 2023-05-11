import Link from 'next/link'

const Tag = ({ text }: { text: string}) => {
  return (
    <div className='mt-2 mr-3 rounded-lg border border-primary-500 py-1 px-3 text-sm font-medium uppercase text-primary-500 transition duration-500 ease-in-out hover:bg-primary-500 hover:text-gray-100 dark:hover:text-gray-900'>
      <Link href={`/tags/${text}`}>
          {text}
      </Link>
    </div>
  )
}

export default Tag
