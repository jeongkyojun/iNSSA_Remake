import React, { useState } from 'react';
// import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import navigator from '../../../utils/navigator';
import MenuWeek from '../../molecules/MenuWeek';
import Navbar from '../../molecules/Navbar';
import MenuCards from '../../organisms/MenuCards';
// import { requestMenu } from './requestMenu';
import {
  MenuCardsWrapper,
  MenuWeekWrapper,
  NavbarWrapper,
  StyledMenu,
} from './styles';
// import { MenuTypes } from './types';
import { MENU_OF_WEEK } from './data';

const Menu = () => {
  // const { data: menuOfWeek } = useQuery<MenuTypes>(['requestMenuOfWeek'], () =>
  //   requestMenu(),
  // );
  const [menuOfWeek] = useState(MENU_OF_WEEK);

  const navigate = useNavigate();

  return (
    <StyledMenu>
      <NavbarWrapper>
        <Navbar
          clickLogoHandler={navigator(navigate).main}
          clickMypageHandler={navigator(navigate).mypage}
        ></Navbar>
      </NavbarWrapper>
      <MenuWeekWrapper>
        <MenuWeek
          startDate={menuOfWeek?.startDate}
          endDate={menuOfWeek?.endDate}
        ></MenuWeek>
      </MenuWeekWrapper>
      <MenuCardsWrapper>
        <MenuCards menus={menuOfWeek?.menus}></MenuCards>
      </MenuCardsWrapper>
    </StyledMenu>
  );
};

export default Menu;
