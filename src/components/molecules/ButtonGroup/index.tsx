import React from 'react';
import Button from '../../atoms/Button';
import { StyledButtonGroup } from './styles';
import { PropTypes } from './types';

const ButtonGroup = ({ buttonInfos, isColumn, ...rest }: PropTypes) => {
  return (
    <StyledButtonGroup isColumn={isColumn}>
      {buttonInfos?.map(({ text, clickHandler }, idx) => {
        return (
          <Button key={text + idx} clickHandler={clickHandler} {...rest}>
            {text}
          </Button>
        );
      })}
    </StyledButtonGroup>
  );
};

export default ButtonGroup;
