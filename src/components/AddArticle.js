import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addArticle,
  addContentArticle,
  chooseCategory,
  incrementArticleCounter,
} from "./articlesSlice";
import "./assets/css/AddArticle.scss";

export function AddArticle() {
  const imageFormatRE = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i;
  const dispatch = useDispatch();

  const [articleHeader, setArticleHeader] = useState("");
  const [articleImage, setArticleImage] = useState("");
  const [articleText, setArticleText] = useState("");
  const [articleContent, setArticleContent] = useState({
    header: articleHeader,
    img: articleImage,
    text: articleText,
  });

  const dispatchNewArticle = () => {
    setArticleContent(
      Object.assign(articleContent, {
        header: articleHeader,
        img: articleImage,
        text: articleText,
      })
    );
    dispatch(incrementArticleCounter());
    dispatch(addArticle(articleHeader));
    dispatch(addContentArticle(articleContent));
  };

  const formValidator = () => {
    if (!(articleHeader && articleImage && articleText)) {
      alert("All fields must be filled!");
    } else if (articleHeader.length > 50) {
      alert("Article header longer then 50 symbols.");
    } else if (!imageFormatRE.test(articleImage)) {
      alert("Invalid image URL.");
    } else {
      dispatchNewArticle();
    }
  };

  return (
    <div className="add-article-section">
      <h1 className="main-header">You can add new articles here</h1>

      <div className="form-container">
        <div className="form-container__small-inputs">
          <label className="form-container__label" htmlFor="category">
            Choose category to add
          </label>
          <select
            id="category"
            className="form-container__select"
            onChange={(e) => dispatch(chooseCategory(e.target.value))}
          >
            <option value="birds">Birds</option>
            <option value="reptiles">Reptiles</option>
            <option value="fish">Fish</option>
          </select>

          <label className="form-container__label" htmlFor="article-header">
            Enter the name of the animal
          </label>
          <input
            id="article-header"
            className="form-container__input"
            type="text"
            placeholder="Article header"
            onChange={(e) => setArticleHeader(e.target.value)}
          ></input>

          <label className="form-container__label" htmlFor="article-image">
            Enter the URL of the animal image
          </label>
          <input
            id="article-image"
            className="form-container__input"
            type="text"
            placeholder="Image for the article"
            onChange={(e) => setArticleImage(e.target.value)}
          ></input>
        </div>

        <div className="form-container__big-inputs">
          <label className="form-container__label" htmlFor="article-text">
            Tell us about this animal:
          </label>
          <textarea
            className="form-container__textarea"
            id="article-text"
            rows="11"
            cols="40"
            defaultValue="It was a big and black..."
            onChange={(e) => setArticleText(e.target.value)}
          ></textarea>
        </div>
      </div>

      <button
        className="add-article-section__add-button"
        onClick={formValidator}
      >
        Add
      </button>
    </div>
  );
}
