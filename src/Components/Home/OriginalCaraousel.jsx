import React, { useState, useEffect } from 'react';
import carousel1 from '../../assets/caraousel1.svg';
import carousel2 from '../../assets/caraousel2.svg';
import carousel3 from '../../assets/caraousel3.svg';

const carouselItems = [
  { img: carousel1, text: 'If you want to change your world...', buttonText: 'Explore Now' },
  { img: carousel2, text: 'Witness the Divine Within and Around...', buttonText: 'Discover More' },
  { img: carousel3, text: 'Join Shambhala for a more conscious you!', buttonText: 'Join Us' }
];

const OriginalCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselItems.length);
      console.log("Carousel updated. Current item index: ", current);
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="w-full flex justify-center items-center py-10 px-5 md:px-10 bg-gray-100 border">
      <div className="w-full max-w-screen-lg relative overflow-hidden">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col justify-center items-center text-center transition-opacity duration-1000 ease-in-out absolute top-0 left-0 right-0 ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={item.img} alt={`carousel${index + 1}`} className="w-full h-auto max-h-96 object-contain" />
            <div className="mt-5">
              <h2 className="text-xl md:text-2xl font-semibold">{item.text}</h2>
              <button className="mt-4 px-6 py-2 bg-green-800 text-white rounded hover:bg-green-700 transition">
                {item.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OriginalCarousel;
