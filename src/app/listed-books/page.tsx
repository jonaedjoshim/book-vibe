import type { Metadata } from "next";
import { IoChevronDown } from "react-icons/io5";
import ListedBooksContent from "@/components/books/ListedBooksContent";
import { books } from "@/data/books";

export const metadata: Metadata = {
    title: "Listed Books",
};

export default function ListedBooksPage() {
    return (
        <section className="pb-16">
            <div className="rounded-2xl bg-[#F3F3F3] px-6 py-8 text-center">
                <h1 className="text-3xl font-bold text-[#131313]">Books</h1>
            </div>

            <div className="mt-8 flex justify-center">
                <button
                    type="button"
                    className="btn border-none bg-[#23BE0A] px-6 text-white shadow-none hover:bg-[#1fa809]"
                >
                    Sort By
                    <IoChevronDown className="size-4 mt-px" aria-hidden="true" />
                </button>
            </div>

            <ListedBooksContent books={books} />
        </section>
    );
}