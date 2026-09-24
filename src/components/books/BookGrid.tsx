import type { Book } from "@/types/book";
import BookCard from "./BookCard";

type BookGridProps = {
    books: Book[];
};

export default function BookGrid({ books }: BookGridProps) {
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {books.map((book) => (
                <BookCard key={book.bookId} book={book} />
            ))}
        </div>
    );
}