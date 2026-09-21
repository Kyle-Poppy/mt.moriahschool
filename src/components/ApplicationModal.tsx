import { useState, useEffect } from 'react'
import { X, CheckCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

interface ApplicationModalProps {
  isOpen: boolean
  onClose: () => void
  subject: string
}

export default function ApplicationModal({ isOpen, onClose, subject }: ApplicationModalProps) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  // Your exact EmailJS keys
  const SERVICE_ID = 'service_9d9t7qc'
  const TEMPLATE_ID = 'template_jrt8lnh'
  const PUBLIC_KEY = 'cXJE1bzYOTmMWvASu'

  useEffect(() => {
    emailjs.init(PUBLIC_KEY)
  }, [])

  // Reset state if modal is closed and reopened
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setSubmitted(false)
        setErrorMessage('')
        setForm({ name: '', email: '', phone: '', message: '' })
      }, 300) // wait for exit animation to finish
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isSubmitting) return

    setIsSubmitting(true)
    setErrorMessage('')

    try {
      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        subject: subject, // Automatically inject the class they are applying for
        message: form.message,
      }

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)

      setSubmitted(true)
      
      // Show success state, then automatically close modal after 3 seconds
      setTimeout(() => {
        onClose()
        setIsSubmitting(false)
      }, 3000)

    } catch (error: any) {
      console.error('EmailJS Error:', error)
      setErrorMessage(error?.text || 'Failed to send application. Please try again.')
      setIsSubmitting(false)
    }
  }

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose} // Clicking the blurred backdrop closes the modal
    >
      {/* Modal Content - stopPropagation prevents closing when clicking inside the white box */}
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button 'X' */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors z-10"
        >
          <X size={20} />
        </button>

        <div className="p-8">
          {submitted ? (
            <div className="text-center py-10 animate-fade-in">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary-500 mb-2">Application Sent!</h3>
              <p className="text-gray-600">We will contact you in 1-2 business days with the next steps.</p>
            </div>
          ) : (
            <>
              <h3 className="font-heading text-2xl font-bold text-primary-500 mb-2">Student Application</h3>
              <p className="text-sm text-gray-500 mb-6">Please provide your details below.</p>
              
              {errorMessage && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 text-sm rounded-lg">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Applying For</label>
                  <input 
                    readOnly 
                    value={subject} 
                    className="w-full border border-gray-200 bg-gray-50 text-gray-500 rounded-lg px-4 py-2.5 text-sm font-semibold cursor-not-allowed"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Parent/Guardian Name *</label>
                    <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
                      placeholder="Full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
                      placeholder="your@email.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
                    placeholder="+254 700 000 000" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes (Optional)</label>
                  <textarea rows={3} value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 resize-none"
                    placeholder="Any specific questions or details?" />
                </div>

                <button type="submit" disabled={isSubmitting}
                  className="w-full bg-accent-500 hover:bg-accent-600 disabled:bg-gray-400 text-white font-semibold py-3 rounded-lg transition-colors mt-2">
                  {isSubmitting ? 'Sending Application...' : 'Submit Application'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}