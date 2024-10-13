import Link from 'next/link'
import { motion, useTransform, MotionValue } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'

interface HeroProps {
  mousePosition: { x: number; y: number };
  scrollYProgress: MotionValue<number>;
}

export default function Hero({ mousePosition, scrollYProgress }: HeroProps) {
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div 
        className="text-center z-10"
        style={{ opacity, scale }}
      >
        <motion.h1 
          className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Present. Demo. Impress.
        </motion.h1>
        <motion.p 
          className="text-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Pitch Your Product with Live Demo
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link href="/presentation">
            <Button size="lg" className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              Experience PitchBox
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.3) 0%, transparent 60%)`,
          mixBlendMode: 'multiply'
        }}
      />
      <motion.div 
        className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
        style={{
          backgroundSize: '60px 60px',
          opacity: useTransform(scrollYProgress, [0, 0.5], [0.2, 0]),
        }}
      />
    </section>
  )
}
