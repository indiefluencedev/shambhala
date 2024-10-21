import React from 'react';
import BuddhaSVG from '../../assets/buddha.svg'; // Replace this with the correct path to your Buddha image

const Buddha = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full py-10 px-5 max-w-[1440px] mx-auto">
      {/* Inner Container for Centering */}
      <div className="flex flex-col md:flex-row items-start justify-start w-full max-w-[1024px]">
        {/* Left Side: Buddha Image with Gradient Background */}
        <div className="relative flex-shrink-0 flex justify-center items-center w-full md:w-[427px] h-[300px] md:h-[446px]">
          {/* Gradient Background */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              background: 'radial-gradient(circle, rgba(140,180,185,0.8) 30%, rgba(140,180,185,0.5) 50%, transparent 60%)',
              zIndex: 0,
            }}
          ></div>

          {/* Buddha SVG */}
          <img src={BuddhaSVG} alt="Buddha" className="relative z-10 object-contain w-full h-full" />
        </div>

        {/* Right Side: Text Content */}
        <div className="flex-1 md:pl-3 xl:pl-10 lg:pl-10 text-center md:text-left">
          <h4 className=" h4-text md:ml-3 uppercase text-[#348479] font-bold xl:font-bold mb-2 mt-10 text-[12px]" style={{ letterSpacing: '0.05em' }}>
            What makes us different?
          </h4>
          <h2 className=" h2-text xl:text-3xl lg:text-3xl md:text-[20px] text-3xl ml-3 text-[black] font-bold" style={{ letterSpacing: '0.03rem', fontWeight: '700' }}>
            Anapanasati Meditation: <br /> Shambhala’s Unique Path
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Buddha;
