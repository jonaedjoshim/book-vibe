import BookGrid from "@/components/books/BookGrid";
import HeroSection from "@/components/books/HeroSection";
import { books } from "@/data/books";

export default function HomePage() {
    return (
        <>
            <HeroSection />

            <section className="py-16 sm:py-20">
                <h2 className="mb-10 text-center font-serif text-4xl font-bold text-[#131313]">
                    Books
                </h2>

                <BookGrid books={books} />
            </section>
        </>
    );
}