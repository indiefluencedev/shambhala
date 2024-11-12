import React from 'react';

const QuestionText = () => {
  return (
    <div className="max-w-[1240px] xl:mx-auto px-4 py-8 lg:py-16">
      {/* Change layout to flex-row on md and lg screens */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between xl:flex-row items-center justify-center text-center xl:text-left gap-4 xl:gap-8 xl:mr-40 xl:ml-40">
        
        {/* Left Column for the Main Headings */}
        <div className="flex-1">
          <div className="mb-2 sm:mb-4 xl:mt-4 lg:mt-2">
            <h1 className="text-3xl text-[45px] md:mt-3 md:mb-3 lg:mb-3 md:text-[50px] xl:text-[55px] lg:text-[50px] font-bold text-black inline-block xl:mb-4">
              Got Questions?
            </h1>
            <h2 className="text-[29px] md:text-[32px] xl:text-4xl xl:mb-4 font-bold text-black inline-block  xl:mr-5">
              We’re Here to Answer!
            </h2>
          </div>
        </div>

        {/* Right Column for the Paragraph */}
        <div className="flex-1 md:mt-4 xl:mt-0 md:text-left">
          <p className="text-gray-600 lg:mb-4 text-[14px] sm:text-[16px]">
            Connect with us directly through email, phone, or by visiting our center.
            Whether you have questions about our programs, or simply wish to learn more
            about what we offer, we’re here to help. Reach out—we’d love to hear from you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuestionText;
