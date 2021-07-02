import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "../components/articlesSlice";

export const store = configureStore({
  reducer: {
    articles: articleReducer,
  },
});
