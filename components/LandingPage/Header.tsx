import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Header() {
  return (
    <header className="fixed w-full z-10 mix-blend-difference">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <span className="text-2xl font-bold text-white">PitchBox</span>
        <ul className="flex space-x-8">
          <li><a href="#features" className="text-white hover:text-gray-300 transition-colors">Features</a></li>
          <li><a href="#testimonials" className="text-white hover:text-gray-300 transition-colors">Testimonials</a></li>
          <li><a href="#demo" className="text-white hover:text-gray-300 transition-colors">Demo</a></li>
          <li>
            <Link href="/presentation" className="group inline-flex items-center text-white hover:text-gray-300 transition-colors">
              Try Now
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}