import { motion } from 'framer-motion'

const Hero = ({ onEnter }) => {
    return (
        <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden font-orbitron text-white">

            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0 bg-black">
                <img
                    src="/assets/bg-main.png"
                    alt="Background"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80"></div>
                {/* Cinematic Grain */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 brightness-100 contrast-150 mix-blend-overlay"></div>
            </div>

            {/* Decorative Grid Plane */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0 animate-pulse-fast transform perspective-1000 rotate-x-60 scale-150 origin-bottom"></div>

            {/* Content */}
            <div className="relative z-10 text-center space-y-8 p-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="relative"
                >
                    {/* Glowing Aura */}
                    <div className="absolute -inset-20 bg-accent/20 blur-[100px] rounded-full -z-10 animate-pulse"></div>

                    <h2 className="text-accent text-xs md:text-sm tracking-[1em] mb-8 uppercase font-bold drop-shadow-[0_0_10px_rgba(0,243,255,0.8)]">
                        Temporal Intelligence Unit
                    </h2>

                    <h1 className="text-6xl md:text-9xl font-black text-white mix-blend-screen leading-tight">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">DECODE</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent animate-[pulse_5s_infinite] drop-shadow-[0_0_20px_rgba(0,243,255,0.8)]">TOMORROW</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <div className="max-w-xl mx-auto backdrop-blur-sm bg-black/30 p-6 rounded-xl border border-white/5">
                        <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-mono text-justify tracking-wide opacity-80">
                // SYSTEM_STATUS: ONLINE<br />
                // QUANTUM_SIMULATION: READY<br />
                // SELECT_PROTOCOL: PREDICTION_MODE
                        </p>
                    </div>
                </motion.div>

                <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(0, 243, 255, 0.6)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onEnter}
                    className="group relative px-20 py-6 bg-transparent border-2 border-accent text-accent font-black tracking-[0.3em] overflow-hidden transition-all duration-300 rounded-sm"
                >
                    <span className="relative z-10 group-hover:text-black transition-colors duration-300">INITIATE SYSTEM</span>
                    <div className="absolute inset-0 h-full w-full bg-accent transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300"></div>

                    {/* Button Glow */}
                    <div className="absolute inset-0 blur-lg bg-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
            </div>

            {/* Decorative Footer */}
            <div className="absolute bottom-8 w-full text-center flex justify-center gap-12 text-[9px] text-gray-500 font-mono tracking-[0.2em] uppercase">
                <span>Latency: 12ms</span>
                <span>Encryption: AES-4096</span>
                <span>Node: EU-Central-1</span>
            </div>
        </div>
    )
}

export default Hero
