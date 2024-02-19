import Axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function InfoAuthors() {
  const { id } = useParams()
  const [authors, setAuthors] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const authorsResponse = await Axios.get(
          `http://localhost:8000/api/authors/${id}`
        )
        setAuthors(authorsResponse.data)
      } catch (error) {
        console.error('Error fetching data: ', error)
      }
    }
    fetchData()
  }, [id])
  return (
    <div className='flex justify-center h-screen items-center'>
      <main>
        {authors && (
          <div className='flex gap-10 mx-4'>
            <article>
              <img
                src={authors.imagen_autor}
                alt='imagenes de autores'
                className='w-80 h-[32rem] rounded-xl transition duration-500 ease-in-out transform hover:scale-104 hover:shadow-2xl'
              />
            </article>
            <article>
              <h1 className='font-bold text-4xl '>{authors.name}</h1>
              <div className='w-[20rem] mt-14 text-[1.4rem]'>
                <p>{authors.description}</p>
              </div>
            </article>
          </div>
        )}
      </main>
    </div>
  )
}
