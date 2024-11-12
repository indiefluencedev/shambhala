// BookList.jsx
import React from 'react';
import PropTypes from 'prop-types';
import guidesImage from '../../assets/guides.png'; // Replace with the correct path to guides.png
import '../Styles/Booklist.css'; // Import custom CSS for the scrollbar

const BookList = ({ categoryTitle, books }) => {
  return (
    <div className="my-8 text-left">
      <h2 className="text-xl font-semibold mb-4">{categoryTitle}</h2>
      
      {/* Scrollable Container */}
      <div className="overflow-x-auto custom-scrollbar py-4">
        <div className="flex space-x-6 pr-8" style={{ width: 'fit-content' }}>
          {books.map((book, index) => (
            <div
              key={index}
              className="flex flex-col items-start w-[180px] mr-4 last:mr-0"
              style={{
                flex: '0 0 auto',
              }}
            >
              <img
                src={guidesImage}
                alt={book.title}
                className="w-[200px] h-[280px] object-cover rounded-lg shadow-md mb-2"
              />
              <p className="text-sm font-semibold text-gray-700">{book.title}</p>
              <p className="text-xs text-gray-500">{book.year}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* <hr className="border-t border-gray-300 mt-4" /> */}
    </div>
  );
};

BookList.propTypes = {
  categoryTitle: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
    })
  ).isRequired,
};

BookList.defaultProps = {
  categoryTitle: "Default Category Title",
};

export default BookList;
