import booksData from "./booksData.json";
import type { Book } from "@/types/book";

export const books: Book[] = booksData;

export const getBookById = (id: number) => {
  return books.find((book) => book.bookId === id);
};