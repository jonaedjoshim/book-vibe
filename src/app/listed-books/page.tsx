import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Listed Books",
};

export default function ListedBooksPage() {
    return (
        <section className="py-10">
            <h1 className="text-3xl font-bold">Listed Books</h1>
        </section>
    );
}