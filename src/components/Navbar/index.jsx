import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import DashboardIcon from '@material-ui/icons/Dashboard';

import { Context } from '../LenguageWrapper';
import NasaBrand from '../../assets/logos/NASA.svg';

import {
  StyledNavbar,
  StyledNavbarContainer,
  StyledTitle,
} from './styled-components';
import { altImg } from './constants';
import Translations from './components/Translations';

const Navbar = () => {
  const context = useContext(Context);
  const handleChangeLanguage = (e) => {
    context.changeLanguage(e);
  };
  return (
    <StyledNavbar position="static">
      <StyledNavbarContainer>
        <img src={NasaBrand} alt={altImg} />
        <StyledTitle>
          <h2>
            <FormattedMessage id="navbar.title" />
          </h2>
          <DashboardIcon />
        </StyledTitle>
        <Translations handleChangeLanguage={handleChangeLanguage} />
      </StyledNavbarContainer>
    </StyledNavbar>
  );
};

export default Navbar;
