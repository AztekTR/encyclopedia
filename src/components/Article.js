import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { categories } from "./articlesSlice";
import "./assets/css/Article.scss";

export function Article() {
  const categoriesMap = useSelector(categories);
  const { id, category } = useParams();

  const article = useMemo(
    () => {
      return categoriesMap[category].items.find((el) => el.id === id)
    },
    [categoriesMap, category, id]
  );

  console.log('article', article)

  return (
    <div className="article-section">
      <h1 className="main-header">{article.header}</h1>
      <div className="article-section__body">
        <img
          className="article-section__image"
          src={article.img}
          alt="animal"
        ></img>
        <p className="article-section__text">{article.text}</p>
      </div>
    </div>
  );
}
