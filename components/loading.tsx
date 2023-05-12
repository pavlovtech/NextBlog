import clsx from 'clsx'

export const Blinker = ({ color = 'bg-white' }) => {
  return (
    <div className="text-center">
      <span className='mx-5 my-2 inline-flex items-center gap-2'>
        <span
          className={clsx('mx-px h-2 w-2 animate-blink rounded-full', color)}
        />
        <span
          className={clsx(
            'mx-px h-2 w-2 animate-blink rounded-full animation-delay-200',
            color
          )}
        />
        <span
          className={clsx(
            'mx-px h-2 w-2 animate-blink rounded-full animation-delay-[400ms]',
            color
          )}
        />
      </span>
    </div>
  )
}