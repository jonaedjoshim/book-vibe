import type { Book } from "@/types/book";

export type BookSortOption = "rating" | "pages" | "year";

export const sortBooks = (books: Book[], option: BookSortOption) => {
    return [...books].sort((firstBook, secondBook) => {
        if (option === "rating") {
            return secondBook.rating - firstBook.rating;
        }

        if (option === "pages") {
            return secondBook.totalPages - firstBook.totalPages;
        }

        return secondBook.yearOfPublishing - firstBook.yearOfPublishing;
    });
};