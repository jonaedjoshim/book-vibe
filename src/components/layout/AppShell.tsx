import type { ReactNode } from "react";
import Navbar from "./Navbar";

type AppShellProps = {
    children: ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
    return (
        <div className="mx-auto min-h-screen w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <Navbar />
            <main>{children}</main>
        </div>
    );
}