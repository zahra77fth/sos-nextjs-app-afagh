import type { Metadata } from "next";
import "@/styles/globals.css";
import localFont from 'next/font/local';
import Header from "@/components/Header";

const IRANSansXV = localFont({ src: '../assets/fonts/IRANSansXV.woff2' })

export const metadata: Metadata = {
    title: "Iran Assistance - SOS",
    description: "مقالات و خدمات ایران کمک رسان",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fa" dir="rtl">
            <body className={`${IRANSansXV.className}`}>
            <Header />
                <main className="container mx-auto px-4 py-6">{children}</main>
            </body>
        </html>
    );
}
