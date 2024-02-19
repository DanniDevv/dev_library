export default function Navbar() {
  return (
    <>
      <header className='fixed top-5 z-10 flex items-center justify-center w-full mx-auto mt-2'>
        <nav className='flex px-3 text-xl font-medium rounded-full bg-gray-800 justify-center items-center'>
          <a
            href='/books'
            className='relative block px-2 py-2 transition text-white  hover:text-sky-500 dark:hover:text-sky-500'>
            Books
          </a>
          <a
            href='/authors'
            className='relative block px-2 py-2 transition text-white hover:text-sky-500 dark:hover:text-sky-500'>
            Authors
          </a>
          <a
            href='/genres'
            className='relative block px-2 py-2 transition text-white hover:text-sky-500 dark:hover:text-sky-500'>
            Genres
          </a>
        </nav>
      </header>
    </>
  )
}
