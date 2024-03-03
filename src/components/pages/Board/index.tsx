import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import navigator from "../../../utils/navigator";
import BoardNavbar from "../../molecules/BoardNavbar";
import Navbar from "../../molecules/Navbar";
import PostsList from "../../organisms/PostsList";
import { PostsWrapper, StyledBoard, StyledButtonWrapper } from "./styles";
import { requestBoardList } from "./requestBoardList";
import { AiFillEdit } from "react-icons/ai";
import Text from "../../atoms/Text";
import { BOARD_DATA, FULL_BOARD_DATA } from "./data";

const Board = () => {
  //const PAGE_AMOUNT = 15;
  const [ref, inView] = useInView();

  // const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
  //   ['boardList'],
  //   ({ pageParam = 0 }) => requestBoardList(pageParam, PAGE_AMOUNT),
  //   {
  //     getNextPageParam: lastPage =>
  //       !lastPage.last ? lastPage.nextPage : undefined,
  //   },
  // );

  const [data,setData] = useState(BOARD_DATA);
  const [isFetchingNextPage] = useState(false);

  useEffect(() => {
    if (inView) {
      //fetchNextPage();
      setData((prev)=>{
        return(
          prev.pages.concat(FULL_BOARD_DATA[index].data);
        )
      })
    }
  }, [inView]);

  const navigate = useNavigate();

  const goToBeforePage = () => {
    navigate(-1);
  };

  const clickSearch = () => {
    navigate("/postsearch");
  };

  const clickPostItem = (postId: number) => {
    navigate("/postdetail", { state: { postId: postId } });
  };

  const clickAddPost = () => {
    navigate("/createpost");
  };

  return (
    <StyledBoard>
      <Navbar
        clickLogoHandler={navigator(navigate).main}
        clickMypageHandler={navigator(navigate).mypage}
      ></Navbar>
      <BoardNavbar
        clickBackButtonHandler={goToBeforePage}
        clickSearchButtonHandler={clickSearch}
      ></BoardNavbar>
      <PostsWrapper>
        {data?.pages.map((page, index) => {
          return (
            <PostsList
              key={"page" + index}
              items={page.postsResponses}
              clickPostItemHandler={clickPostItem}
            ></PostsList>
          );
        })}
      </PostsWrapper>
      {isFetchingNextPage ? (
        <Text>Loading...</Text>
      ) : (
        <div ref={ref}>게시글의 끝입니다.</div>
      )}
      <StyledButtonWrapper>
        <AiFillEdit color={"#01a7eb"} size={25} onClick={clickAddPost} />
      </StyledButtonWrapper>
    </StyledBoard>
  );
};

export default Board;
