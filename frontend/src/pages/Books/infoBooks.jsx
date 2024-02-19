import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios'
import shop from '@/assets/shop.svg'

export default function InfoBooks() {
  const { id } = useParams()
  const [books, setBooks] = useState([])
  const [authors, setAuthors] = useState([])
  const [genrs, setGenre] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const booksResponse = await Axios.get(
          `http://localhost:8000/api/books/${id}`
        )
        setBooks(booksResponse.data)

        const authorsResponse = await Axios.get(
          `http://localhost:8000/api/authors/${booksResponse.data.author}`
        )
        setAuthors(authorsResponse.data)

        const genreResponse = await Axios.get(
          `http://localhost:8000/api/genres/${booksResponse.data.genr}`
        )
        setGenre(genreResponse.data)
      } catch (error) {
        console.error('Error fetching data: ', error)
      }
    }
    fetchData()
  }, [id])
  return (
    <div>
      <main className='flex justify-center h-screen items-center md:max-h-screen'>
        {books && authors && genrs ? (
          <div className=''>
            <div className='flex gap-10'>
              {/* title */}
              <article>
                <img
                  src={books.imagen_book}
                  alt='imagen books'
                  className='w-96 rounded-xl transition duration-500 ease-in-out transform hover:scale-104 hover:shadow-2xl '
                />
                <div className='bg-blue-600 mt-5 text-center border rounded-lg hover:bg-blue-500 py-1'>
                  <button className='text-xl text-white font-bold'>
                    <a
                      href=''
                      className='flex justify-center items-center gap-4'>
                      <img src={shop} alt='' />$ {books.price}
                    </a>
                  </button>
                </div>
              </article>
              {/* author an genro */}
              <article>
                <h1 className='text-center text-4xl font-bold '>
                  {books.title}
                </h1>
                <div className='flex justify-center items-center gap-5 mt-5'>
                  <span className='text-center font-medium text-2xl'>
                    {authors.name}
                  </span>
                  <span className='font-medium text-2xl cursor-pointer bg-blue-300  border rounded-2xl px-4 transition duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xl'>
                    {genrs.name}
                  </span>
                </div>
                <div className='w-[30rem] mt-14 text-[1.6rem] text-center'>
                  <p>{books.descriptionbook}</p>
                </div>
              </article>
            </div>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </main>
    </div>
  )
}
