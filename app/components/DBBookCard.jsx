"use client";
import { arrayRemove } from "firebase/firestore";

import Link from "next/link";

export const DBBookCard = ({ book, removeBook }) => {
    console.log(book)
  return (
    <div className="bg-red-500 flex justify-content items-center flex-row relative" >
      <Link href={`http://localhost:3000/singlebook/${book.bookID}`} className="bookCard">
      {book.bookInfo.imageLinks ?
      <img src={book.bookInfo.imageLinks.smallThumbnail} alt={`${book.bookInfo.title}`}/> : <img src="https://img.freepik.com/free-vector/open-blue-book-white_1308-69339.jpg?w=826&t=st=1[…]4e6e1b459442a3a22f4ff98073ddebe88a1700930b1c10a1b41660b511b70"/>}
      </Link>
      <button onClick={()=>removeBook(book.bookID)} className="absolute top-3 left-40 text-white">X</button>
    </div>
  );
};
