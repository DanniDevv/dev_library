import { useState, useEffect } from 'react'
import Axios from 'axios'
import Navbar from '@/components/Navbar'
const baseURL = 'http://localhost:8000/api/authors/'
export default function Authors() {
  const [author, setAuthors] = useState([])

  useEffect(() => {
    Axios.get(baseURL).then((response) => {
      setAuthors(response.data)
      console.log(response.data)
    })
  }, [])
  if (!author) return null

  return (
    <>
      <Navbar />
      <main className='mx-24 my-16'>
        <h1 className='text-4xl font-bold text-center mt-28'>Authors</h1>
        <div className='container mx-auto px-5 py-2 lg:px-32 lg:pt-12'>
          <div className='-m-1 flex flex-wrap md:-m-2'>
            {author.map((author, index) => {
              return (
                <div key={index} className='flex w-1/4 flex-wrap'>
                  <div className='w-full p-1 md:p-2 transition duration-500 ease-in-out transform hover:scale-105'>
                    <a href={`/infoAuthors/${author.id}`}>
                      <img
                        src={author.imagen_autor}
                        alt='imagen autor'
                        className='block h-full w-full rounded-lg object-cover object-center '
                      />
                      <span className='flex justify-center text-center font-medium text-xl'>
                        {author.name}
                      </span>
                    </a>
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
