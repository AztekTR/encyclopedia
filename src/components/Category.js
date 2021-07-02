import React from "react";

export function Category(props) {
  return (
    <li>
      <details>
        <summary className="categories-section__category-name">{props.name}</summary>
        <ul className="categories-section__inside-list">
          {props.categoryMap}
        </ul>
      </details>
    </li>
  );
}