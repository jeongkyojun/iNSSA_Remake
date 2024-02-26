import React from 'react';
import { StyledButton } from './styles';
import { PropTypes } from './types';

const Button = ({
  children,
  width,
  height,
  fontSize,
  textColor,
  backgroundColor,
  borderColor,
  isText,
  disabled,
  clickHandler,
}: PropTypes) => {
  return (
    <StyledButton
      width={width}
      height={height}
      fontSize={fontSize}
      textColor={textColor}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      isText={isText}
      disabled={disabled}
      onClick={clickHandler}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
