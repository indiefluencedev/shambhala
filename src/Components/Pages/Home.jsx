import React from 'react';
import CarouselComponent from '../Home/crousel';
import ShambhalaComponent from '../Home/ShambhalaComponent';
import Buddha from '../Home/Buddha';
import OurFounder from '../Home/OurFounder';
import UpcomingEvents from '../Home/UpcomingEvents'
import Voices from '../Home/Voices';
import Resources from '../Home/resource';


const Home = () => {
  return (
    <div className="w-full overflow-x-hidden"> {/* Ensure no overflow */}
      <CarouselComponent />
      <ShambhalaComponent />
      <Buddha />
      <OurFounder />
      <UpcomingEvents/>
      <Voices/>
      <Resources />
    </div>
  );
};

export default Home;
