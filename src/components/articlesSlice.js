import { createSlice } from "@reduxjs/toolkit";
import { Owl } from "./constantArticles/Owl";
import { Alligator } from "./constantArticles/Alligator";

const initialState = {
  categories: JSON.parse(localStorage.getItem("categories")) || {
    birds: {
      name: "Birds",
      items: [Owl],
    },
    reptiles: {
      name: "Reptiles",
      items: [Alligator],
    },
    fish: {
      name: "Fish",
      items: [],
    },
  },
  chosenCategory: "birds",
  status: "idle",
};

function updateLocalStorage(state) {
  localStorage.setItem("categories", JSON.stringify(state.categories));
}

export const articlesSlice = createSlice({
  name: "articlesSlice",
  initialState,
  reducers: {
    addArticle: (state, action) => {
      const newArticleId =
        Object.keys(initialState.categories)
          .map((key) => initialState.categories[key].items.length)
          .reduce((prev, curr) => prev + curr) + 1;

      state.categories[state.chosenCategory].items.push({
        ...action.payload,
        id: newArticleId.toString(),
      });

      updateLocalStorage(state);
    },
    chooseCategory: (state, action) => {
      state.chosenCategory = action.payload;
    },
  },
});

export const { addArticle, chooseCategory } = articlesSlice.actions;

export const categories = (state) => state.articles.categories;
export const choosenCategory = (state) => state.articles.chooseCategory;

export default articlesSlice.reducer;
