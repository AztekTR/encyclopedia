import React from "react";
import { Link } from "react-router-dom";

export function Category(props) {
  return (
    <li>
      <details>
        <summary className="categories-section__category-name">
          {props.name}
        </summary>
        <ul className="categories-section__inside-list">
          {props.categoryMap.length === 0
            ? "There are no articles in this category yet."
            : props.categoryMap.map((article) => (
                <li
                  className="categories-section__article-name"
                  key={article.id}
                >
                  <Link
                    to={`${process.env.PUBLIC_URL}/${props.name.toLowerCase()}/${article.id}`}
                  >
                    {article.header}
                  </Link>
                </li>
              ))}
        </ul>
      </details>
    </li>
  );
}
