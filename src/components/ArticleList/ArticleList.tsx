import css from "./ArticleList.module.css";
import type{ Article } from "../../types/article";

interface ArticleArrayProps {
  articles: Article[];
}
const ArticleList = ({ articles }: ArticleArrayProps) => {
  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {articles.map(({ objectID, url, title }) => (
          <li key={objectID} className={css.card}>
            <a href={url} target="_blank" className={css.link}>
              {title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
