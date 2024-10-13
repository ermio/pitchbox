import { motion } from 'framer-motion'

export default function Demo() {
  return (
    <section id="demo" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold mb-16 text-center">See PitchBox in Action</h2>
        <motion.div 
          className="aspect-w-16 aspect-h-9 rounded-lg shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <iframe 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-purple-50 to-white" />
    </section>
  )
}