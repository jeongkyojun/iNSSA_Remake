import React from 'react';
import {
  BusInfoNavbarContainer,
  ButtonWrapper,
  StyledBusInfoNavbar,
} from './styles';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Button from '../../atoms/Button';
import { PropTypes } from './types';

const BusInfoNavbar = ({
  liked,
  toggleLikeHandler,
  toggleBusInfoModalHandler,
}: PropTypes) => {
  return (
    <StyledBusInfoNavbar>
      <BusInfoNavbarContainer>
        <ButtonWrapper>
          <Button isText clickHandler={toggleBusInfoModalHandler}>
            노선보기
          </Button>
        </ButtonWrapper>
        <Button isText onClick={toggleLikeHandler}>
          {liked ? (
            <AiFillStar color="#EBB517" size="30" onClick={toggleLikeHandler} />
          ) : (
            <AiOutlineStar
              color="#EBB517"
              size="30"
              onClick={toggleLikeHandler}
            />
          )}
        </Button>
      </BusInfoNavbarContainer>
    </StyledBusInfoNavbar>
  );
};

export default BusInfoNavbar;
