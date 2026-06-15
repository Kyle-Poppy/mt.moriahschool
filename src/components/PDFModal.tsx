import { X } from 'lucide-react'

interface PDFModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  pdfUrl: string
}

export default function PDFModal({
  isOpen,
  onClose,
  title,
  pdfUrl,
}: PDFModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl w-full max-w-5xl h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="font-bold text-lg">{title}</h3>

          <div className="flex gap-3">
            <a
              href={pdfUrl}
              download
              className="bg-primary-500 text-white px-4 py-2 rounded-lg"
            >
              Download
            </a>

            <button onClick={onClose}>
              <X />
            </button>
          </div>
        </div>

        <iframe
          src={pdfUrl}
          className="w-full h-full"
          title={title}
        />
      </div>
    </div>
  )
}