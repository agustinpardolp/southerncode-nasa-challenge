import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import { useHistory } from 'react-router-dom';
import { StyledNavItem } from '../styled-components';

const Tab = ({ tabs }) => {
  const [value, setValue] = useState('/rovers/curiosity');
  const history = useHistory();
  const handleChange = (event, newValue) => {
    setValue(newValue);
    history.push(newValue);
  };

  return (
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        {tabs && tabs.map((tab) => (
          <StyledNavItem key={tab.id} label={tab.name} value={tab.route} />
        ))}
      </Tabs>
    </Paper>
  );
};

export default Tab;

Tab.propTypes = {
  tabs: PropTypes.arrayOf.isRequired,

};
