import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import ManageRestaurant from "./admin/ManageRestaurant";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/admin/restaurants" exact component={ManageRestaurant} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
