import React from 'react';
import Checkbox from '../../atoms/Checkbox';
import Label from '../../atoms/Label';
import { StyledCheckboxLabel } from './styles';
import { PropTypes } from './types';

const CheckboxLabel = ({
  text,
  id,
  isColumn,
  checked,
  toggleHandler,
}: PropTypes) => {
  return (
    <StyledCheckboxLabel isColumn={isColumn}>
      <Checkbox id={id} checked={checked} toggleHandler={toggleHandler} />
      <Label htmlFor={id}>{text}</Label>
    </StyledCheckboxLabel>
  );
};

export default CheckboxLabel;
