import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { FreeMode, Mousewheel, Autoplay } from 'swiper/modules';

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetch('https://website-blog.eqlzr.xyz/v1/getBlogs')
      .then(response => response.json())
      .then(data => setBlogPosts(data.data));
  }, []);


  const isCarousel = blogPosts.length > 4;

  const BlogCard = ({ post, index }: { post: any; index: number }) => (
    <motion.div
      key={post.blogNumber}
      className="bg-zinc-700 rounded-xl overflow-hidden h-full flex flex-col transition-transform duration-300 hover:transform hover:scale-[1.02]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="h-54 overflow-hidden">
        <img 
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="line-clamp-2 text-xl font-semibold mb-3">{post.title}</h3>
        <p className="line-clamp-3 text-gray-300 mb-6 flex-grow">{post.description}</p>
        <a 
          href={post.blogUrl} 
          className="flex items-center text-yellow-400 font-medium hover:text-yellow-300 transition-colors mt-auto"
        >
          Read More <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );

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

        {isCarousel ? (
          <Swiper
            modules={[FreeMode, Mousewheel, Autoplay]}
            spaceBetween={24}
            slidesPerView={'auto'}
            freeMode={true}
            mousewheel={true}
            autoplay={{
              delay: 3000, // Carousel auto slides every 3 seconds
              disableOnInteraction: false,
            }}
            className="pb-10"
          >
            {Array.isArray(blogPosts) && blogPosts.map((post, index) => (
              <SwiperSlide
                key={post.blogNumber}
                style={{ width: '300px', height: '405px', flexShrink: 0 }}
              >
                {BlogCard({ post, index })}
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-3/3 my-0 mx-auto">
            {Array.isArray(blogPosts) && blogPosts.map((post, index) => BlogCard({ post, index }))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
