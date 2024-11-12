import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Banner from './Banner'; // Import the updated Banner component
import image1 from '../../assets/image/caraousel1.png'; // Import your images
import image2 from '../../assets/image/caraousel2.png';
import image3 from '../../assets/image/caraousel3.png';

const CarouselComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const banners = [
    {
      title: "If you want to change your world, you must first change your thoughts, expectations, and beliefs",
      description: "Witness the Divine Within and Around - Join Shambhala and Step into a more conscious you!",
      imageSrc: image1,
    },
    {
      title: "At the center of your being, you have the answer; you know who you are and you know what you want.",
      description: "Discover the power of your inner self with Shambhala.",
      imageSrc: image2,
    },
    {
      title: "Your journey to inner peace begins with mindfulness and self-awareness.",
      description: "Explore the path to enlightenment with Shambhala and unlock your true potential.",
      imageSrc: image3,
    }
  ];

  return (
    <div className="relative w-full h-[700px] mx-auto overflow-hidden">
      <Carousel
        autoPlay
        interval={3000} // Increased interval for slower transitions
        interval={3000} // Increased interval to 7 seconds for slower transitions
        infiniteLoop
        showArrows={false}
        showIndicators={true}
        showStatus={false}
        swipeable={false}
        emulateTouch={false}
        selectedItem={activeIndex}
        onChange={(index) => setActiveIndex(index)}
        transitionTime={0} // Disable sliding effect entirely
      >
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`transition-opacity duration-[1500ms] ease-in-out ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              pointerEvents: activeIndex === index ? 'none' : 'auto', // Disables pointer events on active slide
            }}
          >
            <Banner
              title={banner.title}
              description={banner.description}
              imageSrc={banner.imageSrc}
              buttonText="Explore Now"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
