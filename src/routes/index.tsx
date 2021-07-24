import React from "react";

import Layout from "../container/Layout";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";

import { Switch, Route } from "react-router-dom";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Layout>
        <Route path="/" exact component={Home} />
        <Route path="/catalog" exact component={Catalog} />
      </Layout>
    </Switch>
  );
};

export default Routes;
