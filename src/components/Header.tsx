import { useState, useEffect } from 'react';
import { Menu, X, CircleDollarSign } from 'lucide-react';
import eqlzr from "../assets/EQLZR.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-zinc-900/95 backdrop-blur-sm py-4 shadow-md' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            {/* <CircleDollarSign className="h-8 w-8 text-yellow-400 mr-2" /> */}
            <img className='w-10 mx-2' src={eqlzr} alt="" />
            <span className="text-xl font-bold text-white">EQLZR</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-300 hover:text-yellow-400 transition-colors">
              Features
            </a>
            <a href="#app-demo" className="text-gray-300 hover:text-yellow-400 transition-colors">
              App Demo
            </a>
            {/* <a href="#reviews" className="text-gray-300 hover:text-yellow-400 transition-colors">
              Reviews
            </a> */}
            <a href="#blog" className="text-gray-300 hover:text-yellow-400 transition-colors">
              Blog
            </a>
          </nav>

          {/* CTA Button */}
          <a 
            href="https://app.eqlzr.xyz/" 
            className="hidden md:inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-2 rounded-md transition-colors duration-300"
          >
            Launch App
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-zinc-800 p-4 rounded-md">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#features" 
                className="text-gray-300 hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#app-demo" 
                className="text-gray-300 hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                App Demo
              </a>
              <a 
                href="#reviews" 
                className="text-gray-300 hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Reviews
              </a>
              <a 
                href="#blog" 
                className="text-gray-300 hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </a>
              <a 
                href="https://app.eqlzr.xyz/"
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-4 py-2 rounded-md transition-colors duration-300 inline-block"
              >
                Launch App
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;