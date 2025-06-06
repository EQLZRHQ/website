import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Plus, Minus } from 'lucide-react';
import { mobileAppSteps } from '../data';

const MobileAppDemo = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [expandedStep, setExpandedStep] = useState(1);

  const nextStep = () => {
    setCurrentStep((prev) => (prev === mobileAppSteps.length ? 1 : prev + 1));
    setExpandedStep((prev) => (prev === mobileAppSteps.length ? 1 : prev + 1));
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev === 1 ? mobileAppSteps.length : prev - 1));
    setExpandedStep((prev) => (prev === 1 ? mobileAppSteps.length : prev - 1));
  };

  const toggleExpand = (id: number) => {
    setExpandedStep(expandedStep === id ? 0 : id);
    setCurrentStep(expandedStep === id ? 0 : id);
  };

  return (
    <section id="app-demo" className="py-24 bg-gradient-to-b from-zinc-800 to-zinc-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-yellow-400">Seamless</span> User Experience
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our intuitive mobile app makes cross-chain trading accessible to everyone. See how it works in just a few simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mobile App Screenshots */}
          <div className="relative flex justify-center">
            <div className="relative w-72 h-[600px] bg-zinc-700 rounded-[10px] shadow-2xl overflow-hidden">

              {/* Screen content */}
              <div className="w-full h-full overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  >
                    <img 
                      src={mobileAppSteps[currentStep - 1].image} 
                      alt={`Step ${currentStep}`} 
                      className="w-full h-full object-contain"
                    />
                    {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-900 p-4">
                      <p className="text-white font-medium text-center">
                        Step {currentStep}: {mobileAppSteps[currentStep - 1].title}
                      </p>
                    </div> */}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            
            {/* Navigation controls */}
            <button 
              onClick={prevStep}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-yellow-400 hover:bg-yellow-300 text-zinc-900 p-2 rounded-full shadow-lg transition-colors duration-300"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={nextStep}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-yellow-400 hover:bg-yellow-300 text-zinc-900 p-2 rounded-full shadow-lg transition-colors duration-300"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Steps Explanation */}
          <div className="space-y-4">
            {mobileAppSteps.map((step) => (
              <motion.div 
                key={step.id}
                className={`border rounded-lg overflow-hidden transition-all duration-300 ${
                  expandedStep === step.id 
                    ? 'border-yellow-400 bg-yellow-400/10' 
                    : 'border-zinc-700 bg-zinc-800/50'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: step.id * 0.1 }}
              >
                <div 
                  className="flex justify-between items-center p-4 cursor-pointer"
                  onClick={() => toggleExpand(step.id)}
                >
                  <div className="flex items-center">
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full mr-3 ${
                      expandedStep === step.id ? 'bg-yellow-400 text-zinc-900' : 'bg-zinc-700 text-gray-300'
                    }`}>
                      {step.id}
                    </div>
                    <h3 className="font-semibold text-lg">{step.title}</h3>
                  </div>
                  <button className="text-gray-400">
                    {expandedStep === step.id ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </button>
                </div>
                <AnimatePresence>
                  {expandedStep === step.id && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4">
                        <p className="text-gray-300">{step.description}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
            
            <div className="pt-6">
              <a 
                href="https://app.eqlzr.xyz/"
                className="inline-flex items-center bg-yellow-400 hover:bg-yellow-300 text-zinc-900 font-semibold px-6 py-3 rounded-md transition-colors duration-300"
              >
                Launch App
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppDemo;