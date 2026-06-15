import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Admissions from './pages/Admissions'
import Academics from './pages/Academics'
import Contact from './pages/Contact'
import GalleryPage from './pages/GalleryPage'
import NotFound from './pages/NotFound'
import Publications from './pages/Publications'
import VideoGallery from './pages/VideoGallery'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="admissions" element={<Admissions />} />
          <Route path="academics" element={<Academics />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="video-gallery" element={<VideoGallery />} />
          <Route path="publications" element={<Publications />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
