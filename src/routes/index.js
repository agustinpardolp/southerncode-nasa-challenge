/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import {
  Redirect, Switch, withRouter, Route,
} from 'react-router-dom';
import ContentWrapper from '../components/ContentWrapper';

import { routeTabs, routes } from './constants';
import Rovers from '../screens/Rovers';

const MainRouter = () => (
  <ContentWrapper tabs={routeTabs}>
    <Switch>
      <Route exact path={`${routes.rovers}/:type`} component={Rovers} />
      <Redirect from={routes.any} to={`${routes.rovers}/curiosity`} />
    </Switch>
  </ContentWrapper>
);

export default withRouter(MainRouter);
