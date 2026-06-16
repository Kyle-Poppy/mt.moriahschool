export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello Mount Moriah International Christian School! I visited your website and would like more information about admissions."
  )

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Curved Gold Text */}
<svg
  width="140"
  height="140"
  className="absolute -top-16 -left-6 pointer-events-none"
>
  <defs>
    <path
      id="talkPath"
      d="M15,100 A55,55 0 0,1 125,100"
      fill="none"
    />
  </defs>

  <text
    fill="#D4AF37"
    fontSize="16"
    fontWeight="800"
    letterSpacing="3"
  >
    <textPath
      href="#talkPath"
      startOffset="50%"
      textAnchor="middle"
    >
      TALK TO US!
    </textPath>
  </text>
</svg>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/254705473250?text=${message}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-16 h-16 rounded-full shadow-xl flex items-center justify-center bg-green-500 hover:bg-green-600 transition-colors"
      >
        <svg viewBox="0 0 32 32" className="w-9 h-9 fill-white">
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.734 5.476 2.02 7.785L0 32l8.43-2.007A15.934 15.934 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.266 13.266 0 01-6.76-1.843l-.484-.287-5.003 1.192 1.215-4.874-.316-.5A13.258 13.258 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333z" />
        </svg>
      </a>
    </div>
  )
}