import React from 'react'
// import Guide from '../Components/Guide/books'
// import GuidePage from '../Components/Guide/GuidePage';
import Banner from "../Components/Banner";
import BookDetails from '../Components/Guide/BookDetails';
// import BooksSection from '../Components/Guide/BooksSection';
// import BookList from '../Components/Guide/BookList';


const Books = () => {
  return (
    <div className="App">
    <Banner title="BOOKS" />
    <BookDetails/>
    {/* <BooksSection /> */}
    

      {/* <GuidePage /> */}
    </div>
  )
}

export default Books