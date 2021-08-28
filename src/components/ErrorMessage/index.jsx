import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

import { StyledError } from "./styled-components";

const ErrorMessage = ({ errorMessage= " " }) => {
  return (
    <StyledError>
      <FormattedMessage id={errorMessage} />
    </StyledError>
  );
};
ErrorMessage.propTypes = {
  errorMessage: PropTypes.string,
};

export default React.memo(ErrorMessage);
