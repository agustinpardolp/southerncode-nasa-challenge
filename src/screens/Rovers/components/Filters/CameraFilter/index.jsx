import React from 'react';
import CameraIcon from '@material-ui/icons/Camera';
import { useParams } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import Select from '../../../../../components/Select';
import { StyledFilterContainer, IconContainer } from '../styled-components';
import { availableCamerasByModel, queryKeys } from '../../../constants';

const CameraFilter = ({ handleSelectChange }) => {
  const { type } = useParams();
  return (
    <StyledFilterContainer>
      <IconContainer>
        <CameraIcon />
        <h4>
          <FormattedMessage id="filter.camera" />
        </h4>
      </IconContainer>
      <Select
        options={availableCamerasByModel[type]}
        handleChange={handleSelectChange}
        keyValue={queryKeys.camera}
        name="camera-select"
      />
    </StyledFilterContainer>
  );
};

export default CameraFilter;

CameraFilter.propTypes = {
  handleSelectChange: PropTypes.func.isRequired,
};
