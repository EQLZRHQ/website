import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Fuel, BarChart3, Banknote } from 'lucide-react';

import { features } from '../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const iconComponents = {
  Layers,
  Fuel,
  BarChart3,
  Banknote,
  
};

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(1);

  return (
    <section id="features" className="py-24 bg-zinc-800 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-yellow-400">Revolutionary</span> Features
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            EQLZR combines cutting-edge technology with innovative financial primitives to create a truly next-generation DEX experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const IconComponent = iconComponents[feature.icon as keyof typeof iconComponents];
            
            return (
              <motion.div
                key={feature.id}
                className={`p-6 rounded-xl transition-all duration-300 cursor-pointer ${
                  activeFeature === feature.id 
                    ? 'bg-yellow-400/10 border border-yellow-400' 
                    : 'bg-zinc-700/50 hover:bg-zinc-700 border border-transparent'
                }`}
                onClick={() => setActiveFeature(feature.id)}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: feature.id * 0.1 }}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className={`p-3 rounded-lg inline-block ${
                      activeFeature === feature.id ? 'bg-yellow-400 text-zinc-900' : 'bg-zinc-600'
                    }`}>
                      {/* <IconComponent className="h-6 w-6" /> */}
                      <FontAwesomeIcon icon={feature?.icon} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 flex-grow">{feature.description}</p>
                  {/* <div className={`text-sm font-semibold px-3 py-1 rounded-full inline-block ${
                    activeFeature === feature.id ? 'bg-yellow-400 text-zinc-900' : 'bg-zinc-600/50 text-gray-300'
                  }`}>
                    {feature.metric}
                  </div> */}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold text-zinc-900 mb-2">Ready to experience the future of DeFi?</h3>
              <p className="text-zinc-800">Join EQLZR today and start trading with unprecedented efficiency.</p>
            </div>
            <a 
              href="https://app.eqlzr.xyz/"
              className="bg-zinc-900 hover:bg-zinc-800 text-white font-semibold px-8 py-3 rounded-md transition-colors duration-300 inline-block whitespace-nowrap"
            >
              Launch App
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;