import Image from "next/image";
import Link from "next/link";
import { HiOutlineMapPin } from "react-icons/hi2";
import { LuBookOpen, LuUsers } from "react-icons/lu";
import type { Book } from "@/types/book";

type ListedBookCardProps = {
    book: Book;
};

export default function ListedBookCard({ book }: ListedBookCardProps) {
    return (
        <article className="grid gap-6 rounded-2xl border border-black/10 p-5 sm:grid-cols-[180px_1fr]">
            <div className="flex min-h-52 items-center justify-center rounded-xl bg-[#F3F3F3] p-6">
                <Image
                    src={book.image}
                    alt={`Cover of ${book.bookName}`}
                    width={130}
                    height={180}
                    className="max-h-44 w-auto object-contain"
                />
            </div>

            <div className="min-w-0 py-1">
                <h2 className="font-serif text-2xl font-bold text-[#131313]">
                    {book.bookName}
                </h2>

                <p className="mt-2 text-sm font-medium text-[#131313]/80">
                    By : {book.author}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                    <span className="font-bold text-[#131313]">Tag</span>

                    {book.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-[#23BE0A]/5 px-4 py-2 font-medium text-[#23BE0A]"
                        >
                            #{tag}
                        </span>
                    ))}

                    <span className="flex items-center gap-2 text-[#131313]/70">
                        <HiOutlineMapPin className="size-5" />
                        Year of Publishing: {book.yearOfPublishing}
                    </span>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[#131313]/60">
                    <span className="flex items-center gap-2">
                        <LuUsers className="size-5" />
                        Publisher: {book.publisher}
                    </span>

                    <span className="flex items-center gap-2">
                        <LuBookOpen className="size-5" />
                        Page {book.totalPages}
                    </span>
                </div>

                <div className="my-4 border-t border-black/10" />

                <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-500">
                        Category: {book.category}
                    </span>

                    <span className="rounded-full bg-orange-50 px-4 py-2 text-sm font-medium text-orange-400">
                        Rating: {book.rating}
                    </span>

                    <Link
                        href={`/books/${book.bookId}`}
                        className="btn h-auto min-h-0 rounded-full border-none bg-[#23BE0A] px-5 py-2 text-sm text-white shadow-none hover:bg-[#1fa809]"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </article>
    );
}