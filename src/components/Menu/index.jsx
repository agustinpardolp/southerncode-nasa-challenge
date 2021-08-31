import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useIntl } from 'react-intl';

import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { StyledMenu } from './styled-components';

const useStyles = makeStyles({
  root: {
    height: 216,
    flexGrow: 1,
    maxWidth: 400,
  },
});

const Menu = ({
  label, options, onClick, dataTestid,
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState([]);

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  };

  const handleChange = (event, value) => {
    event.preventDefault();
    onClick(value.item);
  };
  const intl = useIntl();
  const menuLabel = intl.formatMessage({ id: label });
  return (
    <StyledMenu>
      <TreeView
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        expanded={expanded}
        selected={selected}
        onNodeToggle={handleToggle}
        onNodeSelect={handleSelect}
        data-testid={dataTestid}
      >
        <TreeItem nodeId="1" label={menuLabel}>
          {options
            && options.map((option) => (
              <TreeItem
                key={option.id}
                nodeId={option.id}
                label={option.label}
                value={option.item}
                onLabelClick={(e) => handleChange(e, option)}
              />
            ))}
        </TreeItem>
      </TreeView>
    </StyledMenu>
  );
};

export default Menu;
Menu.defaultProps = {
  options: [],
};
Menu.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })),
  onClick: PropTypes.func.isRequired,
  dataTestid: PropTypes.string.isRequired,
};
