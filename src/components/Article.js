import React from "react";
import "./assets/css/Article.scss";

export function Article(props) {
  return (
    <div className="article-section">
      <h1 className="main-header">{props.header}</h1>
      <div className="article-section__body">
        <img
          className="article-section__image"
          src={props.img}
          alt="animal"
        ></img>
        <p className="article-section__text">{props.text}</p>
      </div>
    </div>
  );
}
