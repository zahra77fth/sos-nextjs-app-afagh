import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Providers from './Providers';

export const metadata: Metadata = {
    title: "Iran Assistance - SOS",
    description: "مقالات و خدمات ایران کمک رسان",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fa" dir="rtl">
        <body>
        <Providers>
            <Header />
            <main>{children}</main>
        </Providers>
        </body>
        </html>
    );
}