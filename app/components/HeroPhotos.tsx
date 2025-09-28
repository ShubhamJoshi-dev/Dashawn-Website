'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function HeroPhotos() {
  const [hoveredPhoto, setHoveredPhoto] = useState<number | null>(null)

  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ 
      behavior: 'smooth' 
    })
    // Add shake effect to gallery
    setTimeout(() => {
      const element = document.getElementById('gallery')
      if (element) {
        element.classList.add('shake')
        setTimeout(() => element.classList.remove('shake'), 500)
      }
    }, 800)
  }

  return (
    <div className="relative">
      {/* Main Photo Stack */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative flex justify-center items-center mb-8"
      >
        {/* Background decorative photos */}
        <motion.div
          animate={{ 
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-4 border-red-400 shadow-2xl transform rotate-12 opacity-60">
            <img
              src="/photo9.jpeg"
              alt="Background friend"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          animate={{ 
            rotate: [0, -5, 5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-4 border-orange-400 shadow-2xl transform -rotate-12 opacity-60">
            <img
              src="/photo8.jpeg"
              alt="Background friend"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Main center photo */}
        <motion.div
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            duration: 1.2, 
            delay: 1,
            type: "spring",
            bounce: 0.6
          }}
          whileHover={{ 
            scale: 1.1,
            rotate: [0, 2, -2, 0],
            transition: { duration: 0.3 }
          }}
          className="relative z-10 cursor-pointer"
          onClick={scrollToGallery}
        >
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border-6 border-yellow-400 shadow-2xl bg-white/20 backdrop-blur-sm">
            <img
              src="/photo1.jpeg"
              alt="Main friend"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Rotating emoji */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute -top-4 -right-4 text-4xl"
          >
            😂
          </motion.div>

          {/* Click indicator */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold"
          >
            CLICK ME! 👆
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Side Preview Photos */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="flex justify-center items-center space-x-3 mb-8"
      >
        {[2, 3, 4, 5, 6].map((photoNum, index) => (
          <motion.div
            key={photoNum}
            initial={{ 
              opacity: 0, 
              scale: 0.3, 
              y: 50 
            }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0 
            }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1 + 1.8,
              type: "spring",
              bounce: 0.4
            }}
            whileHover={{ 
              scale: 1.3, 
              rotate: Math.random() * 20 - 10,
              zIndex: 20,
              transition: { duration: 0.2 }
            }}
            className="relative cursor-pointer"
            onClick={scrollToGallery}
            onMouseEnter={() => setHoveredPhoto(photoNum)}
            onMouseLeave={() => setHoveredPhoto(null)}
          >
            <motion.div
              animate={{ 
                y: [0, -8, 0],
                rotate: [0, 1, -1, 0]
              }}
              transition={{ 
                duration: 3 + index * 0.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-3 border-yellow-300 shadow-lg bg-white/20 backdrop-blur-sm">
                <img
                  src={`/photo${photoNum}.jpeg`}
                  alt={`Friend ${photoNum}`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Fun sticker */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8 + index * 2, repeat: Infinity, ease: "linear" }}
                className="absolute -top-1 -right-1 text-sm"
              >
                {['🤡', '🎭', '💀', '🔥', '✨'][index]}
              </motion.div>

              {/* Hover tooltip */}
              {hoveredPhoto === photoNum && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-xs whitespace-nowrap"
                >
                  Click to see more! 📸
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{ 
          rotate: 360,
          x: [0, 20, -20, 0],
          y: [0, -10, 10, 0]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          x: { duration: 8, repeat: Infinity },
          y: { duration: 6, repeat: Infinity }
        }}
        className="absolute -left-16 top-8 text-4xl opacity-50"
      >
        🎊
      </motion.div>
      
      <motion.div
        animate={{ 
          rotate: -360,
          x: [0, -20, 20, 0],
          y: [0, 10, -10, 0]
        }}
        transition={{ 
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          x: { duration: 7, repeat: Infinity },
          y: { duration: 5, repeat: Infinity }
        }}
        className="absolute -right-16 top-8 text-4xl opacity-50"
      >
        🎭
      </motion.div>

      {/* Animated instruction text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="text-center"
      >
        <motion.p
          animate={{ 
            textShadow: [
              "0 0 10px #fbbf24",
              "0 0 20px #dc2626", 
              "0 0 10px #fbbf24"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-lg text-yellow-300 font-medium"
        >
          ↑ Click any photo for instant entertainment! ↑
        </motion.p>
      </motion.div>
    </div>
  )
}
