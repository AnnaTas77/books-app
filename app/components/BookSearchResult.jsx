"use client";
import { BookCard } from "./APIBookCard";


const BookSearchResult = ({ books, error}) => {

  if(error === false){
    return (
      <div className="book-title flex justify-center flex-col items-center p-2 ">
        <div className="flex flex-row flex-wrap w-full gap-2 justify-center items-center">
          {books !==  undefined? books.map((book) => {
                return <BookCard book={book} key={book.id} />;
              }) :  <p> No books found </p> }
        </div>
      </div>
    );
  } else {
    return <p>Loading Books</p>;
  }
};

export default BookSearchResult;
