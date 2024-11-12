import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import resource1 from '../../assets/resources.jpeg';
import resource2 from '../../assets/resource2.jpeg';
import resource3 from '../../assets/resource3.jpeg';
import { FaChevronRight } from 'react-icons/fa'; // Importing the arrow icons from react-icons

const Resource = () => {
    return (
        <div className="flex flex-col items-center my-10">
            <h2 className="text-4xl font-bold mb-6">Resources</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Grid for 1024px and 768px */}
                {/* Image 1: Blogs */}
                <div className="relative group w-full md:w-[300px] lg:w-[300px] mx-auto">
                    <Link to="/blogs"> {/* Wrap the entire Blogs card in a Link */}
                        <img
                            src={resource1}
                            alt="Blogs"
                            className="w-full h-36 object-cover transition-transform duration-300 transform group-hover:scale-105 opacity-50"
                        />
                        <div className="absolute text-xl top-3 left-3 text-accent font-semibold">Blogs</div>
                        <button
                            className="absolute bottom-2 right-2 h-10 w-10 flex items-center justify-center bg-white text-black rounded-full hover:bg-gray-200 transition focus:outline-none"
                        >
                            <FaChevronRight /> {/* Using FaChevronRight for the right arrow */}
                        </button>
                    </Link>
                </div>

                {/* Image 2: Media */}
                <div className="relative group w-full md:w-[300px] lg:w-[300px] mx-auto">
                    <Link to="/gallery">
                        <img
                            src={resource2}
                            alt="Media"
                            className="w-full h-36 object-cover transition-transform duration-300 transform group-hover:scale-105 opacity-50"
                        />
                        <div className="absolute text-xl top-3 left-3 text-accent font-semibold">Gallery</div>
                    </Link>
                    <Link to="/gallery">
                        <button
                            className="absolute bottom-2 right-2 h-10 w-10 flex items-center justify-center bg-white text-black rounded-full hover:bg-gray-200 transition focus:outline-none"
                        >
                            <FaChevronRight /> {/* Using FaChevronRight for the right arrow */}
                        </button>
                    </Link>
                </div>

                {/* Image 3: Guides */}
                <div className="relative group w-full md:w-[300px] md:col-span-2 md:mx-auto lg:w-[300px] lg:col-span-1 lg:mx-0 mx-auto"> {/* Center third card on medium devices */}
                    <Link to="/books">
                        <img
                            src={resource3}
                            alt="Guides"
                            className="w-full h-36 object-cover transition-transform duration-300 transform group-hover:scale-105 opacity-50"
                        />
                        <div className="absolute text-xl top-3 left-3 text-accent font-semibold">Books</div>
                    </Link>
                    <Link to="/books">
                        <button
                            className="absolute bottom-2 right-2 h-10 w-10 flex items-center justify-center bg-white text-black rounded-full hover:bg-gray-200 transition focus:outline-none"
                        >
                            <FaChevronRight /> {/* Using FaChevronRight for the right arrow */}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Resource;
