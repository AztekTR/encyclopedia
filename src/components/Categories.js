import React from "react";
import { useSelector } from "react-redux";
import { categories } from "./articlesSlice";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { Category } from "./Category";
import "./assets/css/Categories.scss";

function Categories() {
  const categoriesMap = useSelector(categories);

  return (
    <div className="categories-section">
      <h1 className="main-header">Categories</h1>
      <div className="categories-section__body">
        <ul className="categories-section__outside-list">
          <Category
            name={"Birds"}
            categoryMap={[
              <li key={1} className="categories-section__article-name">
                <Link to={`${process.env.PUBLIC_URL}/article_1`}>Owl</Link>
              </li>,
            ].concat(categoriesMap["birds"])}
          />
          <Category
            name={"Reptiles"}
            categoryMap={[
              <li key={2} className="categories-section__article-name">
                <Link to={`${process.env.PUBLIC_URL}/article_2`}>
                  Alligator
                </Link>
              </li>,
            ].concat(categoriesMap["reptiles"])}
          />
          <Category name={"Fish"} categoryMap={categoriesMap["fish"]} />
        </ul>
      </div>
    </div>
  );
}
export default withRouter(Categories);
