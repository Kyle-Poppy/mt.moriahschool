import { useState } from 'react'
import { X } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

const photos = [
  {
    src: '/images/gallery/campus/campus1.jpeg',
    caption: 'School Campus',
    category: 'Campus',
  },

  {
    src: '/images/gallery/campus/campus2.jpeg',
    caption: 'School Campus',
    category: 'Campus',
  },
   {
    src: '/images/gallery/campus/campus3.jpeg',
    caption: 'School Campus',
    category: 'Campus',
  },
   {
    src: '/images/gallery/campus/campus4.jpeg',
    caption: 'School Campus',
    category: 'Campus',
  },
   {
    src: '/images/gallery/campus/campus5.jpeg',
    caption: 'School field',
    category: 'Campus',
  },

  {
    src: '/images/gallery/classrooms/class1.jpeg',
    caption: 'CBE Classroom',
    category: 'Classrooms',
  },
  {
    src: '/images/gallery/classrooms/class2.jpeg',
    caption: 'CBE Classroom',
    category: 'Classrooms',
  },
  {
    src: '/images/gallery/classrooms/class3.jpeg',
    caption: 'CBE Classroom',
    category: 'Classrooms',
  },
  {
    src: '/images/gallery/classrooms/class4.jpeg',
    caption: 'CBE Classroom',
    category: 'Classrooms',
  },
  {
    src: '/images/gallery/classrooms/class5.jpeg',
    caption: 'CBE Classroom',
    category: 'Classrooms',
  },
  {
    src: '/images/gallery/classrooms/class6.jpeg',
    caption: 'CBE Classroom',
    category: 'Classrooms',
  },
  {
    src: '/images/gallery/classrooms/class7.jpeg',
    caption: 'CBE Classroom',
    category: 'Classrooms',
  },
  {
    src: '/images/gallery/classrooms/class8.jpeg',
    caption: 'CBE Classroom',
    category: 'Classrooms',
  },
  {
    src: '/images/gallery/classrooms/class9.jpeg',
    caption: 'CBE Classroom',
    category: 'Classrooms',
  },
  {
    src: '/images/gallery/classrooms/class10.jpeg',
    caption: 'CBE Classroom',
    category: 'Classrooms',
  },
  {
    src: '/images/gallery/classrooms/class11.jpeg',
    caption: 'CBE Classroom',
    category: 'Classrooms',
  },
  {
    src: '/images/gallery/classrooms/class12.jpeg',
    caption: 'CBE Classroom',
    category: 'Classrooms',
  },
  {
    src: '/images/gallery/classrooms/class13.jpeg',
    caption: 'CBE Classroom',
    category: 'Classrooms',
  },
  {
    src: '/images/gallery/classrooms/class14.jpeg',
    caption: 'CBE Classroom',
    category: 'Classrooms',
  },
  {
    src: '/images/gallery/classrooms/class15.jpeg',
    caption: 'CBE Classroom',
    category: 'Classrooms',
  },
  {
    src: '/images/gallery/classrooms/class16.jpeg',
    caption: 'CBE Classroom',
    category: 'Classrooms',
  },

  {
    src: '/images/gallery/events/event1.jpeg',
    caption: 'Graduation Day',
    category: 'Events',
  },
  {
    src: '/images/gallery/events/event2.jpeg',
    caption: 'Play Day',
    category: 'Events',
  },
  {
    src: '/images/gallery/events/event3.jpeg',
    caption: 'Scout Day',
    category: 'Events',
  },
  {
    src: '/images/gallery/events/event4.jpeg',
    caption: 'Graduation Day',
    category: 'Events',
  },
  {
    src: '/images/gallery/events/event5.jpeg',
    caption: 'Annual Function',
    category: 'Events',
  },
  {
    src: '/images/gallery/events/event6.jpeg',
    caption: 'Annual Function',
    category: 'Events',
  },
  {
    src: '/images/gallery/events/event7.jpeg',
    caption: 'Annual Function',
    category: 'Events',
  },
  {
    src: '/images/gallery/events/event8.jpeg',
    caption: 'Graduation Day',
    category: 'Events',
  },
  {
    src: '/images/gallery/events/event9.jpeg',
    caption: 'Birthday Day',
    category: 'Events',
  },

  {
    src: '/images/gallery/sports/sport2.jpeg',
    caption: 'volleyball match',
    category: 'Sports',
  },
  {
    src: '/images/gallery/sports/sport1.jpeg',
    caption: 'Medal Winners',
    category: 'Sports',
  },

  {
    src: '/images/gallery/activities/activity1.jpeg',
    caption: 'outdoor activities',
    category: 'Activities',
  },
  {
    src: '/images/gallery/activities/activity2.jpeg',
    caption: 'swimming Activities',
    category: 'Activities',
  },
  {
    src: '/images/gallery/activities/activity3.jpeg',
    caption: 'swimming Activities',
    category: 'Activities',
  },
  {
    src: '/images/gallery/activities/activity4.jpeg',
    caption: 'ballet Activities',
    category: 'Activities',
  },
  {
    src: '/images/gallery/activities/activity5.jpeg',
    caption: 'ballet Activities',
    category: 'Activities',
  },
  {
    src: '/images/gallery/activities/activity6.jpeg',
    caption: 'Reading Activities',
    category: 'Activities',
  },
  {
    src: '/images/gallery/activities/activity7.jpeg',
    caption: 'Co-curricular Activities',
    category: 'Activities',
  },
  {
    src: '/images/gallery/activities/activity8.jpeg',
    caption: 'Co-curricular Activities',
    category: 'Activities',
  },
  {
    src: '/images/gallery/activities/activity9.jpeg',
    caption: 'Co-curricular Activities',
    category: 'Activities',
  },
  {
    src: '/images/gallery/activities/activity10.jpeg',
    caption: 'Co-curricular Activities',
    category: 'Activities',
  },
  {
    src: '/images/gallery/activities/activity11.jpeg',
    caption: 'Co-curricular Activities',
    category: 'Activities',
  },
  {
    src: '/images/gallery/activities/activity12.jpeg',
    caption: 'Co-curricular Activities',
    category: 'Activities',
  },
  {
    src: '/images/gallery/activities/activity13.jpeg',
    caption: 'Co-curricular Activities',
    category: 'Activities',
  },
  {
    src: '/images/gallery/activities/activity14.jpeg',
    caption: 'Co-curricular Activities',
    category: 'Activities',
  },
  {
    src: '/images/gallery/activities/activity15.jpeg',
    caption: 'Co-curricular Activities',
    category: 'Activities',
  },
  {
    src: '/images/gallery/activities/activity16.jpeg',
    caption: 'Co-curricular Activities',
    category: 'Activities',
  },
  {
    src: '/images/gallery/activities/activity17.jpeg',
    caption: 'Co-curricular Activities',
    category: 'Activities',
  },
  {
    src: '/images/gallery/activities/activity18.jpeg',
    caption: 'Co-curricular Activities',
    category: 'Activities',
  },
  {
    src: '/images/gallery/activities/activity19.jpeg',
    caption: 'Co-curricular Activities',
    category: 'Activities',
  },
  {
    src: '/images/gallery/activities/activity20.jpeg',
    caption: 'Co-curricular Activities',
    category: 'Activities',
  },
  {
    src: '/images/gallery/activities/activity21.jpeg',
    caption: 'Co-curricular Activities',
    category: 'Activities',
  },

]
const categories = [
  'All',
  'Campus',
  'Events',
  'Sports',
  'Classrooms',
  'Activities',
]

export default function GalleryPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof photos)[0] | null>(null)
  const [activeCategory, setActiveCategory] = useState('All')
  const filteredPhotos =
  activeCategory === 'All'
    ? photos
    : photos.filter(
        (photo) => photo.category === activeCategory
      )

  return (
    <>
    <Helmet>
  <title>Photo Gallery | Mount Moriah International Christian School</title>

  <meta
    name="description"
    content="Explore our CBC curriculum, Coding and STEM programmes, Christian education, sports, co-curricular activities and holistic learning approach."
  />

  <meta
    name="keywords"
    content="CBC Curriculum, Coding, STEM, Christian Education, Primary School, Junior School, Mount Moriah School Nairobi"
  />
</Helmet>
      <div className="relative h-64 bg-primary-500 flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/images/gallery/campus/campus1.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-primary-900/70" />
        <div className="relative z-10">
          <h1 className="font-heading text-4xl font-bold text-white mb-2">Photo Gallery</h1>
          <p className="text-primary-200">Home › Media › Photo Gallery</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl font-bold text-primary-500 mb-3">School Life at Mount Moriah</h2>
            <div className="flex justify-center gap-8 mb-10 flex-wrap">
  <div className="text-center">
    <div className="text-3xl font-bold text-primary-500">
      {photos.length}
    </div>
    <div className="text-gray-500 text-sm">Photos</div>
  </div>

  <div className="text-center">
    <div className="text-3xl font-bold text-primary-500">
      5
    </div>
    <div className="text-gray-500 text-sm">Categories</div>
  </div>
</div>
            <p className="text-gray-500 max-w-xl mx-auto">A glimpse into the vibrant, faith-filled community we've built together.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
  {categories.map((category) => (
    <button
      key={category}
      onClick={() => setActiveCategory(category)}
      className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-sm ${
  activeCategory === category
    ? 'bg-primary-500 text-white shadow-lg scale-105'
    : 'bg-white border border-gray-200 text-gray-700 hover:border-primary-500 hover:text-primary-500'
}`}
    >
      {category}
    </button>
  ))}
</div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {filteredPhotos.map((p, i) => (
              <div key={i} onClick={() => setSelectedPhoto(p)}
                className="aspect-square rounded-2xl overflow-hidden group cursor-pointer relative shadow-md hover:shadow-xl transition-all duration-300">
                <img src={p.src} alt={p.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3 bg-primary-500/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
  {p.category}
</div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-semibold">{p.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* Lightbox */}
      {selectedPhoto !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setSelectedPhoto(null)}
          >
            <X size={30} />
          </button>

          <img
            src={selectedPhoto.src}
            alt={selectedPhoto.caption}
            className="max-w-full max-h-full rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-6 text-white text-sm font-medium">
            {selectedPhoto.caption}
          </div>
        </div>
      )}
    </>
  )
}
