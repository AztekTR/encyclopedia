import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import { contentArticles } from "./components/articlesSlice";
import Categories from "./components/Categories";
import { AddArticle } from "./components/AddArticle";
import { Welcome } from "./components/Welcome";
import { ErrorPage } from "./components/ErrorPage";
import Header from "./components/Header";

import "./App.scss";

function App() {
  const contentArticlesArray = useSelector(contentArticles);

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path={"/categories"}>
            <Categories />
          </Route>
          <Route path={"/add"}>
            <AddArticle />
          </Route>
          <Route path={"/encyclopedia"}>
            <Welcome />
          </Route>
          {contentArticlesArray}
          <Route path={"/"}>
            <ErrorPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
