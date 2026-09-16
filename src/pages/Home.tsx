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
  return (
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
          content="Mount Moriah School, Christian School Kenya, CBC School, Junior School, Primary School, Foundation Class, Nairobi"
        />

        {/* Open Graph / Social Media Sharing Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mountmoriahinternationalchristianschool.com/" />
        <meta property="og:title" content="Mount Moriah International Christian School" />
        <meta property="og:description" content="Providing quality Christian education through the CBC curriculum, nurturing academic excellence, discipline and godly character." />
        <meta property="og:image" content="https://www.mountmoriahinternationalchristianschool.com/images/logo.png" />

        {/* Canonical Link - Tells Google this is the official URL */}
        <link rel="canonical" href="https://www.mountmoriahinternationalchristianschool.com/" />
      </Helmet>

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
