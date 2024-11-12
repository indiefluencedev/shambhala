import React from 'react';
import guideImage from '../../assets/guides.png'; // Adjust the path if necessary
import BookList from './BookList';
import booksData from './BookData.json';

const BookDetails = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 flex flex-col lg:flex-row items-start gap-8">
      {/* Left Side: Image and Download Button */}
      <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start">
      <img
          src={guideImage} // Use the imported image here
          alt="Book Cover"
          className="w-[300px] h-full shadow-lg mb-4"
      />
      <a
          href="path/to/your/download" // Replace with your download link
          download
          className="bg-[#348479] text-white py-2 px-6 rounded-full text-center w-[300px] hover:bg-green-700 transition duration-300"
      >
          Download Here
      </a>
      </div>


      {/* Right Side: Text Content */}
      <div className="w-full lg:w-2/3">
        {/* Tags */}
        <div className="flex gap-2 mb-2">
          <span className="bg-gray-200 text-gray-700 text-[12px] px-3 py-2  rounded-full">Spiritual</span>
          <span className="bg-gray-200 text-gray-700 text-[12px] px-3 py-2  rounded-full">Meditation</span>
        </div>
        
        {/* Title and Author */}
        <h1 className="text-6xl font-semibold mb-4">Book Title: Lorem ipsum odor amet</h1> 
        <p className="text-gray-500 text-lg mb-4">By <span className="text-gray-700 font-semibold">Author Name</span></p> 
        
        {/* Description */}
        <p className="text-gray-700 leading-relaxed mb-4 text-[16px]">
          Lorem ipsum dolor sit amet consectetur. Risus erat risus feugiat ullamcorper elit potenti non. 
          Non scelerisque erat dignissim massa ut tristique. Metus ut semper cras pharetra vestibulum ut leo fermentum. 
          Mus elementum egestas in sit eu iaculis convallis ligula.
        </p>

         {/* Call Book list section  */}
        <div> 
        <BookList categoryTitle="Recommended by us" books={booksData.RecommendedByUs} />
        <BookList categoryTitle="Similar Books" books={booksData.SimilarBooks} />
        <BookList categoryTitle="Books by Author Name" books={booksData.BooksByAuthor} />
        <BookList categoryTitle="Essential Reads for Swadhyay" books={booksData.EssentialReads} />
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
