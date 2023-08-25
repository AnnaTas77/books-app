"use client";

import Link from "next/link";
import Trash from "@/public/images/trash-can.png";
import Image from "next/image";
import AltImage from "@/public/images/alt-image.png";

export const DBBookCard = ({ book, removeBook }) => {
    return (
        <div className="flex justify-content items-center flex-row relative">
            <Link href={`/singlebook/${book.bookID}`} className="bookCard min-w-max">
                {book.bookInfo.imageLinks ? (
                    <img src={book.bookInfo.imageLinks.smallThumbnail} alt={`${book.bookInfo.title}`} />
                ) : (
                    <Image src={AltImage} alt="No cover available" />
                )}
            </Link>
            <button
                onClick={() => removeBook(book, book.bookID)}
                className="absolute top-3 left-40 text-white bg-white p-2 rounded-full"
            >
                <Image src={Trash} alt="Image of a trash can" width={20} height={20} />
            </button>
        </div>
    );
};
