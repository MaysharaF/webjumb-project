import React from "react";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";

import { Switch, Route } from "react-router-dom";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/catalog" exact component={Catalog} />
    </Switch>
  );
};

export default Routes;
