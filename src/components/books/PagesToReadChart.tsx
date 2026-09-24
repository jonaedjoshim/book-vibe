"use client";

import { useEffect, useState } from "react";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    LabelList,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { getStoredBooks } from "@/lib/book-storage";
import type { Book } from "@/types/book";

const colors = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#FF0000",
    "#8884D8",
    "#EC4899",
];

export default function PagesToReadChart() {
    const [books, setBooks] = useState<Book[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setBooks(getStoredBooks("read"));
        setIsLoaded(true);
    }, []);

    if (!isLoaded) {
        return (
            <div className="flex min-h-150 items-center justify-center rounded-3xl bg-[#F3F3F3]">
                <span className="loading loading-spinner loading-lg text-[#23BE0A]" />
            </div>
        );
    }

    if (books.length === 0) {
        return (
            <div className="flex min-h-150 flex-col items-center justify-center rounded-3xl bg-[#F3F3F3] px-6 text-center">
                <h2 className="text-2xl font-bold text-[#131313]">
                    No reading data yet
                </h2>

                <p className="mt-3 text-[#131313]/60">
                    Add books to your read list to see their page counts here.
                </p>
            </div>
        );
    }

    return (
        <div className="h-162.5 w-full rounded-3xl bg-[#F3F3F3] px-4 py-10 sm:px-8 lg:px-12">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={books}
                    margin={{
                        top: 40,
                        right: 20,
                        left: 0,
                        bottom: 50,
                    }}
                >
                    <CartesianGrid strokeDasharray="4 4" stroke="#D9D9D9" />

                    <XAxis
                        dataKey="bookName"
                        tick={{ fill: "#717171", fontSize: 12 }}
                        tickLine={false}
                        axisLine={false}
                        interval={0}
                        angle={-10}
                        textAnchor="end"
                    />

                    <YAxis
                        tick={{ fill: "#717171", fontSize: 12 }}
                        tickLine={false}
                        axisLine={false}
                    />

                    <Tooltip
                        cursor={{ fill: "rgba(0, 0, 0, 0.03)" }}
                        formatter={(value) => [`${value} pages`, "Pages"]}
                    />

                    <Bar dataKey="totalPages" radius={[12, 12, 0, 0]}>
                        {books.map((book, index) => (
                            <Cell
                                key={book.bookId}
                                fill={colors[index % colors.length]}
                            />
                        ))}

                        <LabelList
                            dataKey="totalPages"
                            position="top"
                            fill="#131313"
                            fontSize={14}
                            fontWeight={600}
                        />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}