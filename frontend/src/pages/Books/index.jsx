import { useState, useEffect } from 'react'
import Axios from 'axios'
import Navbar from '@/components/Navbar'
import { Link } from 'react-router-dom'
const baseURL = 'http://localhost:8000/api/books/'

export default function Books() {
  const [book, setBooks] = useState([])

  useEffect(() => {
    Axios.get(baseURL).then((response) => {
      setBooks(response.data)
      console.log(response.data)
    })
  }, [])
  if (!book) return null

  return (
    <>
      <Navbar />
      <main className='mx-24 my-16'>
        <h1 className='text-4xl font-bold text-center mt-28'>
          Library of Programming
        </h1>
        <div className='container mx-auto px-5 py-2 lg:px-32 lg:pt-12'>
          <div className='-m-1 flex flex-wrap md:-m-2'>
            {book.map((books, index) => {
              return (
                <div key={index} className='flex w-1/3 flex-wrap'>
                  <div className='w-full p-1 md:p-2'>
                    <Link to={`/infoBooks/${books.id}`}>
                      <img
                        src={books.imagen_book}
                        loading='lazy'
                        alt='imagen books'
                        className='block h-full w-full rounded-lg object-cover object-center transition duration-500 ease-in-out transform hover:scale-105 border-2 border-gray-200 hover:border-gray-400'
                      />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </>
  )
}
