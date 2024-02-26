import React from 'react';
import ImageTextButton from '../../molecules/ImageTextButton';
import { StyledImageTextButtonGroup } from './styles';
import { ImageTextButtonGroupTypes } from './types';

const ImageTextButtonGroup = ({
  imageTextInfos,
}: ImageTextButtonGroupTypes) => {
  return (
    <StyledImageTextButtonGroup>
      {imageTextInfos.map(({ src, children, ...rest }) => {
        return (
          <ImageTextButton key={src} src={src} {...rest}>
            {children}
          </ImageTextButton>
        );
      })}
    </StyledImageTextButtonGroup>
  );
};

export default ImageTextButtonGroup;
