import React from 'react';
import { StyledText } from './styles';
import { PropTypes } from './types';

const Text = ({ children, color, size, bold, isPost }: PropTypes) => {
  return (
    <StyledText color={color} size={size} bold={bold} isPost={isPost}>
      {children}
    </StyledText>
  );
};

export default Text;
