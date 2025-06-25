import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaShareAlt } from 'react-icons/fa';
import blog1 from '../assets/blog1.jpg'; // Import your blog images
import blog2 from '../assets/blog2.jpg';
import blog3 from '../assets/blog3.jpg';

const blogPosts = [
  {
    id: 1,
    title: "2025 Housing Market Trends in India",
    excerpt: "Discover the emerging trends that will shape India's real estate market in the coming year.",
    date: "June 15, 2025",
    readTime: "5 min read",
    image: blog1,
    category: "Market Trends"
  },
  {
    id: 2,
    title: "How to Choose the Right Property Investment",
    excerpt: "Expert tips for identifying high-growth properties that match your investment goals.",
    date: "May 28, 2025",
    readTime: "7 min read",
    image: blog2,
    category: "Investment"
  },
  {
    id: 3,
    title: "Benefits of Owning vs Renting",
    excerpt: "A comprehensive comparison to help you decide whether buying or renting is right for you.",
    date: "April 10, 2025",
    readTime: "6 min read",
    image: blog3,
    category: "Home Buying"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            PrimeHomes <span className="text-blue-600">Insights</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Expert analysis, market trends, and tips for your real estate journey
          </motion.p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-3">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium flex items-center">
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-blue-600 rounded-xl p-8 text-white mb-12"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="mb-6">Subscribe to our newsletter for the latest market insights and property tips</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none"
              />
              <button className="bg-white text-blue-600 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Popular Categories */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Browse by Category</h3>
          <div className="flex flex-wrap gap-3">
            {['Market Trends', 'Investment', 'Home Buying', 'Interior Design', 'Legal Guide', 'Neighborhood Guides'].map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 transition"
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 h-64 md:h-auto">
              <img 
                src={blog1} 
                alt="Featured Post" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:w-1/2">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-3">
                Featured
              </span>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">The Future of Urban Living in India</h3>
              <p className="text-gray-600 mb-6">
                How smart cities and sustainable design are transforming residential spaces across India's metropolitan areas.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <FaCalendarAlt className="mr-1" />
                  <span>June 5, 2025</span>
                </div>
                <div className="flex gap-4">
                  <button className="text-gray-500 hover:text-blue-600">
                    <FaShareAlt />
                  </button>
                  <button className="text-blue-600 font-medium flex items-center">
                    Read Full Article
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}