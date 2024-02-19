import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import Books from '@/pages/Books'
import Authors from '@/pages/Authors'
import InfoBooks from '@/pages/Books/infoBooks'
import InfoAuthors from './pages/Authors/infoAuthors'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<Books />} />
          <Route path='/infobooks/:id' element={<InfoBooks />} />
          <Route path='/authors' element={<Authors />} />
          <Route path='/infoauthors/:id' element={<InfoAuthors />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
