import { createSlice } from "@reduxjs/toolkit";
import { Route, Link } from "react-router-dom";

import { Article } from "./Article";
import { Owl } from "./constantArticles/Owl";
import { Alligator } from "./constantArticles/Alligator"

const initialState = {
  value: "",
  categories: {
    birds: [],
    reptiles: [],
    fish: [],
  },
  chosenCategory: "birds",
  contentArticles: [
    <Route path={"/article_1"}>
      <Article header={Owl().header} img={Owl().img} text={Owl().text} />,
    </Route>,
    <Route path={"/article_2"}>
      <Article header={Alligator().header} img={Alligator().img} text={Alligator().text} />
    </Route>
  ],
  articleCounter: 2,
  status: "idle",
};

export const articlesSlice = createSlice({
  name: "articlesSlice",
  initialState,
  reducers: {
    addArticle: (state, action) => {
      state.categories[state.chosenCategory].push(
        <li
          className="categories-section__article-name"
          key={state.articleCounter}
        >
          <Link to={`/article_${state.articleCounter}`}>{action.payload}</Link>
        </li>
      );
    },
    addContentArticle: (state, action) => {
      state.contentArticles.push(
        <Route path={`/article_${state.articleCounter}`}>
          <Article
            header={action.payload["header"]}
            img={action.payload["img"]}
            text={action.payload["text"]}
          />
        </Route>
      );
    },
    chooseCategory: (state, action) => {
      state.chosenCategory = action.payload;
    },
    incrementArticleCounter: (state) => {
      state.articleCounter += 1;
    },
  },
});

export const {
  addArticle,
  addContentArticle,
  chooseCategory,
  incrementArticleCounter,
} = articlesSlice.actions;

export const categories = (state) => state.articles.categories;
export const contentArticles = (state) => state.articles.contentArticles;
export const choosenCategory = (state) => state.articles.chooseCategory;
export const articleCounter = (state) => state.articles.articleCounter;

export default articlesSlice.reducer;
