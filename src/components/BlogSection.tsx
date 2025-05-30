import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../data';

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 bg-zinc-800 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-yellow-400">Thought</span> Leadership
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest insights, research, and developments in the cross-chain DeFi space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-3/4 my-0 mx-auto">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-zinc-700 rounded-xl overflow-hidden h-full flex flex-col transition-transform duration-300 hover:transform hover:scale-[1.02]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-54 overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-gray-300 mb-6 flex-grow">{post.summary}</p>
                <a 
                  href={post.link} 
                  className="flex items-center text-yellow-400 font-medium hover:text-yellow-300 transition-colors mt-auto"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-flex items-center text-yellow-400 border border-yellow-400 hover:bg-yellow-400 hover:text-zinc-900 font-semibold px-6 py-3 rounded-md transition-colors duration-300"
          >
            View All Articles <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default BlogSection;