import { Phone, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function TopBar() {
  return (
    <div className="bg-primary-500 text-white text-sm py-2 px-4 hidden md:block">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-6">
          <a href="tel:+254741869181"
  className="flex items-center gap-1 hover:text-secondary-300 transition-colors">
  <Phone size={13} />
  <span>+254 741 869 181</span>
</a>

<a href="mailto:mountmoriahschool2016@gmail.com"
  className="flex items-center gap-1 hover:text-secondary-300 transition-colors">
  <Mail size={13} />
  <span>mountmoriahschool2016@gmail.com</span>
</a>
        </div>
        <div className="flex items-center gap-4">
  <Link to="/admissions" className="hover:text-secondary-300 transition-colors">
    Apply Now
  </Link>

  <span className="text-primary-300">|</span>

  <Link to="/contact" className="hover:text-secondary-300 transition-colors">
    Contact Us
  </Link>

  <span className="text-primary-300">|</span>

  <Link to="/academics" className="hover:text-secondary-300 transition-colors">
    Academics
  </Link>

  <span className="text-primary-300">|</span>

  <Link to="/gallery" className="hover:text-secondary-300 transition-colors">
    Gallery
  </Link>
</div>
      </div>
    </div>
  )
}
