import Link from 'next/link'

export default function Watermark() {
  return (
    <div className="absolute bottom-4 right-4 text-gray-400 opacity-50 text-sm">
      <Link href="/" className="hover:text-gray-600 transition-colors">
        Powered by PitchBox
      </Link>
    </div>
  )
}
