import React from "react";
import { StyledNavbar, StyledNavbarContainer, StyledTitle } from "./styled-components";
import DashboardIcon from "@material-ui/icons/Dashboard";
import NasaBrand from "../../assets/logos/NASA.svg";

const Navbar = () => {
  return (
    <StyledNavbar position="static">
      <StyledNavbarContainer>
        <img src={NasaBrand} alt="NASA" />
        <StyledTitle>
          <h2>Rover Dashboard Panel</h2>
          <DashboardIcon />
        </StyledTitle>
      </StyledNavbarContainer>
    </StyledNavbar>
  );
};

export default Navbar;
