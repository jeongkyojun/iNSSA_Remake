import React, { ForwardedRef, forwardRef } from 'react';
import { StyledInput } from './styles';
import { PropTypes } from './types';

const Input = (
  {
    width,
    height,
    fontSize,
    textColor,
    backgroundColor,
    inputs,
    type,
    name,
    id,
    accept,
    placeholder,
    disabled,
    changeHandler,
    pressKeyHandler,
  }: PropTypes,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  return (
    <StyledInput
      width={width}
      height={height}
      fontSize={fontSize}
      textColor={textColor}
      backgroundColor={backgroundColor}
      value={inputs?.[name]}
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      disabled={disabled}
      accept={accept}
      ref={ref}
      onChange={e => changeHandler?.(e)}
      onKeyUp={pressKeyHandler}
    />
  );
};

export default forwardRef(Input);
