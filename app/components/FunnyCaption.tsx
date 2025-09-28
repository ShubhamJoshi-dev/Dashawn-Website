'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function FunnyCaption() {
  const [currentCaption, setCurrentCaption] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const funnyTemplates = [
    "When {friend} thinks they're a model but they're actually a meme! 📸",
    "{friend} said 'trust me, this will look good' - narrator: it did not look good! 😂",
    "POV: {friend} discovers the front camera exists! 🤳",
    "This is {friend}'s villain origin story! 🦹‍♂️",
    "{friend} serving looks that nobody ordered! 🍽️",
    "When {friend} said 'I'm photogenic' but the camera said 'bet'! 📷",
    "{friend}: Professional model ❌ Professional meme ✅",
    "The confidence {friend} has vs what we see in this photo! 📊",
    "{friend} really said 'let me pose' and chose chaos! 🎭",
    "This photo of {friend} has 'main character energy' but side character execution! 🎬"
  ]

  const friendNames = [
    "Sagar", "Priya", "Ravi", "Anita", "Bikash", "Sunita", "Rajesh", "Kamala", 
    "Dipesh", "Shreya", "Nabin", "Pooja", "Suresh", "Mina", "Kiran"
  ]

  const generateCaption = () => {
    setIsGenerating(true)
    
    setTimeout(() => {
      const randomTemplate = funnyTemplates[Math.floor(Math.random() * funnyTemplates.length)]
      const randomFriend = friendNames[Math.floor(Math.random() * friendNames.length)]
      const newCaption = randomTemplate.replace('{friend}', randomFriend)
      setCurrentCaption(newCaption)
      setIsGenerating(false)
    }, 1500)
  }

  return (
    <section id="fun-facts" className="py-20 px-4 bg-black/20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-8">
            🎭 Roast Caption Generator 🎭
          </h2>
          <p className="text-xl text-yellow-200 mb-12">
            Need the perfect caption to roast your friends? We got you covered! 😈
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={generateCaption}
            disabled={isGenerating}
            className={`px-8 py-4 rounded-full text-xl font-bold transition-all ${
              isGenerating 
                ? 'bg-gray-500 cursor-not-allowed' 
                : 'bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600'
            } text-white shadow-lg`}
          >
            {isGenerating ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="inline-block"
              >
                ⚡
              </motion.div>
            ) : (
              "Generate Roast Caption! 🔥"
            )}
          </motion.button>

          {/* Caption Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: currentCaption ? 1 : 0, scale: currentCaption ? 1 : 0.8 }}
            transition={{ duration: 0.5 }}
            className="mt-12"
          >
            {currentCaption && (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl text-white font-medium mb-6"
                >
                  {currentCaption}
                </motion.p>
                
                <div className="flex justify-center space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      if (typeof window !== 'undefined' && navigator.clipboard) {
                        navigator.clipboard.writeText(currentCaption)
                      }
                    }}
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium transition-colors"
                  >
                    📋 Copy Caption
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={generateCaption}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-medium transition-colors"
                  >
                    🎲 Generate Another
                  </motion.button>
                </div>
              </div>
            )}
          </motion.div>

          {/* Fun Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { emoji: "📸", number: "9", label: "Hilarious Photos" },
              { emoji: "😂", number: "∞", label: "Laughs Generated" },
              { emoji: "🔥", number: "100%", label: "Roast Success Rate" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="text-4xl mb-2">{stat.emoji}</div>
                <div className="text-3xl font-bold text-yellow-400 mb-1">{stat.number}</div>
                <div className="text-white">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
