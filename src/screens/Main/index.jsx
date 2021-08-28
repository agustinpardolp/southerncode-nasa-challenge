import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import ToastNotification from "../../components/ToastNotification";
import Navbar from "../../components/Navbar";
import MainRouter from "../../routes";
import { StyledMain } from "./styled-components";

const Main = () => {
  return (
    <StyledMain>
      <Navbar />
      <MainRouter />
      <ToastNotification />
    </StyledMain>
  );
};

export default withRouter(Main);
