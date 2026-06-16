import Hero from '../components/home/Hero'
import Features from '../components/home/Features'
import Stats from '../components/home/Stats'
import Curriculum from '../components/home/Curriculum'
import PhotoGallery from '../components/home/PhotoGallery'
import Events from '../components/home/Events'
import News from '../components/home/News'
import Testimonials from '../components/home/Testimonials'
import CTASection from '../components/home/CTASection'
import { Helmet } from 'react-helmet-async'

export default function Home() {
  <>
  <Helmet>
    <title>
      Mount Moriah International Christian School | Learning Today for a Better Tomorrow
    </title>

    <meta
      name="description"
      content="Mount Moriah International Christian School provides quality Christian education through the CBC curriculum, nurturing academic excellence, discipline and godly character."
    />

    <meta
      name="keywords"
      content="Mount Moriah School, Christian School Kenya, CBC School, Junior Secondary School, Primary School, PP1, PP2"
    />
  </Helmet>

  {/* existing page content */}
</>
  return (
    <>
      <Hero />
      <Features />
      <Stats />
      <Curriculum />
      <PhotoGallery />
      <Events />
      <News />
      <Testimonials />
      <CTASection />
    </>
  )
}
