// GuidePage.jsx
import React from 'react';
import GuideDetails from './GuideDetails';
import BookList from './BookList';
import guideImage from '../../assets/books.png'; // Replace with the path to your guide image

const guideData = {
  image: guideImage,
  downloadLink: "/path/to/download/file.pdf",
  title: "Book Title: Lorem ipsum odor amet",
  author: "Author Name",
  description: "Lorem ipsum dolor sit amet consectetur. Risus erat risus feugiat ullamcorper elit potenti non...",
  tags: ["Spiritual", "Meditation"]
};

const similarBooks = [
  { title: "Book Title: Lorem ipsum odor amet", year: "2020" },
  { title: "Book Title: Lorem ipsum odor amet", year: "2020" },
  { title: "Book Title: Lorem ipsum odor amet", year: "2020" },
  { title: "Book Title: Lorem ipsum odor amet", year: "2020" }
];

const recommendedBooks = [
  { title: "Book Title: Lorem ipsum odor amet", year: "2020" },
  { title: "Book Title: Lorem ipsum odor amet", year: "2020" },
  { title: "Book Title: Lorem ipsum odor amet", year: "2020" },
  { title: "Book Title: Lorem ipsum odor amet", year: "2020" }
];

const essentialReads = [
  { title: "Book Title: Lorem ipsum odor amet", year: "2020" },
  { title: "Book Title: Lorem ipsum odor amet", year: "2020" },
  { title: "Book Title: Lorem ipsum odor amet", year: "2020" },
  { title: "Book Title: Lorem ipsum odor amet", year: "2020" }
];

const GuidePage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Guide Details Section */}
      <GuideDetails guide={guideData} />

      {/* Book Lists Section */}
      <BookList title="Similar Books" books={similarBooks} />
      <BookList title="Recommended by Us" books={recommendedBooks} />
      <BookList title="Essential Reads for Swadhyay" books={essentialReads} />
    </div>
  );
};

export default GuidePage;
