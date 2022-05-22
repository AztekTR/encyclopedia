import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Categories from "./components/Categories";
import { AddArticle } from "./components/AddArticle";
import { Welcome } from "./components/Welcome";
import Header from "./components/Header";

import "./App.scss";
import { Article } from "./components/Article";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path={`${process.env.PUBLIC_URL}/categories`}>
            <Categories />
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/add`}>
            <AddArticle />
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/:category/:id`}>
            <Article />
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/`}>
            <Welcome />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
