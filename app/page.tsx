'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import PhotoGallery from './components/PhotoGallery'
import Header from './components/Header'
import FunnyCaption from './components/FunnyCaption'
import FloatingElements from './components/FloatingElements'
import HeroPhotos from './components/HeroPhotos'
import MemeGenerator from './components/MemeGenerator'
import RoastBattle from './components/RoastBattle'
import PhotoDistortion from './components/PhotoDistortion'

export default function Home() {
  const [currentJoke, setCurrentJoke] = useState(0)
  const [selectedPreviewPhoto, setSelectedPreviewPhoto] = useState<number | null>(null)
  
  const dashainJokes = [
    "When your friends think they're models but look like... this! 📸",
    "Dashain vibes: Looking good is optional, having fun is mandatory! 🎉",
    "These photos prove that friendship means never having to look good together! 😂",
    "Warning: These photos may cause uncontrollable laughter! 🤣",
    "Dashain 2024: Where every photo is a meme waiting to happen! 🎭"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentJoke((prev) => (prev + 1) % dashainJokes.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen">
      <FloatingElements />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold text-white mb-6"
            animate={{ 
              textShadow: [
                "0 0 20px #fbbf24",
                "0 0 40px #dc2626", 
                "0 0 20px #fbbf24"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            दशैं Fun Gallery! 🎉
          </motion.h1>
          
          <motion.div
            key={currentJoke}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-xl md:text-2xl text-yellow-200 mb-8 font-medium"
          >
            {dashainJokes[currentJoke]}
          </motion.div>

          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-6xl mb-8"
          >
            🪔
          </motion.div>

          {/* Hero Photos Component */}
          <HeroPhotos />
        </motion.div>
      </section>

      {/* Photo Gallery */}
      <PhotoGallery />
      
      {/* Meme Generator */}
      <div id="memes">
        <MemeGenerator />
      </div>
      
      {/* Roast Battle Arena */}
      <div id="battle">
        <RoastBattle />
      </div>
      
      {/* Photo Distortion Lab */}
      <div id="distort">
        <PhotoDistortion />
      </div>
      
      {/* Funny Caption Generator */}
      <div id="captions">
        <FunnyCaption />
      </div>
      
      {/* Footer */}
      <footer className="py-12 text-center">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white text-lg"
        >
          Made with ❤️ and lots of laughter during Dashain 2024! 
          <br />
          <span className="text-yellow-300">शुभ दशैं! 🙏</span>
        </motion.div>
      </footer>
    </main>
  )
}
