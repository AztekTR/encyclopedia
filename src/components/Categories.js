import React from "react";
import { useSelector } from "react-redux";
import { categories } from "./articlesSlice";
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
          {Object.keys(categoriesMap).map((key) => (
            <Category
              key={categoriesMap[key].name}
              name={categoriesMap[key].name}
              categoryMap={categoriesMap[key].items}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
export default withRouter(Categories);
