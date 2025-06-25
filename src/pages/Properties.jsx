import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSearch, FaMapMarkerAlt, FaRupeeSign, FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';
import modernHouse from '../assets/modern-house.jpg';
import property1 from '../assets/property1.jpg';
import property2 from '../assets/property2.jpg';
const dummyProperties = [
  { 
    id: 1, 
    title: "Luxury Villa", 
    location: "Bandra West, Mumbai", 
    price: "₹2.5 Cr",
    beds: 4,
    baths: 3,
    area: "3200 sqft",
    image: modernHouse
  },
  { 
    id: 2, 
    title: "Beach House", 
    location: "Anjuna, Goa", 
    price: "₹1.8 Cr",
    beds: 3,
    baths: 2,
    area: "2800 sqft",
    image: property1
  },
  { 
    id: 3, 
    title: "Urban Apartment", 
    location: "Koramangala, Bangalore", 
    price: "₹90 L",
    beds: 2,
    baths: 2,
    area: "1800 sqft",
    image: property2
  },
];

export default function Properties() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Discover Properties</h1>
        <p className="text-gray-600 mb-8">Find your perfect home in India's best locations</p>
        
        {/* Search and Filter Bar */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-10">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search by location or property name..." 
                className="w-full pl-10 p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select className="p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Types</option>
              <option>Villa</option>
              <option>Apartment</option>
              <option>House</option>
            </select>
            <select className="p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Any Price</option>
              <option>Under ₹50L</option>
              <option>₹50L - ₹1Cr</option>
              <option>₹1Cr - ₹2Cr</option>
              <option>Above ₹2Cr</option>
            </select>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyProperties.map((prop) => (
            <motion.div
              key={prop.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <Link to={`/property/${prop.id}`} className="block">
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 h-full flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={prop.image} 
                      alt={prop.title} 
                      className="w-full h-full object-cover transition duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-800">{prop.title}</h3>
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                        {prop.price}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <FaMapMarkerAlt className="mr-2 text-blue-500" />
                      <span>{prop.location}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-auto pt-4 border-t border-gray-100">
                      <div className="flex items-center text-sm">
                        <FaBed className="mr-1 text-blue-500" />
                        <span>{prop.beds} Beds</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <FaBath className="mr-1 text-blue-500" />
                        <span>{prop.baths} Baths</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <FaRulerCombined className="mr-1 text-blue-500" />
                        <span>{prop.area}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}