import React from 'react';
import Text from '../../atoms/Text';
import {
  StyledBr,
  StyledHr,
  StyledMenu,
  StyledMenuCard,
  StyledSubMenu,
  StyledTitle,
} from './styles';
import { MenuCardTypes } from './types';

const MenuCard = ({
  items,
  subItems,
  fontSize,
  dayOfTheWeek,
  ...menuCardRest
}: MenuCardTypes) => {
  return (
    <StyledMenuCard {...menuCardRest}>
      <StyledTitle>
        <Text size={fontSize ? fontSize + 0.2 : 1} bold={true}>
          {dayOfTheWeek}
        </Text>
      </StyledTitle>
      <StyledHr />
      <StyledMenu>
        {!items?.length ? (
          <Text>식단 정보가 존재하지 않습니다.</Text>
        ) : (
          items.map(menu => (
            <Text size={fontSize ? fontSize : 0.8} key={menu}>
              {menu}
            </Text>
          ))
        )}
      </StyledMenu>
      <StyledHr />
      <StyledSubMenu>
        {!subItems?.length ? (
          <StyledBr />
        ) : (
          subItems.map(subItem =>
            !subItem.length ? (
              <StyledBr key={subItem} />
            ) : (
              <Text size={fontSize ? fontSize : 0.8} key={subItem}>
                {subItem}
              </Text>
            ),
          )
        )}
      </StyledSubMenu>
    </StyledMenuCard>
  );
};

export default MenuCard;
