import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

// Import framer-motion
const Hero = () => {
  return (
    <section className="pt-24 bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-800 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-yellow-400">EQLZR</span>
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-3xl font-medium mb-8 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Cross-chain Risk-Neutral DEX
            </motion.p>
            <motion.div 
              className="space-y-2 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-3xl md:text-4xl font-semibold">
                Introducing <span className="text-yellow-400">GasFi</span>
              </p>
              <p className="text-3xl d:text-4xl font-semibold text-gray-300">
                a new DeFi Primitive
              </p>
              <p className="text-3xl d:text-4xl font-semibold text-gray-300">
                to unlock the
              </p>
              <p className="text-2xl md:text-3xl font-semibold">
                <span className="text-yellow-400">US$7 Billion</span> Blockchain Fees Market
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a 
                href="#features" 
                className="inline-flex items-center text-yellow-400 font-medium hover:text-yellow-300 transition-colors"
              >
                Discover More <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
          </div>

          {/* Circular Graphic */}
          <motion.div 
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-yellow-400/10 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-yellow-400/30 animate-pulse"></div>
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-yellow-400/20 flex items-center justify-center">
                <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-yellow-400/30 flex items-center justify-center">
                  <div className="w-24 h-24 md:w-40 md:h-40 rounded-full bg-yellow-400 flex items-center justify-center text-zinc-900 font-bold text-xl md:text-3xl">
                    GasFi
                  </div>
                </div>
              </div>
            </div> */}
            
            {/* Orbiting elements */}
            {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-zinc-800 rounded-full border border-yellow-400/30 text-sm text-yellow-400">
              Ethereum
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 px-4 py-2 bg-zinc-800 rounded-full border border-yellow-400/30 text-sm text-yellow-400">
              Solana
            </div>
            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-zinc-800 rounded-full border border-yellow-400/30 text-sm text-yellow-400">
              Polygon
            </div>
            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-zinc-800 rounded-full border border-yellow-400/30 text-sm text-yellow-400">
              Arbitrum
            </div> */}
            <img src={"https://images.eqlzr.xyz/gasFi.png"} alt="GasFi" className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl xl:max-w-xl h-auto" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;