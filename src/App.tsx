import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import MobileAppDemo from './components/MobileAppDemo';
import Reviews from './components/Reviews';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update page title
    document.title = 'EQLZR - Cross-chain Risk-Neutral DEX';
    
    // Find the data-default title element and remove it if it exists
    const defaultTitle = document.querySelector('[data-default]');
    if (defaultTitle) {
      defaultTitle.removeAttribute('data-default');
    }
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
      </main>
      <Footer />
    </div>
  );
}

export default App;