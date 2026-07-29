import axios from "axios";
import type { Article, ApiArticle } from "../types/article";

interface ArticlesHttpResponse {
  hits: ApiArticle[];
}
const normalizeArticle = (article: ApiArticle): Article[] => {
  const title = article.title ?? article.story_title;
  const url = article.url ?? article.story_url;

  if (!title || !url) {
    return [];
  }

  return [{ objectID: article.objectID, title, url }];
};

const fetchArticle = async (topic: string): Promise<Article[]> => {
  const response = await axios.get<ArticlesHttpResponse>(
    `${import.meta.env.VITE_ARTICLE_API_URL}/search`,
    {
      params: {
        query: topic,
      },
    },
  );
  return response.data.hits.flatMap(normalizeArticle);
};
export default fetchArticle;