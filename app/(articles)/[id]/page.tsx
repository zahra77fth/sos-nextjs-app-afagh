import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import { articles } from "@/lib/data";

interface ArticlePageProps {
    params: {
        id: string;
    };
}

const ArticlePage = ({ params }: ArticlePageProps) => {
    const article = articles.find((article) => article.id === parseInt(params.id));

    if (!article) {
        return notFound();
    }

    return (
        <div
            style={{
                maxWidth: 800,
                margin: "0 auto",
                padding: "24px",
                backgroundColor: "#fff",
                borderRadius: 8,
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            }}
        >
            <Image
                src={`/images/articles/${article.image}`}
                alt={article.title}
                width={800}
                height={400}
                style={{
                    borderRadius: 8,
                    objectFit: "cover",
                }}
                priority
            />

            <Typography
                variant="h4"
                component="h1"
                sx={{
                    fontWeight: "bold",
                    color: "#121212",
                    marginTop: 3,
                    marginBottom: 2,
                }}
            >
                {article.title}
            </Typography>

            <Typography
                variant="body1"
                sx={{
                    color: "#767676",
                    lineHeight: 1.6,
                    marginBottom: 3,
                }}
            >
                {article.summary}
            </Typography>

            <Link href="/" passHref>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "#1158A7",
                        color: "#fff",
                        "&:hover": {
                            backgroundColor: "#0F5098",
                        },
                    }}
                >
                    بازگشت به صفحه اصلی
                </Button>
            </Link>
        </div>
    );
};

export default ArticlePage;