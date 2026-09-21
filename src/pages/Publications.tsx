import { useState } from 'react'
import { FileText, Calendar, Download, BookOpen, ChevronDown, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

// --- FAQ DATA ---
const faqs = [
  {
    question: 'Do you offer school transportation?',
    answer: 'Yes, we provide safe and reliable school transport. Our fleet covers several routes including Fedha Estate, Tassia, Pipeline, and surrounding areas. All buses are equipped with safety belts and are accompanied by an adult bus attendant.'
  },
  {
    question: 'Do you offer services for children with disabilities or special needs?',
    answer: 'Mount Moriah is an inclusive Christian community. We welcome students with varying needs and offer personalized attention. For specific learning disabilities or physical requirements, we assess each child on a case-by-case basis to ensure we have the right resources to fully support their educational journey.'
  },
  {
    question: 'Are meals provided at school?',
    answer: 'Yes, we provide highly nutritious, well-balanced hot lunches and mid-morning snacks prepared daily in our hygienic school kitchens.'
  },
  {
    question: 'What extracurricular activities are available?',
    answer: 'We believe in holistic development. Students can participate in coding, music and instruments, debate club, swimming, football, and various arts and crafts programs.'
  },
  {
    question: 'What is the teacher-to-student ratio?',
    answer: 'We maintain a low teacher-to-student ratio to ensure personalized attention, allowing our educators to identify and nurture each child’s unique potential.'
  }
]

// --- FAQ COMPONENT (Accordion) ---
function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left group"
      >
        <h3 className="text-lg font-semibold text-primary-500 group-hover:text-accent-500 transition-colors pr-4">
          {question}
        </h3>
        <span className={`w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown size={18} className="text-gray-500" />
        </span>
      </button>
      <div 
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden text-gray-600 leading-relaxed pr-8">
          {answer}
        </div>
      </div>
    </div>
  )
}

export default function Publications() {
  return (
    <>
      <Helmet>
        <meta property="og:title" content="Publications | Mount Moriah International Christian School" />
        <meta property="og:description" content="Access school publications, newsletters, fee structures and important resources from Mount Moriah International Christian School." />
        <meta property="og:type" content="website" />
        <title>Publications | Mount Moriah International Christian School</title>
        <meta name="description" content="Access Mount Moriah International Christian School publications including fee structures, newsletters, school documents, resources and event information." />
        <meta name="keywords" content="School Publications, Fee Structure, School Newsletters, School Documents, Events Calendar, Mount Moriah School Nairobi" />
      </Helmet>

      {/* Cinematic Hero */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center animate-fade-in">
          <p className="text-secondary-500 font-semibold text-sm tracking-widest uppercase mb-4">Resources</p>
          <h1 className="font-heading text-5xl md:text-7xl font-extrabold tracking-tight text-primary-500 mb-6">
            Publications & <br className="hidden md:block"/> Information.
          </h1>
          <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">
            Access important school documents, termly newsletters, fee structures, and event calendars all in one place.
          </p>
        </div>
      </section>

      {/* Bento Grid Resources */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Featured Bento Box: Fee Structure */}
          <div className="md:col-span-2 group relative rounded-[2rem] overflow-hidden bg-gray-50 flex flex-col justify-end min-h-[360px] p-10 hover:shadow-xl transition-all duration-500">
            {/* Soft decorative background image via Unsplash */}
            <div className="absolute inset-0 opacity-40 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                 style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
            
            <div className="relative z-10 max-w-md bg-white/80 backdrop-blur-md p-8 rounded-3xl">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 mb-6">
                <FileText size={24} />
              </div>
              <h3 className="font-heading text-3xl font-bold text-primary-500 mb-3">Fee Structure</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                View and download the latest school fee structure for all classes. We believe in transparent pricing for world-class education.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="/pdfs/fee-structure.pdf" target="_blank" rel="noreferrer"
                   className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-semibold transition-colors">
                  View PDF
                </a>
                <a href="/pdfs/fee-structure.pdf" download
                   className="bg-white hover:bg-gray-100 text-primary-500 border border-gray-200 px-6 py-3 rounded-full font-semibold transition-colors flex items-center gap-2">
                  <Download size={18} /> Download
                </a>
              </div>
            </div>
          </div>

          {/* Bento Box: Events */}
          <div className="md:col-span-1 rounded-[2rem] bg-primary-500 p-10 text-white flex flex-col justify-between hover:bg-primary-600 transition-colors shadow-lg">
            <div>
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
                <Calendar size={24} className="text-white" />
              </div>
              <h3 className="font-heading text-3xl font-bold mb-3">Events <br/> Calendar</h3>
              <p className="text-primary-100 leading-relaxed mb-8">
                Stay updated with term dates, sports days, and upcoming school activities.
              </p>
            </div>
            <Link to="/#events" className="flex items-center gap-2 font-semibold hover:gap-4 transition-all">
              View Events <ArrowRight size={20} />
            </Link>
          </div>

          {/* Bento Box: Newsletters (Full Width) */}
          <div className="md:col-span-3 rounded-[2rem] border border-gray-200 bg-white p-10 flex flex-col md:flex-row md:items-center justify-between gap-8 hover:border-primary-200 transition-colors">
            <div className="max-w-xl">
              <div className="w-12 h-12 bg-secondary-50 rounded-full flex items-center justify-center text-secondary-500 mb-6">
                <BookOpen size={24} />
              </div>
              <h3 className="font-heading text-3xl font-bold text-primary-500 mb-3">School Newsletters</h3>
              <p className="text-gray-600 leading-relaxed">
                Catch up on student achievements, curriculum updates, and messages from the principal's desk.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full md:w-auto">
              {[
                { title: "Term 1", link: "/pdfs/newsletter-term1.pdf" },
                { title: "Term 2", link: "/pdfs/newsletter-term2.pdf" },
                { title: "Term 3", link: "/pdfs/newsletter-term3.pdf" }
              ].map((term) => (
                <a key={term.title} href={term.link} target="_blank" rel="noreferrer"
                   className="group flex flex-col items-center p-6 rounded-2xl bg-gray-50 hover:bg-primary-50 transition-colors border border-gray-100 text-center">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-primary-500 group-hover:scale-110 transition-transform mb-3">
                    <Download size={18} />
                  </div>
                  <span className="font-semibold text-primary-500">{term.title}</span>
                  <span className="text-xs text-gray-500 mt-1">Newsletter</span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 mt-12 rounded-t-[3rem]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary-500 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-500 text-lg">Everything you need to know about student life at Mount Moriah.</p>
          </div>

          <div className="border-t border-gray-200">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}