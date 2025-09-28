'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)
  const [filter, setFilter] = useState('none')
  const [isRoastMode, setIsRoastMode] = useState(false)

  // Photo data with funny captions
  const photos = [
    { src: '/photo1.jpeg', caption: "When you think you're the main character but you're actually comic relief! 😂" },
    { src: '/photo2.jpeg', caption: "This photo screams 'I woke up like this'... and we believe it! 🤣" },
    { src: '/photo3.jpeg', caption: "Dashain glow-up? More like Dashain show-up! ✨" },
    { src: '/photo4.jpeg', caption: "When the camera adds 10 pounds but your personality adds 100! 💪" },
    { src: '/photo5.jpeg', caption: "Professional model? No. Professional meme? Absolutely! 📸" },
    { src: '/photo6.jpeg', caption: "This is what peak performance looks like, apparently! 🏆" },
    { src: '/photo7.jpeg', caption: "Serving looks... questionable looks, but looks nonetheless! 👀" },
    { src: '/photo8.jpeg', caption: "When you're photogenic from one very specific angle! 📐" },
    { src: '/photo9.jpeg', caption: "The face that launched a thousand memes! 🚀" }
  ]

  const roastCaptions = [
    "Bro really said 'let me pose' and chose violence! 💀",
    "This photo has 'main character energy' but side character execution! 🎭",
    "When you order a model from Wish! 📦",
    "POV: You're confident but the camera disagrees! 📷",
    "This is why we need better lighting... and maybe better friends! 💡",
    "The audacity to look this confident while looking like... this! 😤",
    "When you're the photographer's biggest challenge! 📸",
    "This photo is giving 'I tried' energy! 💪",
    "Serving looks that nobody ordered! 🍽️"
  ]

  const filters = [
    { name: 'None', value: 'none', style: '' },
    { name: 'Vintage', value: 'vintage', style: 'sepia(0.8) contrast(1.2)' },
    { name: 'Drama', value: 'drama', style: 'contrast(1.5) saturate(1.3)' },
    { name: 'Glow', value: 'glow', style: 'brightness(1.2) blur(0.5px)' },
    { name: 'Meme', value: 'meme', style: 'hue-rotate(45deg) saturate(2)' },
    { name: 'Nightmare', value: 'nightmare', style: 'invert(1) hue-rotate(180deg)' }
  ]

  return (
    <section id="gallery" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            The Hall of Fame (or Shame?) 🏛️
          </h2>
          <p className="text-xl text-yellow-200 mb-8">
            Click on photos for maximum entertainment! Warning: Side effects may include uncontrollable laughter!
          </p>

          {/* Filter Controls */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {filters.map((filterOption) => (
              <motion.button
                key={filterOption.value}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(filterOption.value)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  filter === filterOption.value
                    ? 'bg-yellow-400 text-black'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {filterOption.name}
              </motion.button>
            ))}
          </div>

          {/* Roast Mode Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsRoastMode(!isRoastMode)}
            className={`px-6 py-3 rounded-full font-bold text-lg transition-all ${
              isRoastMode
                ? 'bg-red-500 text-white animate-pulse'
                : 'bg-orange-400 text-black hover:bg-orange-300'
            }`}
          >
            {isRoastMode ? '🔥 ROAST MODE ON 🔥' : '😊 Nice Mode'}
          </motion.button>
        </motion.div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotate: Math.random() * 10 - 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                rotate: Math.random() * 6 - 3,
                transition: { duration: 0.3 }
              }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedPhoto(index)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={photo.src}
                  alt={`Friend ${index + 1}`}
                  width={400}
                  height={400}
                  className="w-full h-80 object-cover transition-all duration-300 group-hover:scale-110"
                  style={{
                    filter: filters.find(f => f.value === filter)?.style || ''
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium">
                      {isRoastMode ? roastCaptions[index] : photo.caption}
                    </p>
                  </div>
                </div>

                {/* Fun Stickers */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute top-2 right-2 text-2xl"
                >
                  {['🤡', '😂', '🎭', '💀', '🔥', '✨', '🎪', '🤪', '😵'][index]}
                </motion.div>
              </div>

              {/* Photo Number */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 180 }}
                className="absolute -top-3 -left-3 w-8 h-8 bg-yellow-400 text-black font-bold rounded-full flex items-center justify-center text-sm"
              >
                {index + 1}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedPhoto !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedPhoto(null)}
            >
              <motion.div
                initial={{ scale: 0.5, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0.5, rotate: 10 }}
                className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={photos[selectedPhoto].src}
                  alt={`Friend ${selectedPhoto + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                  style={{
                    filter: filters.find(f => f.value === filter)?.style || ''
                  }}
                />
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <p className="text-white text-lg font-medium mb-4">
                    {isRoastMode ? roastCaptions[selectedPhoto] : photos[selectedPhoto].caption}
                  </p>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedPhoto(null)}
                    className="bg-red-500 text-white px-4 py-2 rounded-full font-medium"
                  >
                    Close (I've seen enough! 😂)
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
