import { motion } from 'framer-motion';
import { FaBuilding, FaHandshake, FaMedal, FaHome } from 'react-icons/fa';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            About <span className="text-blue-600">PrimeHomes</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Redefining luxury living through exceptional service and premium properties
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <div className="space-y-6 text-gray-700">
              <p>
                Founded in 2015, PrimeHomes began with a simple vision: to create spaces that inspire. What started as a small boutique real estate firm has grown into one of India's most trusted property consultants.
              </p>
              <p>
                We blend luxury with comfort, focusing on modern architecture, prime locations, and seamless customer experiences. Our journey has been marked by countless success stories of families finding their perfect homes.
              </p>
              <p>
                Today, with offices in 6 major cities and a portfolio of over 500 premium properties, we continue to push boundaries in real estate excellence.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <div className="space-y-6 text-gray-700">
              <p>
                We don't just sell properties - we create long-term relationships built on trust, transparency, and exceptional service.
              </p>
              <p>
                Our team of passionate architects, engineers, and real estate professionals ensures every property meets our rigorous standards of quality and design.
              </p>
              <p>
                We're committed to raising industry standards through innovation, ethical practices, and a customer-first approach that puts your needs above all else.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBuilding className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600">Honest dealings and transparent processes in every transaction</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMedal className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">Uncompromising quality in every property we represent</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHandshake className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trust</h3>
              <p className="text-gray-600">Building relationships that last beyond the sale</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHome className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">Pioneering new standards in real estate services</p>
            </motion.div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Meet Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Rajesh Mehta", role: "Founder & CEO", bio: "20+ years in real estate development" },
              { name: "Priya Sharma", role: "Head of Design", bio: "Architectural visionary with award-winning projects" },
              { name: "Amit Patel", role: "Customer Relations", bio: "Dedicated to creating exceptional client experiences" }
            ].map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                  {/* Replace with actual team member images */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <span className="text-4xl">{member.name.charAt(0)}</span>
                </div>
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-blue-600 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}