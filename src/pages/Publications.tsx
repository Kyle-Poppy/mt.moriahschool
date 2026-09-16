import { FileText, Calendar, Download, BookOpen } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
export default function Publications() {
  return (
    <>
    <Helmet>
      <meta
  property="og:title"
  content="Publications | Mount Moriah International Christian School"
/>

<meta
  property="og:description"
  content="Access school publications, newsletters, fee structures and important resources from Mount Moriah International Christian School."
/>

<meta
  property="og:type"
  content="website"
/>
  <title>Publications | Mount Moriah International Christian School</title>

  <meta
    name="description"
    content="Access Mount Moriah International Christian School publications including fee structures, newsletters, school documents, resources and event information."
  />

  <meta
    name="keywords"
    content="School Publications, Fee Structure, School Newsletters, School Documents, Events Calendar, Mount Moriah School Nairobi"
  />
</Helmet>
      {/* Hero Banner */}
      <section
  className="relative h-72 flex items-center justify-center text-center"
  style={{
    backgroundImage: "url('/images/publications/publications-banner.jpeg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '50% 15%',
  }}
>
  <div className="absolute inset-0 bg-black/20"></div>

  <div className="relative z-10">
    <h1 className="text-5xl font-bold text-white">
      Publications
    </h1>

    <p className="text-gold-200 text-lg">
      School Documents, Newsletters & Resources
    </p>
  </div>
</section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-14">
            <p className="text-secondary-500 font-semibold text-sm tracking-widest uppercase mb-2">
              Resources
            </p>

            <h2 className="section-title">
              School Publications
            </h2>

            <p className="section-subtitle mx-auto">
              Access important school documents, fee structures,
              newsletters and event information.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Fee Structure */}
            <div
  id="fee-structure"
  className="bg-primary-50 rounded-2xl p-8 border border-primary-100"
>
              <FileText className="text-primary-500 mb-4" size={40} />

              <h3 className="font-heading text-2xl font-bold text-primary-500 mb-3">
                Fee Structure
              </h3>

              <p className="text-gray-600 mb-6">
                View and download the latest school fee structure.
              </p>

              <div className="flex gap-3">
                <a
                  href="/pdfs/fee-structure.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-primary-500 text-white px-5 py-3 rounded-lg font-semibold"
                >
                  View PDF
                </a>

                <a
                  href="/pdfs/fee-structure.pdf"
                  download
                  className="bg-secondary-500 text-white px-5 py-3 rounded-lg font-semibold"
                >
                  Download
                </a>
              </div>
            </div>

            {/* Events */}
            <div
  id="events-calendar"
  className="bg-primary-50 rounded-2xl p-8 border border-primary-100"
>
              <Calendar className="text-primary-500 mb-4" size={40} />

              <h3 className="font-heading text-2xl font-bold text-primary-500 mb-3">
                Events Calendar
              </h3>

              <p className="text-gray-600 mb-6">
                Stay updated with school activities and upcoming events.
              </p>

              <Link
  to="/#events"
  className="bg-primary-500 text-white px-5 py-3 rounded-lg font-semibold inline-block"
>
  View Events
</Link>
            </div>

            {/* Newsletters */}
            <div
  id="newsletters"
  className="bg-primary-50 rounded-2xl p-8 border border-primary-100"
>
              <BookOpen className="text-primary-500 mb-4" size={40} />

              <h3 className="font-heading text-2xl font-bold text-primary-500 mb-3">
                School Newsletters
              </h3>

              <p className="text-gray-600 mb-6">
                Read and download school newsletters.
              </p>

              <div className="space-y-3">
                <a
                  href="/pdfs/newsletter-term1.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-primary-500 font-medium hover:underline"
                >
                  Newsletter Term 1
                </a>

                <a
                  href="/pdfs/newsletter-term2.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-primary-500 font-medium hover:underline"
                >
                  Newsletter Term 2
                </a>

                <a
                  href="/pdfs/newsletter-term3.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-primary-500 font-medium hover:underline"
                >
                  Newsletter Term 3
                </a>
              </div>
            </div>

            {/* FAQ */}
            <div
  id="faqs"
  className="bg-primary-50 rounded-2xl p-8 border border-primary-100"
>
              <Download className="text-primary-500 mb-4" size={40} />

              <h3 className="font-heading text-2xl font-bold text-primary-500 mb-3">
                Frequently Asked Questions
              </h3>

              <p className="text-gray-600">
                This section will be available soon.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}