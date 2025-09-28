'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PhotoDistortion() {
  const [selectedPhoto, setSelectedPhoto] = useState(1)
  const [currentEffect, setCurrentEffect] = useState('normal')
  const [isAnimating, setIsAnimating] = useState(false)
  const [autoPlay, setAutoPlay] = useState(false)

  const distortionEffects = [
    { 
      name: 'Normal', 
      value: 'normal', 
      style: 'transform: none; filter: none;',
      description: 'Just your regular, unfiltered disappointment 😅'
    },
    { 
      name: 'Funhouse Mirror', 
      value: 'funhouse', 
      style: 'transform: scaleX(1.5) scaleY(0.7); filter: none;',
      description: 'When you look in the mirror at 3 AM 🪞'
    },
    { 
      name: 'Squish Mode', 
      value: 'squish', 
      style: 'transform: scaleY(0.5) scaleX(1.2); filter: none;',
      description: 'Compressed like your self-esteem 📱'
    },
    { 
      name: 'Stretch Armstrong', 
      value: 'stretch', 
      style: 'transform: scaleY(1.5) scaleX(0.8); filter: none;',
      description: 'Tall tales and taller faces 📏'
    },
    { 
      name: 'Wobble Vision', 
      value: 'wobble', 
      style: 'transform: perspective(400px) rotateY(15deg); filter: none;',
      description: 'When reality starts to question itself 🌀'
    },
    { 
      name: 'Alien Mode', 
      value: 'alien', 
      style: 'transform: scaleX(0.6) scaleY(1.3); filter: hue-rotate(120deg) saturate(2);',
      description: 'Take me to your leader... or not 👽'
    },
    { 
      name: 'Melting Face', 
      value: 'melt', 
      style: 'transform: perspective(400px) rotateX(15deg) skewY(5deg); filter: blur(1px);',
      description: 'When the heat gets too real 🫠'
    },
    { 
      name: 'Cartoon Mode', 
      value: 'cartoon', 
      style: 'transform: none; filter: contrast(1.5) saturate(2) brightness(1.2);',
      description: 'Disney called, they want their character back 🎨'
    },
    { 
      name: 'Nightmare Fuel', 
      value: 'nightmare', 
      style: 'transform: scaleX(1.2) skewX(-10deg); filter: invert(1) contrast(2) hue-rotate(180deg);',
      description: 'Sleep is overrated anyway 😱'
    },
    { 
      name: 'Glitch Matrix', 
      value: 'glitch', 
      style: 'transform: none; filter: contrast(2) saturate(0) brightness(1.5);',
      description: 'Error 404: Good looks not found 🤖'
    }
  ]

  const funnyReactions = [
    "💀 WHAT HAVE YOU DONE?!",
    "😂 I CAN'T BREATHE!",
    "🤡 CERTIFIED CLOWN MOMENT!",
    "👻 HAUNTED PHOTO ALERT!",
    "🎪 CIRCUS VIBES ACTIVATED!",
    "🫠 MELTING FROM LAUGHTER!",
    "🤖 SYSTEM ERROR: TOO FUNNY!",
    "👽 ALIEN INVASION DETECTED!",
    "🎭 COMEDY GOLD ACHIEVED!",
    "💥 MIND = BLOWN!"
  ]

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (autoPlay) {
      interval = setInterval(() => {
        const randomEffect = distortionEffects[Math.floor(Math.random() * distortionEffects.length)]
        setCurrentEffect(randomEffect.value)
        setIsAnimating(true)
        setTimeout(() => setIsAnimating(false), 500)
      }, 2000)
    }
    return () => clearInterval(interval)
  }, [autoPlay])

  const applyEffect = (effectValue: string) => {
    setCurrentEffect(effectValue)
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const randomizeEverything = () => {
    const randomPhoto = Math.floor(Math.random() * 9) + 1
    const randomEffect = distortionEffects[Math.floor(Math.random() * distortionEffects.length)]
    
    setSelectedPhoto(randomPhoto)
    setCurrentEffect(randomEffect.value)
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 800)
  }

  const currentEffectData = distortionEffects.find(e => e.value === currentEffect) || distortionEffects[0]

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-indigo-900/50 to-purple-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            🎪 PHOTO DISTORTION LAB 🎪
          </h2>
          <p className="text-xl text-yellow-200 mb-8">
            Transform your friends into abstract art! Warning: May cause uncontrollable giggling! 🎨
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Photo Display */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <div className="relative overflow-hidden rounded-xl bg-gray-100">
                <motion.img
                  key={`${selectedPhoto}-${currentEffect}`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  src={`/photo${selectedPhoto}.jpeg`}
                  alt={`Distorted photo ${selectedPhoto}`}
                  className="w-full h-96 object-cover transition-all duration-500"
                  style={{
                    transform: currentEffect === 'funhouse' ? 'scaleX(1.5) scaleY(0.7)' :
                              currentEffect === 'squish' ? 'scaleY(0.5) scaleX(1.2)' :
                              currentEffect === 'stretch' ? 'scaleY(1.5) scaleX(0.8)' :
                              currentEffect === 'wobble' ? 'perspective(400px) rotateY(15deg)' :
                              currentEffect === 'alien' ? 'scaleX(0.6) scaleY(1.3)' :
                              currentEffect === 'melt' ? 'perspective(400px) rotateX(15deg) skewY(5deg)' :
                              currentEffect === 'nightmare' ? 'scaleX(1.2) skewX(-10deg)' :
                              'none',
                    filter: currentEffect === 'alien' ? 'hue-rotate(120deg) saturate(2)' :
                           currentEffect === 'melt' ? 'blur(1px)' :
                           currentEffect === 'cartoon' ? 'contrast(1.5) saturate(2) brightness(1.2)' :
                           currentEffect === 'nightmare' ? 'invert(1) contrast(2) hue-rotate(180deg)' :
                           currentEffect === 'glitch' ? 'contrast(2) saturate(0) brightness(1.5)' :
                           'none'
                  }}
                />

                {/* Effect Label */}
                <div className="absolute top-4 left-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {currentEffectData.name}
                </div>

                {/* Reaction Overlay */}
                <AnimatePresence>
                  {isAnimating && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      className="absolute inset-0 bg-black/50 flex items-center justify-center"
                    >
                      <div className="text-4xl font-bold text-white text-center">
                        {funnyReactions[Math.floor(Math.random() * funnyReactions.length)]}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Effect Description */}
              <div className="mt-4 text-center">
                <p className="text-gray-700 font-medium">
                  {currentEffectData.description}
                </p>
              </div>
            </div>

            {/* Auto Play Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setAutoPlay(!autoPlay)}
              className={`mt-4 w-full py-3 rounded-xl font-bold text-lg transition-all ${
                autoPlay 
                  ? 'bg-red-500 hover:bg-red-600 text-white' 
                  : 'bg-green-500 hover:bg-green-600 text-white'
              }`}
            >
              {autoPlay ? '⏹️ STOP AUTO CHAOS' : '▶️ AUTO CHAOS MODE'}
            </motion.button>
          </motion.div>

          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Photo Selector */}
            <div>
              <label className="block text-white font-bold mb-3">Choose Your Victim 😈</label>
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((photoNum) => (
                  <motion.button
                    key={photoNum}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedPhoto(photoNum)}
                    className={`relative overflow-hidden rounded-lg border-3 transition-all ${
                      selectedPhoto === photoNum 
                        ? 'border-yellow-400 ring-4 ring-yellow-400/50' 
                        : 'border-white/30 hover:border-white/60'
                    }`}
                  >
                    <img
                      src={`/photo${photoNum}.jpeg`}
                      alt={`Photo ${photoNum}`}
                      className="w-full h-16 object-cover"
                    />
                    {selectedPhoto === photoNum && (
                      <div className="absolute inset-0 bg-yellow-400/30 flex items-center justify-center">
                        <span className="text-2xl">🎯</span>
                      </div>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Effect Buttons */}
            <div>
              <label className="block text-white font-bold mb-3">Distortion Effects 🎭</label>
              <div className="grid grid-cols-2 gap-3 max-h-80 overflow-y-auto">
                {distortionEffects.map((effect) => (
                  <motion.button
                    key={effect.value}
                    whileHover={{ scale: 1.02, rotate: 1 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => applyEffect(effect.value)}
                    className={`p-3 rounded-lg font-medium text-left transition-all ${
                      currentEffect === effect.value
                        ? 'bg-yellow-400 text-black'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    <div className="font-bold">{effect.name}</div>
                    <div className="text-xs opacity-80 mt-1">
                      {effect.description.split(' ').slice(0, 4).join(' ')}...
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Random Button */}
            <motion.button
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              onClick={randomizeEverything}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg"
            >
              🎲 RANDOM CHAOS GENERATOR! 🎲
            </motion.button>

            {/* Fun Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-yellow-400">∞</div>
                <div className="text-white text-sm">Possibilities</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-yellow-400">100%</div>
                <div className="text-white text-sm">Hilarity Rate</div>
              </div>
            </div>

            {/* Share Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                if (typeof window !== 'undefined' && navigator.share) {
                  navigator.share({
                    title: 'Check out this hilarious photo distortion!',
                    text: `I just turned my friend into ${currentEffectData.name}! 😂`,
                    url: window.location.href
                  })
                }
              }}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-bold transition-colors"
            >
              📱 Share This Masterpiece!
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
