// src/declarations.d.ts

declare module "modern-normalize";

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_USER_DATA_KEY: string;
  readonly VITE_ARTICLE_API_URL: string;
  readonly VITE_PRODUCTS_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}