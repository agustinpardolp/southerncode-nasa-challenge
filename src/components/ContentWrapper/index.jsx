import React from "react";
import PropTypes from "prop-types";

import Tabs from "./Tabs";
import { StyledWrapper } from "../ViewWrapper/styled-components";

function ContentWrapper({ tabs, children, colValue, ccsClass }) {
  return (
    <StyledWrapper>
      <Tabs tabs={tabs}></Tabs>
      {children}
    </StyledWrapper>
  );
}
ContentWrapper.propTypes = {
  tabs: PropTypes.array,
  children: PropTypes.element,
  colValue: PropTypes.string,
  ccsClass: PropTypes.string,
};
export default ContentWrapper;
