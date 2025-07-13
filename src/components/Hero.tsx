import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

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
                <span className="text-yellow-400">US$7 Billion</span> Blockchain
                Fees Market
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
            <img
              src={"https://images.eqlzr.xyz/gasFi.png"}
              alt="GasFi"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl xl:max-w-xl h-auto"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
