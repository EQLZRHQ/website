import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import MobileAppDemo from './components/MobileAppDemo';
import Reviews from './components/Reviews';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import { ArrowUp } from 'lucide-react';

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  useEffect(() => {    
    // Find the data-default title element and remove it if it exists
    const defaultTitle = document.querySelector('[data-default]');
    if (defaultTitle) {
      defaultTitle.removeAttribute('data-default');
    }

    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 100); // show after 100px scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <MobileAppDemo />
        {/* <Reviews /> */}
        <BlogSection />
        {showScrollButton && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-50 bg-yellow-400 text-zinc-900 p-3 rounded-full shadow-lg hover:bg-yellow-300 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;