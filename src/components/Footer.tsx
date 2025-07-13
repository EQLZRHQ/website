import { faTelegram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Mail, Github, Send } from 'lucide-react';
import { useState } from 'react';
import { supabase } from "../supabaseClient.js"
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    const { error } = await supabase
      .from('SubscribersEmails')
      .insert([{ email }])

    if (error) {
      setMessage(error.message === 'duplicate key value violates unique constraint "SubscribersEmails_email_key"' ? 'Email address is already subscribed' : 'error.message')
      setSubscribed(false)
      setTimeout(() => {
        setEmail('');
        setMessage('')
      }, 5000)
    } else {
      setMessage("Thanks for subscribing! We'll keep you updated.")
      setSubscribed(true)
      setEmail('')
    }
  };

  return (
    <footer className="bg-zinc-900 text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-1 flex items-center">
              <span className="text-yellow-400 mr-2">EQLZR</span>
            </h3>
            <div className="text-gray-400 mb-6">
            Cross-chain Risk-Neutral DEX
              <p>
                Introducing <span className="text-yellow-400">GasFi</span>
              </p>
              <p>
                a new <span className="text-yellow-400">DeFi</span> Primitive
              </p>
              <p>
                to unlock the
              </p>
              <p>
                <span className="text-yellow-400">US$7 Billion</span> Blockchain Fees Market
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="https://x.com/0xeqlzr" target='_blank' className="text-gray-400 hover:text-yellow-400 transition-colors">
                <FontAwesomeIcon icon={faXTwitter} className="h-5 w-5" />
              </a>
              <a href="https://t.me/eqlzr_global" target='_blank' className="text-gray-400 hover:text-yellow-400 transition-colors">
                <FontAwesomeIcon icon={faTelegram} className="h-5 w-5"  />
              </a>
              <a href="mailto:hello@eqlzr.xyz" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-yellow-400 transition-colors">Features</a>
              </li>
              <li>
                <a href="#app-demo" className="text-gray-400 hover:text-yellow-400 transition-colors">App Demo</a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-yellow-400 transition-colors">Blog</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.papermark.com/view/cm91ad47h0003jm036siplvri" target='_blank' className="text-gray-400 hover:text-yellow-400 transition-colors">Whitepaper</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          {
            !subscribed ? (
              <div>
                <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
                <p className="text-gray-400 mb-4">
                  Subscribe to our newsletter for the latest updates on EQLZR and GasFi.
                </p>
                <form onSubmit={handleSubmit} className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="bg-zinc-800 text-white px-4 py-2 rounded-l-md flex-grow focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button 
                    type="submit" 
                    className="bg-yellow-400 hover:bg-yellow-300 text-zinc-900 px-4 py-2 rounded-r-md transition-colors"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </form>
                {message && (
                  <div className='mt-2 text-sm text-yellow-400'>
                    {message}
                  </div>
                )}
              </div>
            ) : <div className='flex flex-col items-center justify-start text-center'>
                  <FontAwesomeIcon icon={faThumbsUp} className='text-3xl text-success mb-2 text-yellow-400' />
                  {message}
                </div>
          }
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear() - 1} - {new Date().getFullYear()} EQLZR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;