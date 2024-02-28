import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import MyInfo from "../../organisms/MyInfo";
import Navbar from "../../molecules/Navbar";
import MyPosts from "../../organisms/MyPosts";
import { StyledMyPage } from "./styles";
import getUserInfo from "./getUserInfo";
import { UserInfoTypes } from "./types";
import requestLogout from "./requestLogout";
import navigator from "../../../utils/navigator";
import { USER_INFO } from "./data";

const MyPage = () => {
  const navigate = useNavigate();

  // const { data: userInfo } = useQuery<UserInfoTypes>(['userInfo'], () =>
  //   getUserInfo(),
  // );

  const [userInfo] = useState(USER_INFO);

  const clickLogoutHandler = async () => {
    if (!window.confirm("로그아웃 하시겠습니까?")) {
      return;
    }

    window.alert("axios 연결이 되지 않아 로그아웃이 불가능합니다.");
    // if (await requestLogout()) {
    //   localStorage.removeItem("isLogin");
    //   navigate("/login");
    // }
  };

  return (
    <StyledMyPage>
      <Navbar clickLogoHandler={navigator(navigate).main} />
      <MyInfo
        name={userInfo ? userInfo.name : ""}
        studentNumber={userInfo ? userInfo.studentNumber : ""}
        clickEditBtnHandler={navigator(navigate).myInfoEdit}
        clickLogoutHandler={clickLogoutHandler}
      />
      {userInfo?.postsResponses.length ? (
        <MyPosts postsInfo={userInfo.postsResponses} />
      ) : (
        <MyPosts />
      )}
    </StyledMyPage>
  );
};

export default MyPage;
