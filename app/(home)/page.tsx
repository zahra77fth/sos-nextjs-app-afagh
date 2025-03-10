"use client";
import { getArticles } from "@/app/api/articles/api";
import { ArticleType } from "@/types/article";
import ArticleCard from "@/components/ArticleCard"
import Link from "next/link";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/shared/Skeleton";
import { ErrorMessage } from "@/components/shared/ErrorMessage";

const Home = () => {
    const [articles, setArticles] = useState<ArticleType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const data = await getArticles();
                setArticles(data);
            } catch (err) {
                setError("Failed to load articles. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    if (loading) {
        return (
            <div className="max-w-7xl mx-auto p-6 mt-4">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">مقالات</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {[...Array(8)].map((_, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg border border-gray-200">
                            <Skeleton className="h-48 w-full rounded-t-lg" />
                            <div className="p-4">
                                <Skeleton className="h-6 w-3/4 mb-4" />
                                <Skeleton className="h-4 w-full mb-2" />
                                <Skeleton className="h-4 w-2/3 mb-4" />
                                <Skeleton className="h-10 w-24" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg border border-gray-200 mt-4">
                <ErrorMessage message={error} />
                <Link
                    href="/"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                    بازگشت به مقالات
                </Link>
            </div>
        );
    }

    return (
        <main className="mx-auto p-6 mt-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">مقالات</h1>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {articles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </div>
        </main>
    );
};

export default Home;