import React from "react";

import { Redirect, Switch, withRouter, Route } from "react-router-dom";
import ContentWrapper from "../components/ContentWrapper";

import { route_tabs, routes } from "./constants";
import Rovers from "../screens/Rovers";
const MainRouter = () => {
  return (
    <ContentWrapper tabs={route_tabs}>
      <Switch>
        <Route exact path={`${routes.rovers}/:type`} component={Rovers} />
        <Redirect from={routes.any} to={`${routes.rovers}/curiosity`} />
      </Switch>
    </ContentWrapper>
  );
};

export default withRouter(MainRouter);
