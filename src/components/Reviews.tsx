import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Quote } from 'lucide-react';
import { reviews } from '../data';

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section id="reviews" className="py-24 bg-zinc-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What <span className="text-yellow-400">Experts</span> Say
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Industry leaders recognize the revolutionary potential of EQLZR's approach to cross-chain trading.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -top-12 left-8 text-yellow-400/20">
            <Quote size={80} />
          </div>

          <div className="relative z-10 overflow-hidden rounded-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="p-8 bg-zinc-800 rounded-xl"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-yellow-400/30">
                      <img 
                        src={reviews[currentIndex].image} 
                        alt={reviews[currentIndex].name} 
                        className="w-full h-full object-cover"
                        loading='lazy'
                      />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <p className="text-lg text-gray-300 italic mb-6">
                      "{reviews[currentIndex].text}"
                    </p>
                    <div>
                      <h4 className="font-semibold text-lg">{reviews[currentIndex].name}</h4>
                      <p className="text-yellow-400">{reviews[currentIndex].title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                  index === currentIndex ? 'bg-yellow-400' : 'bg-zinc-700 hover:bg-zinc-600'
                }`}
              />
            ))}
          </div>

          {/* Navigation arrows */}
          <button 
            onClick={prevReview}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-yellow-400 hover:bg-yellow-300 text-zinc-900 p-2 rounded-full shadow-lg transition-colors duration-300 hidden md:block"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={nextReview}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-yellow-400 hover:bg-yellow-300 text-zinc-900 p-2 rounded-full shadow-lg transition-colors duration-300 hidden md:block"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;