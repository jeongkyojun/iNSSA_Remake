import React from 'react';
import Text from '../../atoms/Text';
import { CommentHeader, IconButtonsWrapper, StyledCommentCard } from './styles';
import { PropTypes } from './types';
import { FaComment, FaRegComment, FaRegTrashAlt } from 'react-icons/fa';

const CommentCard = ({
  commentId,
  content,
  createdDate,
  editable,
  isReComment,
  postWriter,
  commentIdWritingRecomment,
  clickReCommentHandler,
  clickDeleteHandler,
}: PropTypes) => {
  const isWritingRecomment = commentIdWritingRecomment === commentId;

  return (
    <StyledCommentCard
      isReComment={isReComment}
      isWritingRecomment={isWritingRecomment}
    >
      <CommentHeader>
        {postWriter ? (
          <Text color="blue">익명(글쓴이)</Text>
        ) : (
          <Text>익명</Text>
        )}
        <IconButtonsWrapper>
          {!isReComment &&
            (isWritingRecomment ? (
              <FaComment onClick={() => clickReCommentHandler(commentId)} />
            ) : (
              <FaRegComment onClick={() => clickReCommentHandler(commentId)} />
            ))}
          {editable && (
            <FaRegTrashAlt
              onClick={() => clickDeleteHandler(commentId, isReComment)}
            />
          )}
        </IconButtonsWrapper>
      </CommentHeader>
      <Text>{content}</Text>
      <Text>{createdDate}</Text>
    </StyledCommentCard>
  );
};

export default CommentCard;
