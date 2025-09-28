'use client'

import { motion } from 'framer-motion'

export default function FloatingElements() {
  const elements = [
    { emoji: '🪔', delay: 0 },
    { emoji: '🎊', delay: 1 },
    { emoji: '🎭', delay: 2 },
    { emoji: '🎪', delay: 3 },
    { emoji: '🎨', delay: 4 },
    { emoji: '🎯', delay: 5 },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl opacity-20"
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100,
            rotate: 0
          }}
          animate={{
            y: -100,
            rotate: 360,
            x: Math.random() * window.innerWidth
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: element.delay,
            ease: "linear"
          }}
        >
          {element.emoji}
        </motion.div>
      ))}
    </div>
  )
}
