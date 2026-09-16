import { Link } from 'react-router-dom'

// Transformed into an array of objects to provide unique, SEO-boosting alt text for every image.
const images = [
  { src: '/images/photo-gallery/school1.jpeg', alt: 'Mount Moriah International Christian School campus overview' },
  { src: '/images/photo-gallery/school2.jpeg', alt: 'Students engaged in classroom activities at Mount Moriah' },
  { src: '/images/photo-gallery/school3.jpeg', alt: 'Children participating in outdoor play and physical education' },
  { src: '/images/photo-gallery/school4.jpeg', alt: 'Mount Moriah school students collaborating on a project' },
  { src: '/images/photo-gallery/school5.jpeg', alt: 'Teacher helping a student with coursework at Mount Moriah' },
  { src: '/images/photo-gallery/school6.jpeg', alt: 'Group of happy students in their school uniforms' },
  { src: '/images/photo-gallery/school7.jpeg', alt: 'Art and creative learning activities at our Christian school' },
  { src: '/images/photo-gallery/school8.jpeg', alt: 'Students participating in spiritual and character building activities' },
  { src: '/images/photo-gallery/school9.jpeg', alt: 'Technology and computer learning in the classroom' },
  { src: '/images/photo-gallery/school10.jpeg', alt: 'School library and reading time at Mount Moriah' },
  { src: '/images/photo-gallery/school11.jpeg', alt: 'Extracurricular activities and talent development' },
]

export default function PhotoGallery() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-secondary-500 font-semibold text-sm tracking-widest uppercase mb-2">School Life</p>
          <h2 className="section-title">A Place Where Your Child Will Grow!</h2>
          <p className="section-subtitle mx-auto text-center">
            Mount Moriah's success lies in our commitment to excellence and professionalism — in identifying strongly with the best outcome for every child.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {images.map((item, i) => (
            <div key={i} className="aspect-square rounded-xl overflow-hidden group cursor-pointer">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/gallery"
            className="inline-block border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  )
}
