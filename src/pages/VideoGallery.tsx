import { useState } from 'react'
import { X } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

const videos = [
  {
    src: '/videos/gallery/deaf-day1.mp4',
    caption: 'Deaf Day',
    category: 'Events',
  },
  {
    src: '/videos/gallery/deaf-day2.mp4',
    caption: 'Deaf Day',
    category: 'Events',
  },
  {
    src: '/videos/gallery/deaf-day3.mp4',
    caption: 'Deaf Day',
    category: 'Events',
  },
  {
    src: '/videos/gallery/sports-day1.mp4',
    caption: 'Sports Day',
    category: 'Sports',
  },
  {
    src: '/videos/gallery/campus1.mp4',
    caption: 'school compound',
    category: 'Campus',
  },
  {
    src: '/videos/gallery/co-curricular1.mp4',
    caption: 'Co-Curricular Activities',
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

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<(typeof videos)[0] | null>(null)
  const [activeCategory, setActiveCategory] = useState('All')
  const filteredVideos =
  activeCategory === 'All'
    ? videos
    : videos.filter(
        (video) => video.category === activeCategory
      )

  return (
    <>
    <Helmet>
  <title>Video Gallery | Mount Moriah International Christian School</title>

  <meta
    name="description"
    content="Watch videos from Mount Moriah International Christian School including sports day, school events, co-curricular activities, campus life and student experiences."
  />

  <meta
    name="keywords"
    content="School Videos, Sports Day, School Events, Campus Life, Student Activities, Mount Moriah School Nairobi"
  />
</Helmet>
      <div className="relative h-64 bg-primary-500 flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/images/gallery/campus/campus1.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-primary-900/70" />
        <div className="relative z-10">
          <h1 className="font-heading text-4xl font-bold text-white mb-2">Video Gallery</h1>
          <p className="text-primary-200">Home › Media › Video Gallery</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl font-bold text-primary-500 mb-3">School Life at Mount Moriah</h2>
            <div className="flex justify-center gap-8 mb-10 flex-wrap">
  <div className="text-center">
    <div className="text-3xl font-bold text-primary-500">
      {videos.length}
    </div>
    <div className="text-gray-500 text-sm">Videos</div>
  </div>

  <div className="text-center">
    <div className="text-3xl font-bold text-primary-500">
  {categories.length - 1}
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
  {filteredVideos.map((video, i) => (
    <div key={i} onClick={() => setSelectedVideo(video)}
      className="aspect-square rounded-2xl overflow-hidden group cursor-pointer relative shadow-md hover:shadow-xl transition-all duration-300">

      <video
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        muted
        preload="metadata"
      >
        <source src={video.src} type="video/mp4" />
      </video>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="bg-black/50 text-white rounded-full w-14 h-14 flex items-center justify-center text-xl">
          ▶
        </div>
      </div>

      <div className="absolute top-3 left-3 bg-primary-500/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
        {video.category}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
        <span className="text-white text-sm font-semibold">
          {video.caption}
        </span>
      </div>

    </div>
  ))}
</div>
        </div>
      </section>

            {/* Lightbox */}
      {selectedVideo && (
  <div
    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
    onClick={() => setSelectedVideo(null)}
  >
    <button
      className="absolute top-4 right-4 text-white"
      onClick={() => setSelectedVideo(null)}
    >
      <X size={30} />
    </button>

    <video
      controls
      autoPlay
      className="max-w-full max-h-full rounded-lg shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      <source src={selectedVideo.src} type="video/mp4" />
    </video>

    <div className="absolute bottom-6 text-white text-sm font-medium">
      {selectedVideo.caption}
    </div>
  </div>
)}
    </>
  )
}
