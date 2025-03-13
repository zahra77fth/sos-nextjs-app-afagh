"use client";
import { useEffect, useState } from "react";
import { getArticles } from "@/app/api/articles/api";
import { ArticleType } from "@/types/article";
import ArticleCard from "@/components/ArticleCard";
import Link from "next/link";
import { Skeleton, Container, Typography, Card, CardContent, Button, Box } from "@mui/material";

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
                console.error("Error fetching articles:", err);
                setError("Failed to load articles. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    if (loading) {
        return (
            <Container sx={{ minWidth: "100%", mx:1, mt: 4 }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    مقاله ها
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center" }}>
                    {[...Array(4)].map((_, index) => (
                        <Card key={index} sx={{ width: 380 }}>
                            <Skeleton variant="rectangular" height={180} />
                            <CardContent>
                                <Skeleton height={30} width="80%" />
                                <Skeleton height={20} width="100%" sx={{ my: 1 }} />
                                <Skeleton height={20} width="60%" />
                                <Skeleton height={40} width={80} sx={{ mt: 2 }} />
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Container>
        );
    }

    if (error) {
        return (
            <Container maxWidth="sm" sx={{ mt: 4, p: 3, textAlign: "center" }}>
                <Typography color="error" variant="h6" gutterBottom>
                    {error}
                </Typography>
                <Button component={Link} href="/" variant="contained" color="primary">
                    بازگشت به مقالات
                </Button>
            </Container>
        );
    }

    return (
        <Container sx={{ minWidth: "100%", mx:1, mt: 4 }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                مقاله ها
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center" }}>
                {articles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </Box>
        </Container>
    );
};

export default Home;
