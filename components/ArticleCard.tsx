import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import Image from "next/image";
import clockIcon from "@/assets/icons/clock.svg";
import { ArticleType } from "@/types/article";

const ArticleCard = ({ article = {} as ArticleType }) => {
    return (
        <Card
            sx={{
                maxWidth: 400,
                minWidth: 300,
                borderRadius: 2,
                boxShadow: "0px 2px 4px rgba(18, 18, 18, 0.2)",
                border: "1px solid #0F5098",
                padding: "16px",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 4px 8px rgba(18, 18, 18, 0.3)",
                },
            }}
        >
            <CardMedia
                sx={{
                    position: "relative",
                    height: 158,
                    overflow: "hidden",
                    borderRadius: 2,
                }}
            >
                <Image
                    src={`/images/articles/${article.image}`}
                    alt={article.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 400px) 100vw, 400px"
                    priority
                />
            </CardMedia>

            <CardContent sx={{ padding: 2 }}>
                <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                        fontWeight: "bold",
                        color: "#121212",
                        marginBottom: 1,
                    }}
                >
                    {article.title}
                </Typography>

                <Typography
                    variant="body2"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        color: "#9E9E9E",
                        marginBottom: 2,
                    }}
                >
                    <Image src={clockIcon} alt="clock icon" width={16} height={16} />
                    {article.period}
                </Typography>

                <Typography
                    variant="body2"
                    sx={{
                        color: "#767676",
                        lineHeight: 1.5,
                        marginBottom: 2,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                    }}
                >
                    {article.summary}
                </Typography>

                <Link href={`/${article.id}`} passHref>
                    <Button
                        variant="outlined"
                        sx={{
                            width: "100%",
                            color: "#1158A7",
                            borderColor: "#1158A7",
                            "&:hover": {
                                backgroundColor: "#1158A7",
                                color: "#fff",
                                borderColor: "#1158A7",
                            },
                        }}
                    >
                        ادامه
                    </Button>
                </Link>
            </CardContent>
        </Card>
    );
};

export default ArticleCard;