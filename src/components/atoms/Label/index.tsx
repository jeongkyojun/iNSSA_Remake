import React from 'react';
import { StyledLabel } from './styles';
import { PropTypes } from './types';

const Label = ({ children, fontSize, textColor, htmlFor }: PropTypes) => {
  return (
    <StyledLabel fontSize={fontSize} textColor={textColor} htmlFor={htmlFor}>
      {children}
    </StyledLabel>
  );
};

export default Label;
