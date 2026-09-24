"use client";

import { toast } from "react-toastify";
import { addBookToList } from "@/lib/book-storage";
import type { Book } from "@/types/book";

type BookActionsProps = {
    book: Book;
};

export default function BookActions({ book }: BookActionsProps) {
    const handleRead = () => {
        const added = addBookToList(book, "read");

        if (!added) {
            toast.info("This book is already in your read list.");
            return;
        }

        toast.success("Book added to your read list.");
    };

    const handleWishlist = () => {
        const added = addBookToList(book, "wishlist");

        if (!added) {
            toast.info("This book is already in your wishlist.");
            return;
        }

        toast.success("Book added to your wishlist.");
    };

    return (
        <div className="mt-8 flex flex-wrap gap-4">
            <button
                type="button"
                onClick={handleRead}
                className="btn border border-black/20 bg-white px-7 text-[#131313] shadow-none hover:bg-[#F3F3F3]"
            >
                Read
            </button>

            <button
                type="button"
                onClick={handleWishlist}
                className="btn border-none bg-[#59C6D2] px-7 text-white shadow-none hover:bg-[#4db5c0]"
            >
                Wishlist
            </button>
        </div>
    );
}