import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaRupeeSign, FaBed, FaBath, FaRulerCombined, FaPhone, FaEnvelope, FaShare } from 'react-icons/fa';
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
    description: "This stunning luxury villa offers breathtaking sea views with modern amenities. The property features a private pool, landscaped garden, and high-end finishes throughout.",
    amenities: ["Swimming Pool", "Gym", "Parking", "24/7 Security", "Garden"],
    images: [modernHouse,property1,property2],
    agent: {
      name: "Rahul Sharma",
      phone: "+91 98765 43210",
      email: "rahul@realestate.com"
    }
  },
  { 
    id: 2, 
    title: "Luxury Villa", 
    location: "Bandra West, Mumbai", 
    price: "₹2.5 Cr",
    beds: 4,
    baths: 3,
    area: "3200 sqft",
    description: "This stunning luxury villa offers breathtaking sea views with modern amenities. The property features a private pool, landscaped garden, and high-end finishes throughout.",
    amenities: ["Swimming Pool", "Gym", "Parking", "24/7 Security", "Garden"],
    images: [modernHouse,property1,property2],
    agent: {
      name: "Rahul Sharma",
      phone: "+91 98765 43210",
      email: "rahul@realestate.com"
    }
  },
  { 
    id: 3, 
    title: "Luxury Villa", 
    location: "Bandra West, Mumbai", 
    price: "₹2.5 Cr",
    beds: 4,
    baths: 3,
    area: "3200 sqft",
    description: "This stunning luxury villa offers breathtaking sea views with modern amenities. The property features a private pool, landscaped garden, and high-end finishes throughout.",
    amenities: ["Swimming Pool", "Gym", "Parking", "24/7 Security", "Garden"],
    images: [modernHouse,property1,property2],
    agent: {
      name: "Rahul Sharma",
      phone: "+91 98765 43210",
      email: "rahul@realestate.com"
    }
  },
  // ... other properties
];

export default function PropertyDetail() {
  const { id } = useParams();
  const property = dummyProperties.find(prop => prop.id === parseInt(id));

  if (!property) {
    return <div className="p-6 text-center">Property not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto p-6 md:p-10"
      >
        {/* Breadcrumb Navigation */}
        <nav className="flex mb-6" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <Link to="/properties" className="text-sm font-medium text-gray-700 hover:text-blue-600">
                  Properties
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-sm font-medium text-gray-500">{property.title}</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Property Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{property.title}</h1>
          <div className="flex items-center text-gray-600">
            <FaMapMarkerAlt className="mr-2 text-blue-500" />
            <span>{property.location}</span>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="md:col-span-2">
            <img 
              src={property.images[0]} 
              alt={property.title} 
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {property.images.slice(1, 3).map((img, index) => (
              <img 
                key={index}
                src={img} 
                alt={property.title} 
                className="w-full h-48 object-cover rounded-lg"
              />
            ))}
            <div className="relative">
              <img 
                src={property.images[3] || property.images[0]} 
                alt={property.title} 
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
                <span className="text-white font-medium">+{property.images.length - 3} more</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Property Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Property Details</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center">
                  <FaRupeeSign className="mr-2 text-blue-500" />
                  <div>
                    <p className="text-gray-500 text-sm">Price</p>
                    <p className="font-bold">{property.price}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaBed className="mr-2 text-blue-500" />
                  <div>
                    <p className="text-gray-500 text-sm">Bedrooms</p>
                    <p className="font-bold">{property.beds}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaBath className="mr-2 text-blue-500" />
                  <div>
                    <p className="text-gray-500 text-sm">Bathrooms</p>
                    <p className="font-bold">{property.baths}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaRulerCombined className="mr-2 text-blue-500" />
                  <div>
                    <p className="text-gray-500 text-sm">Area</p>
                    <p className="font-bold">{property.area}</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Description</h3>
              <p className="text-gray-600 mb-6">{property.description}</p>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Amenities</h3>
              <div className="flex flex-wrap gap-3">
                {property.amenities.map((amenity, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {amenity}
                  </span>
                ))}
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Location</h2>
              <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
                {/* Replace with actual map component */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  <span>Map view of {property.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Agent */}
          <div className="bg-white rounded-xl shadow-md p-6 h-fit sticky top-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Agent</h2>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gray-300 mr-4 overflow-hidden">
                {/* Agent image would go here */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  <span className="text-2xl">{property.agent.name.charAt(0)}</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg">{property.agent.name}</h3>
                <p className="text-gray-600">Real Estate Agent</p>
              </div>
            </div>
            <div className="space-y-4">
              <a 
                href={`tel:${property.agent.phone}`} 
                className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg transition"
              >
                <FaPhone className="mr-2" /> Call Now
              </a>
              <a 
                href={`mailto:${property.agent.email}`} 
                className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg transition"
              >
                <FaEnvelope className="mr-2" /> Email Agent
              </a>
              <button className="w-full flex items-center justify-center border border-gray-300 hover:bg-gray-100 py-3 px-4 rounded-lg transition">
                <FaShare className="mr-2" /> Share Property
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}