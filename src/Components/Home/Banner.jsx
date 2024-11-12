import React from 'react';
import PropTypes from 'prop-types';

const Banner = ({ imageSrc, title, description, buttonText }) => {
  return (
    <div
      className="relative w-full max-w-[1200px] h-[700px] xl:w-[1200px] xl:mx-auto lg:w-[850px]  lg:mx-auto mx-auto bg-cover bg-center flex items-center justify-center md:px-8 lg:px-0" // Added md:px-8 for 1024px frame
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      {/* Overlay for darkening image (optional) */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Text and Button Container */}
      <div className="relative text-center text-white z-10 flex flex-col items-center justify-center h-full">
        <h2 className="text-[30px] font-bold mb-4 xl:px-8 lg:px-8 px-2 ">{title}</h2> {/* Title set to 30px */}
        <p className="text-[20px] mb-8">{description}</p> {/* Description set to 20px */}
        <button className="px-6 py-3 bg-white text-[#348479] font-semibold shadow hover:bg-gray-200 transition duration-300">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

Banner.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Banner;
