import React from 'react';
import CarouselComponent from '../Components/Home/crousel';
// import OriginalCarousel from '../Components/Home/OriginalCaraousel';
import ShambhalaComponent from '../Components/Home/ShambhalaComponent';
import Buddha from '../Components/Home/Buddha';
import OurFounder from '../Components/Home/OurFounder';
import UpcomingEvents from '../Components/Home/UpcomingEvents'
import Voices from '../Components/Home/Voices';
import Resources from '../Components/Home/resource';


const Home = () => {
  return (
    <div className="w-full overflow-x-hidden"> {/* Ensure no overflow */}
      <CarouselComponent />
      {/* <OriginalCarousel /> */}
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
