import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HoloGlobe from './HoloGlobe'
import PersonalInputModal from './PersonalInputModal'
import { generatePrediction } from '../utils/predictionEngine'

const CATEGORIES = [
    { id: 'GLOBAL_WEALTH', label: 'GLOBAL WEALTH', img: '/assets/cat-wealth.png' },
    { id: 'LIFE_EXTENSION', label: 'LIFE EXTENSION', img: '/assets/cat-life.png' },
    { id: 'WAR_PEACE', label: 'WAR & PEACE', img: '/assets/cat-war.png' },
    { id: 'OFF_WORLD', label: 'OFF-WORLD', img: '/assets/cat-space.png' },
    { id: 'YOUR_LEGACY', label: 'YOUR LEGACY', img: '/assets/cat-legacy.png' }
]

const TIERS = [
    { id: 'free', label: 'FREE' },
    { id: 'mid', label: 'PREMIUM' },
    { id: 'pro', label: 'ELITE' }
]

const Dashboard = () => {
    const [activeCategory, setActiveCategory] = useState(null)

    // 5-Year Logic Preserved
    const [year, setYear] = useState(2025)
    const [subscription, setSubscription] = useState('free')
    const [currentPrediction, setCurrentPrediction] = useState(null)
    const [showPersonalModal, setShowPersonalModal] = useState(false)
    const [userData, setUserData] = useState(null)
    const [isGenerating, setIsGenerating] = useState(false)

    const handleCategoryClick = (id) => {
        setActiveCategory(id)
        if (id === 'YOUR_LEGACY' && !userData) {
            setShowPersonalModal(true)
            return
        }
        generate(id, year, userData)
    }

    const handlePersonalSubmit = (data) => {
        setUserData(data)
        setShowPersonalModal(false)
        generate('YOUR_LEGACY', year, data)
    }

    const generate = (cat, yr, user) => {
        setIsGenerating(true)
        setCurrentPrediction(null)
        setTimeout(() => {
            const result = generatePrediction(cat, parseInt(yr), user, subscription)
            setCurrentPrediction(result)
            setIsGenerating(false)
        }, 800)
    }

    return (
        <div className="min-h-screen relative flex flex-col items-center overflow-x-hidden font-orbitron text-white selection:bg-accent selection:text-black">

            {/* Background with Image and Overlay */}
            <div className="fixed inset-0 z-0 bg-black">
                <img
                    src="/assets/bg-main.png"
                    alt="System Background"
                    className="w-full h-full object-cover opacity-40 mix-blend-screen"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
            </div>

            {/* GLOBAL HUD OVERLAY */}
            <div className="fixed inset-0 z-50 pointer-events-none">
                {/* Top Left Decoration */}
                <div className="absolute top-4 left-4 w-32 h-32 border-l-2 border-t-2 border-accent/30 rounded-tl-3xl"></div>
                <div className="absolute top-8 left-8 text-[10px] text-accent/50 font-mono">
                    SYSTEM_READY<br />Connected to Neural Net
                </div>

                {/* Top Right Decoration */}
                <div className="absolute top-4 right-4 w-32 h-32 border-r-2 border-t-2 border-accent/30 rounded-tr-3xl"></div>
                <div className="absolute top-8 right-8 text-[10px] text-accent/50 text-right font-mono">
                    SECURE_LINK // ENCRYPTED<br />v2.5.4
                </div>

                {/* Bottom Left Decoration */}
                <div className="absolute bottom-4 left-4 w-32 h-32 border-l-2 border-b-2 border-accent/30 rounded-bl-3xl"></div>

                {/* Bottom Right Decoration */}
                <div className="absolute bottom-4 right-4 w-32 h-32 border-r-2 border-b-2 border-accent/30 rounded-br-3xl"></div>
            </div>


            <AnimatePresence>
                {showPersonalModal && (
                    <PersonalInputModal
                        onSubmit={handlePersonalSubmit}
                        onClose={() => { setShowPersonalModal(false); setActiveCategory(null) }}
                    />
                )}
            </AnimatePresence>

            {/* Main Container */}
            <div className="relative z-10 w-full h-screen p-4 md:p-8 flex flex-col gap-6">

                {/* Top Controls: Year & Subscriptions - Glass HUD Style */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-2 bg-black/60 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] mx-4 md:mx-12 relative overflow-hidden group">
                    {/* Scanline effect inside panel */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:animate-[shimmer_2s_infinite]"></div>

                    <div className="flex items-center gap-6 w-full md:w-auto relative z-10">
                        <span className="text-accent text-[10px] tracking-[0.2em] font-bold">TARGET DATE</span>
                        <div className="flex flex-col flex-1">
                            <input
                                type="range"
                                min="2025"
                                max="2100"
                                step="5"
                                value={year}
                                onChange={(e) => {
                                    setYear(e.target.value)
                                    if (activeCategory) generate(activeCategory, e.target.value, userData)
                                }}
                                className="w-48 md:w-64 accent-accent"
                            />
                            <div className="flex justify-between text-[8px] text-accent/70 mt-1 font-mono tracking-widest">
                                <span>PRESENT</span>
                                <span>FAR FUTURE</span>
                            </div>
                        </div>
                        <span className="text-5xl font-black text-white neon-text drop-shadow-[0_0_10px_rgba(0,243,255,0.8)]">{year}</span>
                    </div>

                    <div className="flex gap-2 mt-4 md:mt-0 p-1 bg-black/50 rounded-lg border border-white/5 relative z-10">
                        {TIERS.map(tier => (
                            <button
                                key={tier.id}
                                onClick={() => {
                                    setSubscription(tier.id)
                                    if (activeCategory) generate(activeCategory, year, userData)
                                }}
                                className={`px-6 py-2 rounded-md text-[10px] font-bold tracking-widest transition-all duration-300 ${subscription === tier.id
                                        ? 'bg-accent text-black shadow-[0_0_20px_rgba(0,243,255,0.5)]'
                                        : 'text-gray-500 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {tier.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* 3-Column Layout */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-6 p-4">

                    {/* LEFT: Categories Cards Grid */}
                    <div className="md:col-span-3 lg:col-span-2 flex flex-col gap-4 overflow-y-auto custom-scrollbar pr-2">
                        <h3 className="text-[10px] text-accent/50 tracking-[0.4em] mb-2 uppercase">Data Streams</h3>
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => handleCategoryClick(cat.id)}
                                className={`relative group h-24 rounded-lg overflow-hidden border transition-all duration-500 hover:scale-105 ${activeCategory === cat.id
                                        ? 'border-accent shadow-[0_0_20px_rgba(0,243,255,0.4)]'
                                        : 'border-white/10 opacity-70 hover:opacity-100 hover:border-white/50'
                                    }`}
                            >
                                {/* Image background */}
                                <img src={cat.img} alt={cat.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                                {/* Dark gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                                {/* Label */}
                                <div className="absolute bottom-0 left-0 right-0 p-2">
                                    <span className={`text-[10px] font-bold tracking-widest block transition-colors ${activeCategory === cat.id ? 'text-accent' : 'text-white'}`}>
                                        {cat.label}
                                    </span>
                                </div>

                                {/* Active Indicator */}
                                {activeCategory === cat.id && (
                                    <div className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full animate-pulse shadow-[0_0_10px_#00f3ff]"></div>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* CENTER: The Globe & Visualization */}
                    <div className="md:col-span-9 lg:col-span-6 flex flex-col items-center justify-center relative perspective-container">
                        <div className={`transition-all duration-1000 relative z-10 ${isGenerating ? 'scale-125 brightness-150' : 'scale-100'}`}>
                            <HoloGlobe />
                        </div>

                        {/* Decorative rings around globe */}
                        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                            <div className="w-[500px] h-[500px] border border-accent/5 rounded-full animate-[spin_60s_linear_infinite]"></div>
                            <div className="w-[600px] h-[600px] border border-dashed border-accent/5 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
                        </div>

                        {!activeCategory && (
                            <div className="absolute bottom-20 flex flex-col items-center animate-pulse">
                                <span className="text-[10px] text-accent tracking-[0.5em] mb-2">AWAITING TARGET</span>
                                <div className="h-px w-24 bg-accent/50"></div>
                            </div>
                        )}
                    </div>

                    {/* RIGHT: Content Display */}
                    <div className="md:col-span-12 lg:col-span-4 flex items-center">
                        <div className="w-full h-full max-h-[600px] overflow-y-auto custom-scrollbar p-6 bg-black/80 backdrop-blur-2xl rounded-2xl border border-white/10 relative shadow-[0_0_50px_rgba(0,0,0,0.8)]">

                            {/* Decorative Header Line */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>

                            <AnimatePresence mode='wait'>
                                {currentPrediction ? (
                                    <motion.div key="result" initial={{ opacity: 0, filter: "blur(10px)" }} animate={{ opacity: 1, filter: "blur(0px)" }} className="space-y-6 relative z-10">
                                        <div className="flex flex-col gap-1 mb-6 border-b border-accent/20 pb-4">
                                            <div className="flex justify-between items-end">
                                                <span className="text-accent text-[9px] font-bold tracking-widest uppercase">Analysis // {activeCategory}</span>
                                                <div className="flex gap-1">
                                                    <div className="w-1 h-1 bg-accent rounded-full"></div>
                                                    <div className="w-1 h-1 bg-accent rounded-full opacity-50"></div>
                                                    <div className="w-1 h-1 bg-accent rounded-full opacity-25"></div>
                                                </div>
                                            </div>
                                            <span className="text-4xl font-bold text-white neon-text">{currentPrediction.year}</span>
                                        </div>

                                        <div className="space-y-6">
                                            <div className="relative p-4 rounded-lg bg-gradient-to-r from-accent/10 to-transparent border-l-2 border-accent overflow-hidden">
                                                <div className="absolute top-0 right-0 p-2 opacity-20 text-[60px]">❝</div>
                                                <h3 className="text-[10px] text-accent mb-2 tracking-widest uppercase font-bold">Executive Brief</h3>
                                                <p className="text-base leading-relaxed text-white drop-shadow-md font-sans">{currentPrediction.content.short}</p>
                                            </div>

                                            <div className={`p-4 bg-white/5 rounded-lg border-t border-white/10 ${subscription === 'free' ? 'blur-[3px] opacity-40 select-none grayscale' : 'border-accent/30'}`}>
                                                <h3 className="text-[10px] text-gray-400 mb-2 tracking-widest uppercase font-bold">Contextual Analysis</h3>
                                                <p className="text-xs leading-relaxed text-gray-300 font-mono">{currentPrediction.content.mid}</p>
                                            </div>

                                            <div className={`p-5 bg-black/60 rounded-lg border border-white/5 relative overflow-hidden ${subscription !== 'pro' ? 'blur-[6px] opacity-20 select-none grayscale' : ''}`}>
                                                {subscription === 'pro' && <div className="absolute top-0 left-0 w-full h-1 bg-purple-500 shadow-[0_0_10px_purple]"></div>}
                                                <h3 className="text-[10px] text-purple-400 mb-4 tracking-widest uppercase font-bold">Classified Deep Dive</h3>
                                                {currentPrediction.content.long.map((p, i) => (
                                                    <p key={i} className="text-xs mb-3 text-justify text-gray-300 font-light border-l border-purple-500/20 pl-3">{p}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <div className="h-full flex flex-col items-center justify-center text-gray-600 gap-4 opacity-50">
                                        <div className="w-20 h-20 border border-white/5 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
                                            <div className="w-16 h-16 border-t border-b border-accent/30 rounded-full"></div>
                                        </div>
                                        <p className="text-[10px] text-center max-w-[200px] font-mono tracking-widest text-accent">
                                   // SYSTEM IDLE<br />// AWAITING INPUT DATA
                                        </p>
                                    </div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Dashboard
