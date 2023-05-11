const Footer = () => {
  return (
    <footer className='z-10 py-10 text-stone-400'>
      <div className='container'>
        <h5 className='text-lg'>Alex Pavlov</h5>
        <p className='mt-4 text-sm text-stone-400'>
          &copy; {new Date().getFullYear()} PavlovTech
        </p>
      </div>
    </footer>
  )
}

export default Footer
