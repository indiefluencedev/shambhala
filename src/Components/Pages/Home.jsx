import React from 'react';
import CarouselComponent from '../Home/crousel';
import ShambhalaComponent from '../Home/ShambhalaComponent';
import Buddha from '../Home/Buddha';
import OurFounder from '../Home/OurFounder';

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden"> {/* Ensure no overflow */}
      <CarouselComponent />
      <ShambhalaComponent />
      <Buddha />
      <OurFounder />
    </div>
  );
};

export default Home;
