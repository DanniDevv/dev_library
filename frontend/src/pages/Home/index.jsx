export default function Home() {
  return (
    <>
      <div className='container flex flex-col items-center justify-center w-full h-screen mx-auto md:py-36 lg:max-w-4xl md:max-w-2xl'>
        <h1 className='text-6xl font-bold text-center'>
          Welcome to Programing Library
        </h1>
        <button
          type='button'
          className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-12'>
          <a href='/books'>Comenezemos a leer</a>
        </button>
      </div>
    </>
  )
}
