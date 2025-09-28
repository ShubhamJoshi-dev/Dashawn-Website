'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function MemeGenerator() {
  const [selectedPhoto, setSelectedPhoto] = useState(1)
  const [topText, setTopText] = useState('')
  const [bottomText, setBottomText] = useState('')
  const [memeStyle, setMemeStyle] = useState('classic')
  const [isGenerating, setIsGenerating] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const funnyTemplates = [
    { top: "WHEN YOU THINK", bottom: "YOU LOOK GOOD" },
    { top: "EXPECTATION", bottom: "VS REALITY" },
    { top: "DASHAIN VIBES", bottom: "BUT MAKE IT CRINGE" },
    { top: "PHOTOGRAPHER:", bottom: "\"JUST BE NATURAL\"" },
    { top: "MOM: \"YOU LOOK HANDSOME\"", bottom: "THE CAMERA:" },
    { top: "TRYING TO LOOK COOL", bottom: "MISSION FAILED" },
    { top: "WHEN THE CAMERA", bottom: "ADDS 10 POUNDS" },
    { top: "CONFIDENCE LEVEL:", bottom: "OVERCONFIDENT" },
    { top: "DASHAIN GLOW UP?", bottom: "MORE LIKE SHOW UP" },
    { top: "WHEN YOU REALIZE", bottom: "THIS IS GOING ONLINE" }
  ]

  const memeStyles = [
    { name: 'Classic', value: 'classic', filter: 'none' },
    { name: 'Deep Fried', value: 'deepfried', filter: 'contrast(2) saturate(3) brightness(1.5)' },
    { name: 'Vintage Cringe', value: 'vintage', filter: 'sepia(1) contrast(1.5)' },
    { name: 'Nightmare Mode', value: 'nightmare', filter: 'invert(1) hue-rotate(180deg) saturate(2)' },
    { name: 'Glow Up Fail', value: 'glow', filter: 'brightness(2) blur(1px) saturate(2)' }
  ]

  const generateRandomMeme = () => {
    setIsGenerating(true)
    const randomTemplate = funnyTemplates[Math.floor(Math.random() * funnyTemplates.length)]
    const randomPhoto = Math.floor(Math.random() * 9) + 1
    const randomStyle = memeStyles[Math.floor(Math.random() * memeStyles.length)]
    
    setTimeout(() => {
      setTopText(randomTemplate.top)
      setBottomText(randomTemplate.bottom)
      setSelectedPhoto(randomPhoto)
      setMemeStyle(randomStyle.value)
      setIsGenerating(false)
    }, 1000)
  }

  const downloadMeme = () => {
    // Simple download functionality
    const link = document.createElement('a')
    link.download = `dashain-meme-${selectedPhoto}.png`
    link.href = `/photo${selectedPhoto}.jpeg`
    link.click()
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            🎭 MEME GENERATOR SUPREME 🎭
          </h2>
          <p className="text-xl text-yellow-200 mb-8">
            Turn your friends into legendary memes! Warning: May cause permanent embarrassment! 😂
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Meme Preview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl p-4 shadow-2xl">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={`/photo${selectedPhoto}.jpeg`}
                  alt={`Meme ${selectedPhoto}`}
                  className="w-full h-80 object-cover"
                  style={{
                    filter: memeStyles.find(s => s.value === memeStyle)?.filter || 'none'
                  }}
                />
                
                {/* Top Text */}
                {topText && (
                  <div className="absolute top-4 left-4 right-4">
                    <div className="bg-black/70 text-white text-center py-2 px-4 rounded-lg">
                      <span className="font-bold text-lg uppercase tracking-wide">
                        {topText}
                      </span>
                    </div>
                  </div>
                )}
                
                {/* Bottom Text */}
                {bottomText && (
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/70 text-white text-center py-2 px-4 rounded-lg">
                      <span className="font-bold text-lg uppercase tracking-wide">
                        {bottomText}
                      </span>
                    </div>
                  </div>
                )}

                {/* Watermark */}
                <div className="absolute top-2 right-2 bg-yellow-400 text-black px-2 py-1 rounded text-xs font-bold">
                  DASHAIN MEMES
                </div>
              </div>
            </div>

            {/* Download Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadMeme}
              className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-bold text-lg transition-colors"
            >
              📥 Download This Masterpiece!
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
                    whileHover={{ scale: 1.1 }}
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
                        <span className="text-2xl">👑</span>
                      </div>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Text Inputs */}
            <div>
              <label className="block text-white font-bold mb-2">Top Text (Roast Level: MAX)</label>
              <input
                type="text"
                value={topText}
                onChange={(e) => setTopText(e.target.value.toUpperCase())}
                placeholder="WHEN YOU THINK..."
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:border-yellow-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-white font-bold mb-2">Bottom Text (Destruction Level: MAXIMUM)</label>
              <input
                type="text"
                value={bottomText}
                onChange={(e) => setBottomText(e.target.value.toUpperCase())}
                placeholder="YOU LOOK GOOD"
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:border-yellow-400 focus:outline-none"
              />
            </div>

            {/* Style Selector */}
            <div>
              <label className="block text-white font-bold mb-3">Meme Style (Choose Your Weapon)</label>
              <div className="grid grid-cols-2 gap-2">
                {memeStyles.map((style) => (
                  <motion.button
                    key={style.value}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setMemeStyle(style.value)}
                    className={`p-3 rounded-lg font-medium transition-all ${
                      memeStyle === style.value
                        ? 'bg-yellow-400 text-black'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    {style.name}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Random Generator */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={generateRandomMeme}
              disabled={isGenerating}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
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
                  🎲
                </motion.div>
              ) : (
                "🎲 RANDOM ROAST GENERATOR! 🔥"
              )}
            </motion.button>

            {/* Preset Templates */}
            <div>
              <label className="block text-white font-bold mb-3">Quick Roast Templates 💀</label>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {funnyTemplates.slice(0, 5).map((template, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02, x: 5 }}
                    onClick={() => {
                      setTopText(template.top)
                      setBottomText(template.bottom)
                    }}
                    className="w-full text-left p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm transition-all"
                  >
                    "{template.top}" / "{template.bottom}"
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
