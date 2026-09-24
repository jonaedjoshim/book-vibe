import type { Metadata } from "next";
import PagesToReadChart from "@/components/books/PagesToReadChart";

export const metadata: Metadata = {
    title: "Pages to Read",
};

export default function PagesToReadPage() {
    return (
        <section className="pb-16 pt-4">
            <PagesToReadChart />
        </section>
    );
}