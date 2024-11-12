import React from 'react';
import Corevalues from '../../assets/svg/corevalues.svg'; // Ensure the path to your SVG file is correct

const OurValues = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto py-4 px-4 lg:px-8">
      {/* <div className="flex justify-center"> */}
        <img
          src={Corevalues}
          alt="Our Core Values"
          className="w-[1240px] "
        />
      {/* </div> */}
    </div>
  );
};

export default OurValues;
