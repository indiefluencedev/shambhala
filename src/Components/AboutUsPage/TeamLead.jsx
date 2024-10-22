import React from 'react';
import teamLead1 from '../../assets/AboutUsimages/teamlead1.svg'; // Ensure the path is correct
import teamLead2 from '../../assets/AboutUsimages/teamlead2.svg'; // Ensure the path is correct
import teamLead3 from '../../assets/AboutUsimages/teamlead3.svg'; // Ensure the path is correct

const TeamLead = () => {
  return (
    <div className="w-full py-12 bg-white text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#2F8479]">Our Key Leaders</h2>
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 sm:px-8">
        
        {/* Card 1 */}
        <div className="shadow-lg rounded-lg overflow-hidden">
          <div className="overflow-hidden">
            <img 
              src={teamLead1} 
              alt="Leader 1" 
              className="w-full h-[400px] md:h-[350px] object-cover transition-transform duration-300 hover:scale-105" 
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">Smt. Deepthi Nadella</h3>
          </div>
        </div>

        {/* Card 2 */}
        <div className="shadow-lg rounded-lg overflow-hidden">
          <div className="overflow-hidden">
            <img 
              src={teamLead2} 
              alt="Leader 2" 
              className="w-full h-[400px] md:h-[350px] object-cover transition-transform duration-300 hover:scale-105" 
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">Brahmarshi Pitamah Subhash Patriji</h3>
          </div>
        </div>

        {/* Card 3 */}
        <div className="shadow-lg rounded-lg overflow-hidden">
          <div className="overflow-hidden">
            <img 
              src={teamLead3} 
              alt="Leader 3" 
              className="w-full h-[400px] md:h-[350px] object-cover transition-transform duration-300 hover:scale-105" 
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">Shri Venkat Ram Nadella</h3>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TeamLead;
