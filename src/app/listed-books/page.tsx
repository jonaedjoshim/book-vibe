import type { Metadata } from "next";
import ListedBooksContent from "@/components/books/ListedBooksContent";

export const metadata: Metadata = {
    title: "Listed Books",
};

export default function ListedBooksPage() {
    return (
        <section className="pb-16">
            <div className="rounded-2xl bg-[#F3F3F3] px-6 py-8 text-center">
                <h1 className="text-3xl font-bold text-[#131313]">Books</h1>
            </div>

            <ListedBooksContent />
        </section>
    );
}