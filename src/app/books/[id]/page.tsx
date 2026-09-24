import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { books, getBookById } from "@/data/books";

type BookDetailsPageProps = {
    params: Promise<{
        id: string;
    }>;
};

export function generateStaticParams() {
    return books.map((book) => ({
        id: String(book.bookId),
    }));
}

export async function generateMetadata({
    params,
}: BookDetailsPageProps): Promise<Metadata> {
    const { id } = await params;
    const book = getBookById(Number(id));

    if (!book) {
        return {
            title: "Book Not Found",
        };
    }

    return {
        title: book.bookName,
        description: `View details about ${book.bookName} by ${book.author}.`,
    };
}

export default async function BookDetailsPage({
    params,
}: BookDetailsPageProps) {
    const { id } = await params;
    const book = getBookById(Number(id));

    if (!book) {
        notFound();
    }

    return (
        <section className="grid gap-10 py-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex min-h-125 items-center justify-center rounded-2xl bg-[#F3F3F3] p-10 sm:min-h-150">
                <Image
                    src={book.image}
                    alt={`Cover of ${book.bookName}`}
                    width={400}
                    height={560}
                    priority
                    className="max-h-125 w-auto object-contain"
                />
            </div>

            <div className="flex flex-col justify-center">
                <h1 className="font-serif text-4xl font-bold leading-tight text-[#131313] sm:text-5xl">
                    {book.bookName}
                </h1>

                <p className="mt-4 text-lg font-medium text-[#131313]/80">
                    By : {book.author}
                </p>

                <div className="my-6 border-t border-black/10" />

                <p className="text-xl font-medium text-[#131313]/80">
                    {book.category}
                </p>

                <div className="my-6 border-t border-black/10" />

                <p className="leading-7 text-[#131313]/70">
                    <span className="font-bold text-[#131313]">Review : </span>
                    {book.review}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                    <span className="font-bold text-[#131313]">Tag</span>

                    {book.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-[#23BE0A]/5 px-4 py-2 font-medium text-[#23BE0A]"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                <div className="my-6 border-t border-black/10" />

                <dl className="grid grid-cols-[minmax(140px,200px)_1fr] gap-x-6 gap-y-4">
                    <dt className="text-[#131313]/60">Number of Pages:</dt>
                    <dd className="font-semibold text-[#131313]">{book.totalPages}</dd>

                    <dt className="text-[#131313]/60">Publisher:</dt>
                    <dd className="font-semibold text-[#131313]">{book.publisher}</dd>

                    <dt className="text-[#131313]/60">Year of Publishing:</dt>
                    <dd className="font-semibold text-[#131313]">
                        {book.yearOfPublishing}
                    </dd>

                    <dt className="text-[#131313]/60">Rating:</dt>
                    <dd className="font-semibold text-[#131313]">{book.rating}</dd>
                </dl>

                <div className="mt-8 flex flex-wrap gap-4">
                    <button
                        type="button"
                        className="btn border border-black/20 bg-white px-7 text-[#131313] shadow-none hover:bg-[#F3F3F3]"
                    >
                        Read
                    </button>

                    <button
                        type="button"
                        className="btn border-none bg-[#59C6D2] px-7 text-white shadow-none hover:bg-[#4db5c0]"
                    >
                        Wishlist
                    </button>
                </div>
            </div>
        </section>
    );
}