'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function FloatingElements() {
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 })
  const [isMounted, setIsMounted] = useState(false)

  const elements = [
    { emoji: '🪔', delay: 0 },
    { emoji: '🎊', delay: 1 },
    { emoji: '🎭', delay: 2 },
    { emoji: '🎪', delay: 3 },
    { emoji: '🎨', delay: 4 },
    { emoji: '🎯', delay: 5 },
  ]

  useEffect(() => {
    setIsMounted(true)
    
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    updateWindowSize()
    window.addEventListener('resize', updateWindowSize)
    
    return () => window.removeEventListener('resize', updateWindowSize)
  }, [])

  // Don't render on server-side
  if (!isMounted) {
    return null
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl opacity-20"
          initial={{ 
            x: Math.random() * windowSize.width,
            y: windowSize.height + 100,
            rotate: 0
          }}
          animate={{
            y: -100,
            rotate: 360,
            x: Math.random() * windowSize.width
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
