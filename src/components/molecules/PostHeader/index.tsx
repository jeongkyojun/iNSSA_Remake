import React from 'react';
import Button from '../../atoms/Button';
import Text from '../../atoms/Text';
import {
  ButtonIconWrapper,
  ButtonWrapper,
  DateWrapper,
  PostWrapper,
  StyledPostHeader,
  TextWrapper,
} from './styled';
import { PropTypes } from './types';
import { GrMoreVertical } from 'react-icons/gr';
import { FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa';

const PostHeader = ({
  title,
  createdDate,
  editable,
  hasPostLike,
  clickBackButtonHandler,
  clickMenuButtonHandler,
  togglePostLikeHandler,
}: PropTypes) => {
  return (
    <StyledPostHeader>
      <ButtonWrapper>
        <Button isText clickHandler={clickBackButtonHandler}>
          뒤로가기
        </Button>
      </ButtonWrapper>
      <PostWrapper>
        <TextWrapper>
          <Text size={1.4}>{title}</Text>
          {editable && (
            <Button isText clickHandler={clickMenuButtonHandler}>
              <GrMoreVertical size={22} />
            </Button>
          )}
        </TextWrapper>
        <DateWrapper>
          <Text size={0.8}>{createdDate}</Text>
          <Button
            backgroundColor={'white'}
            textColor={'#696666'}
            clickHandler={togglePostLikeHandler}
            borderColor={'#A0A0A0'}
          >
            <ButtonIconWrapper>
              {hasPostLike ? (
                <FaThumbsUp size={15} />
              ) : (
                <FaRegThumbsUp size={15} />
              )}
              {' 공감'}
            </ButtonIconWrapper>
          </Button>
        </DateWrapper>
      </PostWrapper>
    </StyledPostHeader>
  );
};

export default PostHeader;
