"use client";

import { useEffect, useMemo, useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { getStoredBooks } from "@/lib/book-storage";
import {
    sortBooks,
    type BookSortOption,
} from "@/lib/book-utils";
import type { Book } from "@/types/book";
import ListedBookCard from "./ListedBookCard";

type ActiveTab = "read" | "wishlist";

const sortLabels: Record<BookSortOption, string> = {
    rating: "Rating",
    pages: "Number of pages",
    year: "Publisher year",
};

export default function ListedBooksContent() {
    const [activeTab, setActiveTab] = useState<ActiveTab>("read");
    const [readBooks, setReadBooks] = useState<Book[]>([]);
    const [wishlistBooks, setWishlistBooks] = useState<Book[]>([]);
    const [sortOption, setSortOption] = useState<BookSortOption | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setReadBooks(getStoredBooks("read"));
        setWishlistBooks(getStoredBooks("wishlist"));
        setIsLoaded(true);
    }, []);

    const activeBooks = activeTab === "read" ? readBooks : wishlistBooks;

    const displayedBooks = useMemo(() => {
        if (!sortOption) {
            return activeBooks;
        }

        return sortBooks(activeBooks, sortOption);
    }, [activeBooks, sortOption]);

    const handleTabChange = (tab: ActiveTab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <div className="mt-8 flex justify-center">
                <div className="dropdown">
                    <button
                        type="button"
                        tabIndex={0}
                        className="btn border-none bg-[#23BE0A] px-6 text-white shadow-none hover:bg-[#1fa809]"
                    >
                        Sort By
                        <IoChevronDown className="size-4" aria-hidden="true" />
                    </button>

                    <ul
                        tabIndex={-1}
                        className="menu dropdown-content z-20 mt-2 w-52 rounded-xl bg-[#F3F3F3] p-2 shadow-lg"
                    >
                        {(Object.keys(sortLabels) as BookSortOption[]).map((option) => (
                            <li key={option}>
                                <button
                                    type="button"
                                    onClick={() => setSortOption(option)}
                                    className={
                                        sortOption === option
                                            ? "font-semibold text-[#23BE0A]"
                                            : ""
                                    }
                                >
                                    {sortLabels[option]}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <section className="mt-10">
                <div
                    role="tablist"
                    aria-label="Book lists"
                    className="flex border-b border-black/15"
                >
                    <button
                        type="button"
                        role="tab"
                        aria-selected={activeTab === "read"}
                        onClick={() => handleTabChange("read")}
                        className={`rounded-t-lg px-5 py-3 text-sm transition-colors ${activeTab === "read"
                                ? "border-x border-t border-black/15 bg-white font-medium text-[#131313]"
                                : "text-[#131313]/50"
                            }`}
                    >
                        Read Books
                    </button>

                    <button
                        type="button"
                        role="tab"
                        aria-selected={activeTab === "wishlist"}
                        onClick={() => handleTabChange("wishlist")}
                        className={`rounded-t-lg px-5 py-3 text-sm transition-colors ${activeTab === "wishlist"
                                ? "border-x border-t border-black/15 bg-white font-medium text-[#131313]"
                                : "text-[#131313]/50"
                            }`}
                    >
                        Wishlist Books
                    </button>
                </div>

                <div className="mt-8 space-y-5">
                    {!isLoaded ? (
                        <div className="flex justify-center py-16">
                            <span className="loading loading-spinner loading-lg text-[#23BE0A]" />
                        </div>
                    ) : displayedBooks.length > 0 ? (
                        displayedBooks.map((book) => (
                            <ListedBookCard key={book.bookId} book={book} />
                        ))
                    ) : (
                        <div className="rounded-2xl border border-dashed border-black/15 px-6 py-16 text-center text-[#131313]/60">
                            No books found in this list.
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}