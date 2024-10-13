"use client"

import React, { useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import Header from './Header'
import Hero from './Hero'
import Features from './Features'
import Testimonials from './Testimonials'
import Demo from './Demo'
import CallToAction from './CallToAction'
import Footer from './Footer'

interface MousePosition {
  x: number;
  y: number;
}

export default function LandingPage() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      <Header />
      <main>
        <Hero mousePosition={mousePosition} scrollYProgress={scrollYProgress} />
        <Features />
        <Testimonials />
        <Demo />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}