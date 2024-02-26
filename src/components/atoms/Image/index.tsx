import { ImageWrapper, StyledImage } from './styles';
import { PropTypes } from './types';
import React from 'react';

const Image = ({
  width,
  height,
  src,
  alt,
  isCircle,
  clickHandler,
}: PropTypes) => {
  return (
    <ImageWrapper width={width} height={height} onClick={clickHandler}>
      <StyledImage src={src} alt={alt} isCircle={isCircle} />
    </ImageWrapper>
  );
};

export default Image;
