import type { Book } from "@/types/book";

export type BookListType = "read" | "wishlist";

const storageKeys: Record<BookListType, string> = {
    read: "book-vibe-read-books",
    wishlist: "book-vibe-wishlist-books",
};

export const getStoredBooks = (type: BookListType): Book[] => {
    if (typeof window === "undefined") {
        return [];
    }

    const storedBooks = localStorage.getItem(storageKeys[type]);

    if (!storedBooks) {
        return [];
    }

    try {
        return JSON.parse(storedBooks) as Book[];
    } catch {
        return [];
    }
};

export const addBookToList = (book: Book, type: BookListType) => {
    const books = getStoredBooks(type);
    const exists = books.some((item) => item.bookId === book.bookId);

    if (exists) {
        return false;
    }

    localStorage.setItem(storageKeys[type], JSON.stringify([...books, book]));

    return true;
};