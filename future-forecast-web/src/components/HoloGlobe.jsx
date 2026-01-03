import { motion } from 'framer-motion'

const HoloGlobe = () => {
    return (
        <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center perspective-1000">

            {/* Core Glow */}
            <div className="absolute inset-0 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>

            {/* 3D Structure Container */}
            <div className="relative w-full h-full transform-style-3d animate-[spin-slow_20s_linear_infinite]">

                {/* Ring 1: Equatorial */}
                <div className="absolute inset-0 rounded-full border border-accent/40 box-shadow-glow transform rotate-x-70"></div>

                {/* Ring 2: Meridian */}
                <div className="absolute inset-2 rounded-full border border-accent/20 border-dashed transform rotate-y-45 animate-[spin_10s_linear_infinite]"></div>

                {/* Ring 3: Offset Gyro */}
                <div className="absolute inset-4 rounded-full border border-white/10 transform rotate-x-45 rotate-z-45 animate-[spin_15s_linear_infinite_reverse]"></div>

                {/* Ring 4: Vertical Scanner relative to container */}
                <div className="absolute inset-0 rounded-full border-l border-r border-accent/60 transform rotate-y-90"></div>

                {/* Central Core */}
                <div className="absolute top-1/2 left-1/2 w-16 h-16 -ml-8 -mt-8 bg-accent/20 rounded-full backdrop-blur-md shadow-[0_0_30px_#00f3ff] animate-pulse"></div>

                {/* Floating Particles (Simulated) */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
                <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-accent rounded-full animate-ping animation-delay-500"></div>

            </div>

            {/* Static Overlay Grid */}
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(transparent_50%,rgba(0,243,255,0.05))] z-10 pointer-events-none"></div>

        </div>
    )
}

export default HoloGlobe
