export interface Article {
  objectID: string;
  title: string;
  url: string;
}

export interface ApiArticle {
  objectID: string;
  title?: string | null;
  url?: string | null;
  story_title?: string | null;
  story_url?: string | null;
}