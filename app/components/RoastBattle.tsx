'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function RoastBattle() {
  const [currentBattle, setCurrentBattle] = useState(0)
  const [votes, setVotes] = useState<{[key: string]: number}>({})
  const [hasVoted, setHasVoted] = useState<{[key: string]: boolean}>({})
  const [showResults, setShowResults] = useState(false)
  const [battleTimer, setBattleTimer] = useState(10)
  const [isActive, setIsActive] = useState(false)

  const roastBattles = [
    {
      id: 'battle1',
      photo1: { src: '/photo1.jpeg', name: 'Sagar', roast: "Thinks he's a model but looks like he ordered confidence from Wish! 📦" },
      photo2: { src: '/photo2.jpeg', name: 'Priya', roast: "Said 'I woke up like this' and we absolutely believe it! 😴" }
    },
    {
      id: 'battle2',
      photo1: { src: '/photo3.jpeg', name: 'Ravi', roast: "Professional photographer's worst nightmare! 📸💀" },
      photo2: { src: '/photo4.jpeg', name: 'Anita', roast: "Serving looks that nobody ordered from the menu! 🍽️" }
    },
    {
      id: 'battle3',
      photo1: { src: '/photo5.jpeg', name: 'Bikash', roast: "When you're photogenic from one very specific angle... this ain't it! 📐" },
      photo2: { src: '/photo6.jpeg', name: 'Sunita', roast: "Main character energy but side character execution! 🎭" }
    },
    {
      id: 'battle4',
      photo1: { src: '/photo7.jpeg', name: 'Rajesh', roast: "The face that launched a thousand memes! 🚀" },
      photo2: { src: '/photo8.jpeg', name: 'Kamala', roast: "Confidence level: Overconfident. Reality check: Needed! ✅" }
    }
  ]

  const reactions = [
    "💀 DESTROYED!", "🔥 ROASTED!", "😂 DEAD!", "💯 SAVAGE!", "🎯 BULLSEYE!", 
    "⚡ OBLITERATED!", "🌶️ SPICY!", "💣 BOMBED!", "🎪 CLOWNED!", "👑 CROWNED!"
  ]

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isActive && battleTimer > 0) {
      interval = setInterval(() => {
        setBattleTimer(timer => timer - 1)
      }, 1000)
    } else if (battleTimer === 0) {
      setShowResults(true)
      setIsActive(false)
    }
    return () => clearInterval(interval)
  }, [isActive, battleTimer])

  const startBattle = () => {
    setIsActive(true)
    setBattleTimer(10)
    setShowResults(false)
    setHasVoted(prev => ({...prev, [roastBattles[currentBattle].id]: false}))
  }

  const vote = (contestant: 'photo1' | 'photo2') => {
    const battleId = roastBattles[currentBattle].id
    if (hasVoted[battleId]) return

    setVotes(prev => ({
      ...prev,
      [`${battleId}_${contestant}`]: (prev[`${battleId}_${contestant}`] || 0) + 1
    }))
    setHasVoted(prev => ({...prev, [battleId]: true}))
  }

  const nextBattle = () => {
    setCurrentBattle((prev) => (prev + 1) % roastBattles.length)
    setBattleTimer(10)
    setShowResults(false)
    setIsActive(false)
  }

  const battle = roastBattles[currentBattle]
  const photo1Votes = votes[`${battle.id}_photo1`] || 0
  const photo2Votes = votes[`${battle.id}_photo2`] || 0
  const totalVotes = photo1Votes + photo2Votes

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-red-900/50 to-orange-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-6xl font-bold text-white mb-6">
            ⚔️ ROAST BATTLE ARENA ⚔️
          </h2>
          <p className="text-2xl text-yellow-200 mb-8">
            Two friends enter, one gets absolutely DESTROYED! 💀
          </p>
          
          {/* Battle Timer */}
          <motion.div
            animate={{ scale: battleTimer <= 3 ? [1, 1.2, 1] : 1 }}
            transition={{ duration: 0.5, repeat: battleTimer <= 3 ? Infinity : 0 }}
            className={`text-4xl font-bold mb-8 ${
              battleTimer <= 3 ? 'text-red-400' : 'text-yellow-400'
            }`}
          >
            {isActive ? `⏰ ${battleTimer}s` : '🔥 READY TO BATTLE 🔥'}
          </motion.div>
        </motion.div>

        {/* Battle Arena */}
        <div className="relative">
          {/* VS Symbol */}
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity }
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <div className="bg-yellow-400 text-black text-4xl font-bold px-6 py-3 rounded-full border-4 border-white shadow-2xl">
              VS
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contestant 1 */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-6 shadow-2xl">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={battle.photo1.src}
                    alt={battle.photo1.name}
                    className="w-full h-80 object-cover"
                  />
                  
                  {/* Corner Badge */}
                  <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full font-bold">
                    FIGHTER 1
                  </div>

                  {/* Vote Count */}
                  {showResults && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-full font-bold"
                    >
                      {photo1Votes} votes
                    </motion.div>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{battle.photo1.name}</h3>
                <p className="text-yellow-200 text-lg mb-6">{battle.photo1.roast}</p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => vote('photo1')}
                  disabled={hasVoted[battle.id] || !isActive}
                  className={`w-full py-3 rounded-xl font-bold text-lg transition-all ${
                    hasVoted[battle.id] || !isActive
                      ? 'bg-gray-500 cursor-not-allowed'
                      : 'bg-yellow-400 hover:bg-yellow-300 text-black'
                  }`}
                >
                  {hasVoted[battle.id] ? '✅ VOTED!' : '👊 VOTE FOR THIS ROAST!'}
                </motion.button>

                {/* Results Bar */}
                {showResults && totalVotes > 0 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(photo1Votes / totalVotes) * 100}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-4 h-4 bg-yellow-400 rounded-full"
                  />
                )}
              </div>

              {/* Winner Crown */}
              {showResults && photo1Votes > photo2Votes && totalVotes > 0 && (
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-6xl"
                >
                  👑
                </motion.div>
              )}
            </motion.div>

            {/* Contestant 2 */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 shadow-2xl">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={battle.photo2.src}
                    alt={battle.photo2.name}
                    className="w-full h-80 object-cover"
                  />
                  
                  {/* Corner Badge */}
                  <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full font-bold">
                    FIGHTER 2
                  </div>

                  {/* Vote Count */}
                  {showResults && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-4 left-4 bg-white text-black px-3 py-1 rounded-full font-bold"
                    >
                      {photo2Votes} votes
                    </motion.div>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{battle.photo2.name}</h3>
                <p className="text-yellow-200 text-lg mb-6">{battle.photo2.roast}</p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => vote('photo2')}
                  disabled={hasVoted[battle.id] || !isActive}
                  className={`w-full py-3 rounded-xl font-bold text-lg transition-all ${
                    hasVoted[battle.id] || !isActive
                      ? 'bg-gray-500 cursor-not-allowed'
                      : 'bg-yellow-400 hover:bg-yellow-300 text-black'
                  }`}
                >
                  {hasVoted[battle.id] ? '✅ VOTED!' : '👊 VOTE FOR THIS ROAST!'}
                </motion.button>

                {/* Results Bar */}
                {showResults && totalVotes > 0 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(photo2Votes / totalVotes) * 100}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-4 h-4 bg-yellow-400 rounded-full"
                  />
                )}
              </div>

              {/* Winner Crown */}
              {showResults && photo2Votes > photo1Votes && totalVotes > 0 && (
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-6xl"
                >
                  👑
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Battle Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-12 space-y-6"
        >
          {!isActive && !showResults && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={startBattle}
              className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-xl shadow-lg"
            >
              🔥 START THE BATTLE! 🔥
            </motion.button>
          )}

          {showResults && (
            <div className="space-y-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-4xl"
              >
                {reactions[Math.floor(Math.random() * reactions.length)]}
              </motion.div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextBattle}
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-xl shadow-lg"
              >
                ⚔️ NEXT BATTLE! ⚔️
              </motion.button>
            </div>
          )}

          {/* Battle Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold text-yellow-400">Battle #{currentBattle + 1}</div>
              <div className="text-white">Current Round</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold text-yellow-400">{totalVotes}</div>
              <div className="text-white">Total Votes</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold text-yellow-400">
                {showResults ? (photo1Votes === photo2Votes ? 'TIE' : (photo1Votes > photo2Votes ? battle.photo1.name : battle.photo2.name)) : '???'}
              </div>
              <div className="text-white">Winner</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold text-yellow-400">💀</div>
              <div className="text-white">Destruction Level</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
