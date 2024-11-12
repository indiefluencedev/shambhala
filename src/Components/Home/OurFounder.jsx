import React from 'react';
import OurFounderSVG from '../../assets/ourfounder.svg'; // Replace this with the correct path to your SVG image

const OurFounder = () => {
  return (
    <div className="w-full py-10 px-5">
      <div className="container mx-auto w-full lg:w-[1240px] flex flex-col items-center justify-center text-center lg:text-left">
        {/* Top Section: Heading */}
        <h2 className="text-3xl font-bold mb-4">Our Founder</h2>

        <div className="flex flex-col lg:flex-row items-center justify-center w-full lg:justify-between">
          {/* Left Side: Text Content */}
          <div className="lg:flex-1 lg:pr-10">
            <p className="text-gray-700 mb-4 max-w-[600px] mx-auto">
              Smt. Deepti Nadella co-founded the Shambhala Spiritual Foundation in 2022, inspired by the Pyramid Spiritual Societies Movement.
              Her mission is to promote peace and global consciousness through meditation and spiritual workshops. She leads retreats and guides
              others on their path to awakening and divine connection.
            </p>
            <div className="flex justify-center">
              <div className="relative inline-block">
                <a
                  href="#"
                  className="text-teal-600 font-medium flex justify-center items-center"
                >
                  Know More
                  <span className="ml-2 inline-block transform rotate-45">&rarr;</span>
                </a>
                {/* Custom Underline */}
                <span className="absolute left-0 bottom-[-2px] h-[2px] w-full bg-teal-600"></span>
              </div>
            </div>
          </div>

          {/* Right Side: SVG Image */}
          <div className="relative mt-6 lg:mt-0 lg:w-[300px] w-full flex justify-center lg:justify-end xl:mr-20 lg:mr-20">
            {/* Thin Border/Rectangle Effect */}
            <div className="absolute border-r-2 border-b-2 border-l-2 border-t-2 border-[#9ec2c5] 
              xl:w-[230px] xl:h-[300px] xl:right-[12px] xl:bottom-[15px] 
              lg:w-[230px] lg:h-[300px] lg:right-[12px] lg:bottom-[15px] 
              md:w-[230px] md:h-[300px] md:right-[220px] md:bottom-[20px] 
              w-[230px] h-[300px] right-[35px] bottom-[20px]">
            </div>
            {/* Image */}
            <img src={OurFounderSVG} alt="Our Founder" className="object-cover w-[320px] lg:w-[350px] h-auto z-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFounder;
