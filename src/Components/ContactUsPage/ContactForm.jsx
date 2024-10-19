import React from 'react';

const ContactForm = () => {
  return (
    <form className="space-y-6 w-full max-w-[900px] px-4 sm:px-6 lg:px-8 mx-auto my-6 p-7 relative bg-white bg-opacity-10 rounded-lg shadow-lg">
      <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-md rounded-lg pointer-events-none"></div>
      <div className="relative z-10">
        <label className="block text-white font-semibold">Full Name</label>
        <input
          type="text"
          placeholder="John Doe"
          className="w-full px-4 py-2 rounded-md border border-gray-100 bg-white bg-opacity-5 focus:outline-none focus:bg-opacity-30 focus:ring-2 focus:ring-teal-500 text-white placeholder-gray-400"
        />
      </div>
      <div className="relative z-10">
        <label className="block text-white font-semibold">Email ID</label>
        <input
          type="email"
          placeholder="johndoe@gmail.com"
          className="w-full px-4 py-2 rounded-md border border-gray-100 bg-white bg-opacity-5 focus:outline-none focus:bg-opacity-30 focus:ring-2 focus:ring-teal-500 text-white placeholder-gray-400"
        />
      </div>
      <div className="relative z-10">
        <label className="block text-white font-semibold">Phone Number</label>
        <input
          type="tel"
          placeholder="+91 12345 67890"
          className="w-full px-4 py-2 rounded-md border border-gray-100 bg-white bg-opacity-5 focus:outline-none focus:bg-opacity-30 focus:ring-2 focus:ring-teal-500 text-white placeholder-gray-400"
        />
      </div>
      <div className="relative z-10">
        <label className="block text-white font-semibold">Type your message here</label>
        <textarea
          placeholder="Start typing..."
          className="w-full px-4 py-2 rounded-md border border-gray-100 bg-white bg-opacity-5 focus:outline-none focus:bg-opacity-30 focus:ring-2 focus:ring-teal-500 text-white placeholder-gray-400"
          rows="4"
        />
      </div>
      <button
        type="submit"
        className="w-[200px] py-3 rounded-md bg-teal-600 bg-opacity-80 text-white font-semibold hover:bg-opacity-90 transition duration-300 mx-auto block relative z-20"
      >
        SUBMIT
      </button>
    </form>
  );
};

export default ContactForm;
