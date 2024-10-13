import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote: "PitchBox transformed our product demos. It's a game-changer!",
    author: "Sarah L.",
    role: "CEO of TechInnovate",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5
  },
  {
    quote: "Our conversion rates skyrocketed after using PitchBox. Simply brilliant!",
    author: "Mark R.",
    role: "Marketing Director at GrowthGenius",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5
  },
  {
    quote: "PitchBox made our presentations unforgettable. Clients love it!",
    author: "Emily T.",
    role: "Sales Manager at FutureFirm",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold mb-16 text-center">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden h-full flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
              <Quote className="absolute top-2 left-2 h-6 w-6 text-purple-200" />
              <div className="flex items-center mb-4">
                <div className="relative mr-4">
                  <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full" />
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
                    <div className="bg-yellow-400 rounded-full p-0.5">
                      <Star className="h-3 w-3 text-white" />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-sm mb-4 flex-grow relative z-10 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="flex items-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-tl-full" />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-pink-50 to-white" />
    </section>
  )
}