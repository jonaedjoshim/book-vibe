"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Listed Books",
        href: "/listed-books",
    },
    {
        label: "Pages to Read",
        href: "/pages-to-read",
    },
];

export default function Navbar() {
    const pathname = usePathname();

    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === "/";
        }

        return pathname.startsWith(href);
    };

    return (
        <header className="py-6">
            <nav className="flex items-center justify-between gap-6">
                <Link
                    href="/"
                    className="shrink-0 text-2xl font-bold text-[#131313]"
                >
                    Book Vibe
                </Link>

                <div className="hidden items-center gap-2 md:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`rounded-lg border px-5 py-3 text-base transition-colors ${isActive(item.href)
                                    ? "border-[#23BE0A] font-semibold text-[#23BE0A]"
                                    : "border-transparent text-[#131313]/80 hover:text-[#23BE0A]"
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                <div className="hidden shrink-0 items-center gap-3 sm:flex">
                    <button
                        type="button"
                        className="btn border-none bg-[#23BE0A] px-6 text-white shadow-none hover:bg-[#1fa809]"
                    >
                        Sign In
                    </button>

                    <button
                        type="button"
                        className="btn border-none bg-[#59C6D2] px-6 text-white shadow-none hover:bg-[#4db5c0]"
                    >
                        Sign Up
                    </button>
                </div>

                <div className="dropdown dropdown-end md:hidden">
                    <button
                        type="button"
                        tabIndex={0}
                        aria-label="Open navigation menu"
                        className="btn btn-square btn-ghost"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="size-6"
                            aria-hidden="true"
                        >
                            <path d="M4 6h16" />
                            <path d="M4 12h16" />
                            <path d="M4 18h16" />
                        </svg>
                    </button>

                    <ul
                        tabIndex={-1}
                        className="menu dropdown-content z-50 mt-3 w-56 rounded-box border border-black/10 bg-white p-2 shadow-lg"
                    >
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={
                                        isActive(item.href)
                                            ? "font-semibold text-[#23BE0A]"
                                            : "text-[#131313]/80"
                                    }
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}

                        <li className="mt-2 sm:hidden">
                            <button
                                type="button"
                                className="bg-[#23BE0A] font-semibold text-white hover:bg-[#1fa809]"
                            >
                                Sign In
                            </button>
                        </li>

                        <li className="mt-1 sm:hidden">
                            <button
                                type="button"
                                className="bg-[#59C6D2] font-semibold text-white hover:bg-[#4db5c0]"
                            >
                                Sign Up
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}