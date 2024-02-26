import React from 'react';
import { StyledCheckbox } from './styles';
import { PropTypes } from './types';

const Checkbox = ({ id, size, checked, toggleHandler }: PropTypes) => {
  return (
    <StyledCheckbox
      id={id}
      size={size}
      type="checkbox"
      checked={checked}
      onChange={toggleHandler}
    />
  );
};

export default Checkbox;
