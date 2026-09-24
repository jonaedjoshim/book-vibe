import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="grid items-center gap-10 rounded-3xl bg-[#F3F3F3] px-6 py-12 md:grid-cols-2 md:px-12 lg:px-20 lg:py-16">
            <div className="order-2 md:order-1">
                <h1 className="max-w-xl font-serif text-4xl font-bold leading-tight text-[#131313] sm:text-5xl lg:text-6xl">
                    Books to freshen up your bookshelf
                </h1>

                <Link
                    href="/listed-books"
                    className="btn mt-8 border-none bg-[#23BE0A] px-7 text-white shadow-none hover:bg-[#1fa809]"
                >
                    View The List
                </Link>
            </div>

            <div className="order-1 flex justify-center md:order-2">
                <Image
                    src="/images/hero_img.jpg"
                    alt="Featured book"
                    width={240}
                    height={340}
                    priority
                    className="h-72 w-auto object-contain sm:h-80 lg:h-96"
                />
            </div>
        </section>
    );
}