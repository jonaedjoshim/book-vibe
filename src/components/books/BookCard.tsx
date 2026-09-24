import Image from "next/image";
import Link from "next/link";
import { CiStar } from "react-icons/ci";
import type { Book } from "@/types/book";

type BookCardProps = {
    book: Book;
};

export default function BookCard({ book }: BookCardProps) {
    return (
        <article className="rounded-2xl border border-black/10 bg-white p-5 transition-shadow hover:shadow-md">
            <Link
                href={`/books/${book.bookId}`}
                className="block"
                aria-label={`View details for ${book.bookName}`}
            >
                <div className="relative flex h-60 items-center justify-center overflow-hidden rounded-xl bg-[#F3F3F3] p-8">
                    <Image
                        src={book.image}
                        alt={`Cover of ${book.bookName}`}
                        width={150}
                        height={210}
                        className="h-full w-auto object-contain transition-transform duration-300 hover:scale-105"
                    />
                </div>

                <div className="mt-5">
                    <div className="flex flex-wrap gap-3">
                        {book.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full bg-[#23BE0A]/5 px-4 py-2 text-sm font-medium text-[#23BE0A]"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h2 className="mt-4 font-serif text-2xl font-bold leading-tight text-[#131313]">
                        {book.bookName}
                    </h2>

                    <p className="mt-3 text-sm font-medium text-[#131313]/80">
                        By : {book.author}
                    </p>

                    <div className="my-4 border-t border-dashed border-black/15" />

                    <div className="flex items-center justify-between gap-4 text-sm font-medium text-[#131313]/80">
                        <span>{book.category}</span>

                        <span className="flex items-center gap-2">
                            {book.rating}
                            <CiStar className="size-5" />
                        </span>
                    </div>
                </div>
            </Link>
        </article>
    );
}