import { motion } from 'framer-motion'
import { Layers, Zap, Users, LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  { icon: Layers, title: "Seamless Integration", description: "Effortlessly combine slides and live demos" },
  { icon: Zap, title: "Real-time Interaction", description: "Engage your audience with dynamic presentations" },
  { icon: Users, title: "Multi-platform Support", description: "Present confidently across all devices" }
]

export default function Features() {
  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold mb-16 text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative inline-block mb-6">
                <feature.icon className="h-16 w-16 text-gray-900 transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 bg-purple-300 rounded-full filter blur-2xl opacity-0 group-hover:opacity-30 transition-opacity" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-white" />
    </section>
  )
}