import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronRight, FaSearch } from 'react-icons/fa';
import { MdHouse, MdApartment, MdVilla } from 'react-icons/md';
import modernHouse from '../assets/modern-house.jpg';
import property1 from '../assets/property1.jpg';
import property2 from '../assets/property2.jpg';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 ">
          <img
            src={modernHouse}
            alt="Luxury Home"
            className="object-cover w-full h-170"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 px-6 max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Discover Your <span className="text-blue-400">Dream Home</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto"
          >
            Premium properties with elegant design, perfect location, and unmatched value.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="bg-white p-4 rounded-lg shadow-xl max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search by location..." 
                  className="w-full pl-10 p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="relative">
                <select className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
                  <option>Property Type</option>
                  <option value="house">
                    <div className="flex items-center">
                      <MdHouse className="mr-2" /> House
                    </div>
                  </option>
                  <option value="apartment">
                    <div className="flex items-center">
                      <MdApartment className="mr-2" /> Apartment
                    </div>
                  </option>
                  <option value="villa">
                    <div className="flex items-center">
                      <MdVilla className="mr-2" /> Villa
                    </div>
                  </option>
                </select>
                <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center">
                <FaSearch className="mr-2" /> Search
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce w-10 h-10 border-4 border-white rounded-full flex items-center justify-center">
            <FaChevronDown className="w-6 h-6 text-white" />
          </div>
        </motion.div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Featured Properties</h2>
        <p className="text-gray-500 mb-12 max-w-2xl mx-auto">Explore our curated selection of premium properties</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Property Card 1 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl"
          >
            <div className="h-64 relative">
              <img src={modernHouse} alt="Modern Villa" className="object-cover w-full h-full" />
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Featured</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Modern Luxury Villa</h3>
              <p className="text-gray-600 mb-4">123 Palm Street, Beverly Hills</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-bold text-xl">$1,250,000</span>
                <button className="text-blue-600 hover:text-blue-800 font-medium transition duration-300">View Details</button>
              </div>
            </div>
          </motion.div>

          {/* Property Card 2 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl"
          >
            <div className="h-64 relative">
              <img src={property1} alt="City Apartment" className="object-cover w-full h-full" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Downtown Apartment</h3>
              <p className="text-gray-600 mb-4">456 Central Ave, New York</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-bold text-xl">$850,000</span>
                <button className="text-blue-600 hover:text-blue-800 font-medium transition duration-300">View Details</button>
              </div>
            </div>
          </motion.div>

          {/* Property Card 3 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl"
          >
            <div className="h-64 relative">
              <img src={property2} alt="Suburban House" className="object-cover w-full h-full" />
              <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">New</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Suburban Family Home</h3>
              <p className="text-gray-600 mb-4">789 Oak Lane, Austin</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-bold text-xl">$675,000</span>
                <button className="text-blue-600 hover:text-blue-800 font-medium transition duration-300">View Details</button>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/properties"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 inline-flex items-center justify-center"
          >
            View All Properties
            <FaChevronRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}