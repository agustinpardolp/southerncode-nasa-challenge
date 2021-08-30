import React from 'react';
import PropTypes from 'prop-types';

import Tabs from './Tabs';
import { StyledWrapper } from '../ViewWrapper/styled-components';

function ContentWrapper({ tabs, children }) {
  return (
    <StyledWrapper>
      <Tabs tabs={tabs} />
      {children}
    </StyledWrapper>
  );
}

ContentWrapper.propTypes = {
  tabs: PropTypes.arrayOf.isRequired,
  children: PropTypes.element.isRequired,
};
export default ContentWrapper;
