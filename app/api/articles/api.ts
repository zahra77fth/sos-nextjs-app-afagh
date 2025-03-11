import {ArticleType} from "@/types/article";

export const getArticles = async (): Promise<ArticleType[]> => {
    try {
        const response = await fetch('/api/articles');
        if (!response.ok) {
            throw new Error('Failed to fetch articles');
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error("Error fetching articles:", error);
        throw new Error('Failed to fetch articles');
    }
};