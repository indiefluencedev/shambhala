import React from 'react';

const ContactForm = () => {
  return (
    <form className="space-y-6 w-full p-4 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg">
      <div>
        <label className="block text-gray-200 font-semibold">Full Name</label>
        <input
          type="text"
          placeholder="John Doe"
          className="w-full px-4 py-2 rounded-md border border-gray-600 bg-black bg-opacity-40 focus:outline-none focus:bg-opacity-30 focus:ring-2 focus:ring-teal-500 text-white placeholder-gray-400"
        />
      </div>
      <div>
        <label className="block text-gray-200 font-semibold">Email ID</label>
        <input
          type="email"
          placeholder="johndoe@gmail.com"
          className="w-full px-4 py-2 rounded-md border border-gray-600 bg-black bg-opacity-40 focus:outline-none focus:bg-opacity-30 focus:ring-2 focus:ring-teal-500 text-white placeholder-gray-400"
        />
      </div>
      <div>
        <label className="block text-gray-200 font-semibold">Phone Number</label>
        <input
          type="tel"
          placeholder="+91 12345 67890"
          className="w-full px-4 py-2 rounded-md border border-gray-600 bg-black bg-opacity-40 focus:outline-none focus:bg-opacity-30 focus:ring-2 focus:ring-teal-500 text-white placeholder-gray-400"
        />
      </div>
      <div>
        <label className="block text-gray-200 font-semibold">Type your message here</label>
        <textarea
          placeholder="Start typing..."
          className="w-full px-4 py-2 rounded-md border border-gray-600 bg-black bg-opacity-40 focus:outline-none focus:bg-opacity-30 focus:ring-2 focus:ring-teal-500 text-white placeholder-gray-400"
          rows="4"
        />
      </div>
      <button
        type="submit"
        className="w-[200px] py-2 rounded-md bg-teal-600 bg-opacity-80 text-white font-semibold hover:bg-opacity-90 transition duration-300 mx-auto block"
      >
        SUBMIT
      </button>
    </form>
  );
};

export default ContactForm;
