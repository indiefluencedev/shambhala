import React from 'react';

const Meditation = () => {
  return (
    <div className="w-full py-12 bg-white text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#2F8479]">
        Our Meditation Events Across India...
      </h2>

      {/* Marquee Container */}
      <div className='bg-gradient-to-r from-[#2F8479] to-[#6BA0BE] py-6' >
      <div className="relative overflow-hidden max-w-[1240px] mx-auto ">
        <div className="flex animate-marquee whitespace-nowrap">
          {/* Locations */}
          {Array(10) // Loop to duplicate the items seamlessly
            .fill()
            .map((_, loopIndex) => (
              <div className="flex space-x-16" key={loopIndex}>
                <div className="text-white text-lg mx-4 text-center">
                  Kurukshetra <br /> Haryana
                </div>
                <div className="text-white text-lg mx-4 text-center">
                  Kadthal <br /> Hyderabad
                </div>
                <div className="text-white text-lg mx-4 text-center">
                  Nagpur <br /> Maharashtra
                </div>
                <div className="text-white text-lg mx-4 text-center">
                  Panipat <br /> Haryana
                </div>
                <div className="text-white text-lg mx-4 text-center">
                  Mahavatar Babaji Caves <br /> Uttarakhand
                </div>
                <div className="text-white text-lg mx-4 text-center">
                  Cosmic Valley <br /> Khammam, Telangana
                </div>
                <div className="text-white text-lg mx-4 text-center">
                  Kadthal <br /> Hyderabad
                </div>
                <div className="text-white text-lg mx-4 text-center">
                  Himachal <br /> Pradesh
                </div>
              </div>
            ))}
        </div>
      </div>
      </div>

      {/* CSS for marquee animation */}
      <style>{`
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default Meditation;
