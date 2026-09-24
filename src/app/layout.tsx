import type { Metadata } from "next";
import AppShell from "@/components/layout/AppShell";
import ToastProvider from "@/components/ui/ToastProvider";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Book Vibe",
    template: "%s | Book Vibe",
  },
  description: "Discover books and organize your reading journey.",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
        <ToastProvider />
      </body>
    </html>
  );
}