import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./home/home";
import { Cart } from "./cart/cart";
import { NotFound } from "./notFound/notFound";
import { Categories } from "./categories/categories";
import { Category } from "./category/category";
import { ItemDetailContainer } from "../components/ItemDetailContainer/ItemDetailContainer";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/categories">
          <Categories />
        </Route>
        <Route path="/categories/:categoryId">
          <Category />
        </Route>
        <Route path="/item/:itemId">
          <ItemDetailContainer />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export { Routes };
