import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import mount from '../../assets/mount.jpeg';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ImageTextComponent = () => {
  const ref = useRef(null);

  return (
    <div className="max-w-[1440px] mx-auto py-10 px-10 xl:py-20 xl:px-20" ref={ref}>
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Image Grid Container for Desktop */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:grid-rows-2 gap-4 w-full lg:w-2/5"
          initial={false} // No animation
          animate={false} // No animation
        >
          <img 
            src={mount}
            alt="Large" 
            className="col-span-2 lg:col-span-2 lg:row-span-2 w-full h-full object-cover" 
          />
          <img 
            src={mount}
            alt="Small 1" 
            className="w-full h-full object-cover" 
          />
          <img 
            src={mount}
            alt="Small 2" 
            className="w-full h-full object-cover" 
          />
        </motion.div>

        {/* Text Section */}
        <motion.div 
          className="w-full lg:w-3/5 text-left"
          initial={false} // No animation
          animate={false} // No animation
        >
          <div className="flex items-center justify-start space-x-4 mb-4">
            <button className="inline-flex items-center px-4 py-2 bg-secondary rounded-md">
              <div className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse mr-2"></div>
              <span className="text-accent font-medium">UPCOMING</span>
            </button>
            <button className="inline-flex items-center px-4 py-2 bg-secondary rounded-md">
              <div className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse mr-2"></div>
              <span className="text-accent font-medium">ONLINE</span>
            </button>
          </div>
          
          <h2 className="text-2xl font-bold mb-2">Lorem ipsum dolor sit amet consectetur.</h2>
          
          <div className="flex flex-col lg:flex-row items-start justify-start space-y-2 lg:space-y-0 lg:space-x-8 mb-4">
            <div className="flex items-center">
              <FaCalendarAlt className="text-gray-600 mr-2" />
              <span className="text-gray-600">October 5, 2024</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-gray-600 mr-2" />
              <span className="text-gray-600">Google Meet</span>
            </div>
          </div>

          <p className="text-gray-600 mb-4">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Nascetur leo a aliquam, efficitur at himenaeos. Fusce primis iaculis facilisis lectus dictum donec penatibus pulvinar. Vestibulum elementum eget nibh varius; fames conubia posuere rhoncus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </p>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start space-y-2 lg:space-y-0 lg:space-x-4">
            <button className="w-full lg:w-auto px-6 py-2 bg-accent text-white rounded hover:bg-primary transition">
              Register Now
            </button>
            <button className="w-full lg:w-auto px-6 py-2 bg-white border border-accent text-black rounded hover:bg-gray-200 transition">
              See All Events
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ImageTextComponent;
