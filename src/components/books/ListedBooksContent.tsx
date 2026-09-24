"use client";

import { useState } from "react";
import type { Book } from "@/types/book";
import ListedBookCard from "./ListedBookCard";

type ListedBooksContentProps = {
    books: Book[];
};

type ActiveTab = "read" | "wishlist";

export default function ListedBooksContent({
    books,
}: ListedBooksContentProps) {
    const [activeTab, setActiveTab] = useState<ActiveTab>("read");

    const displayedBooks =
        activeTab === "read" ? books.slice(0, 5) : books.slice(5);

    return (
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
                    onClick={() => setActiveTab("read")}
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
                    onClick={() => setActiveTab("wishlist")}
                    className={`rounded-t-lg px-5 py-3 text-sm transition-colors ${activeTab === "wishlist"
                            ? "border-x border-t border-black/15 bg-white font-medium text-[#131313]"
                            : "text-[#131313]/50"
                        }`}
                >
                    Wishlist Books
                </button>
            </div>

            <div className="mt-8 space-y-5">
                {displayedBooks.length > 0 ? (
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
    );
}