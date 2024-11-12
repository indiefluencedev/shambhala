import React from 'react';
import left from '../../assets/AboutUsimages/left.svg';
import right from '../../assets/AboutUsimages/right.svg';

const OurValuesMobile = () => {
  return (
    <div className="flex flex-col py-8 bg-[#F6F8F8] ">
      <h2 className="text-[#155e75] text-base lg:text-lg xl:text-lg font-bold justify-center mx-auto mt-5 mb-20 text-[36px]">
        OUR CORE VALUES
      </h2>
      {/* Ahimsa Section */}
      <div className="flex flex-col items-end mb-10">
        <h3 className="text-xl font-bold text-cyan-800 pr-32">DHYAAN JAGAT</h3>
        <img src={left} alt="Top Left Line Decoration" className="w-[300px] h-auto mt-1" />
        <p className="text-[12px] text-[#348479] text-center pt-1 w-[300px] pr-1 uppercase">
          with Dhyaan, awaken profound self-awareness, nurture positivity in thoughts, actions, and character, and embark on a journey toward the blissful state of moksha
        </p>
      </div>

      {/* Shakahar Section */}
      <div className="flex flex-col items-start mb-10 mt-5 pl-0">
        <h3 className="text-xl font-bold text-cyan-800 pl-3">SWADHYAYA</h3>
        <img src={right} alt="Bottom Right Line Decoration" className="w-[300px] h-auto mt-1 " />
        <p className="text-[12px] text-[#348479] pl-2 pt-1 w-[300px] uppercase">
          the right vision or perspective, swadhyay enables to understand deeper aspects of spirituality and devotion by reflecting on own thoughts, emotions and behaviors
        </p>
      </div>

      {/* Pyramid Healing Section */}
      <div className="flex flex-col items-end mt-5 mb-10">
        <h3 className="text-xl font-bold text-cyan-800 pr-24">SAJJAN SANGATYA</h3>
        <img src={left} alt="Top Left Line Decoration" className="w-[300px] h-auto mt-1" />
        <p className="text-[12px] text-[#348479] text-center pt-1 w-[300px] pr-1 uppercase">
          ⁠finding own path, sajjan sangatya helps in spiritual guidance, fostering unity and spiritual growth for all
        </p>
      </div>

      {/* Maitreyee Section */}
      <div className="flex flex-col items-start mt-5 mb-10 pl-0">
        <h3 className="text-xl font-bold text-cyan-800 pl-3">NO JUDGEMENT</h3>
        <img src={right} alt="Bottom Right Line Decoration" className="w-[300px] h-auto mt-1 " />
        <p className="text-[12px] text-[#348479] pl-2 pt-1 w-[300px] uppercase">
          a foundational practice that allows to feel more peace, joy and love in every moment to transform your relationship with self and others
        </p>
      </div>

      {/* Dhyaan Jagat Section */}
      <div className="flex flex-col items-end mt-5 mb-10">
        <h3 className="text-xl font-bold text-cyan-800 pr-28">NO COMPLAINT</h3>
        <img src={left} alt="Top Left Line Decoration" className="w-[300px] h-auto mt-1" />
        <p className="text-[12px] text-[#348479] text-center pt-1 w-[300px] pr-1 uppercase">
          ⁠instead of wasting energy on complaining, channel own energy to change what is not right, a wiser habit resulting in feelings of gratitude and satisfaction
        </p>
      </div>

      <div className="flex flex-col items-start mt-5 mb-10 pl-0">
        <h3 className="text-xl font-bold text-cyan-800 pl-3">NO INTERFERENCE</h3>
        <img src={right} alt="Bottom Right Line Decoration" className="w-[300px] h-auto mt-1 " />
        <p className="text-[12px] text-[#348479] pt-1 pl-2 w-[300px] uppercase">
          creating space for renewal and restoration, no interference allows others to discover answers to own problems by avoiding clutter of less important things
        </p>
      </div>
    </div>
  );
};

export default OurValuesMobile;
