"use client";
import Link from "next/link";
import AltImage from "@/public/images/alt-image.png";

export const BookCard = ({ book }) => {
    return (
        <Link href={`/singlebook/${book.id}`} className="bookCard">
            {book.volumeInfo.imageLinks ? (
                <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={`${book.volumeInfo.title}`} />
            ) : (
                <img src={AltImage} alt="default image" />
            )}
        </Link>
    );
};
