import React from 'react';
import { Link } from 'react-router-dom';
import teamLead1 from '../../assets/AboutUsimages/teamlead1.png'; // Make sure these paths are correct
import teamLead2 from '../../assets/AboutUsimages/teamlead2.png';
import teamLead3 from '../../assets/AboutUsimages/teamlead3.png';

const TeamLead = () => {
  return (
    <div className="w-full py-12 bg-white text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#2F8479]">Our Key Leaders</h2>
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 sm:px-8">
        
        {/* Card 1 */}
        <Link to="/profile/deepthi-nadella" className="shadow-lg rounded-lg overflow-hidden block">
          <img 
            src={teamLead1} 
            alt="Smt. Deepthi Nadella" 
            className="w-full h-[400px] md:h-[350px] object-cover transition-transform duration-300 hover:scale-105" 
          />
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">Smt. Deepthi Nadella</h3>
          </div>
        </Link>

        {/* Card 2 */}
        <Link to="/profile/subhash-patriji" className="shadow-lg rounded-lg overflow-hidden block">
          <img 
            src={teamLead2} 
            alt="Brahmarshi Pitamah Subhash Patriji" 
            className="w-full h-[400px] md:h-[350px] object-cover transition-transform duration-300 hover:scale-105" 
          />
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">Brahmarshi Pitamah Subhash Patriji</h3>
          </div>
        </Link>

        {/* Card 3 */}
        <Link to="/profile/venkat-ram-nadella" className="shadow-lg rounded-lg overflow-hidden block">
          <img 
            src={teamLead3} 
            alt="Shri Venkat Ram Nadella" 
            className="w-full h-[400px] md:h-[350px] object-cover transition-transform duration-300 hover:scale-105" 
          />
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">Shri Venkat Ram Nadella</h3>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default TeamLead;
