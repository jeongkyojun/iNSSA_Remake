import React from 'react';
import MenuCard from '../../molecules/MenuCard';
import { MenuCardsWrapper, MenuCardWrapper, StyledMenuCards } from './styles';
import { PropsTypes } from './types';

const MenuCards = ({ menus, cardColor, ...menuRest }: PropsTypes) => {
  return (
    <StyledMenuCards {...menuRest}>
      <MenuCardsWrapper>
        {menus?.map(({ dayOfTheWeek, subItems, items, ...menuRest }) => (
          <MenuCardWrapper key={dayOfTheWeek}>
            <MenuCard
              dayOfTheWeek={dayOfTheWeek}
              items={items}
              subItems={subItems}
              key={dayOfTheWeek}
              backgroundColor={cardColor}
              {...menuRest}
            />
          </MenuCardWrapper>
        ))}
      </MenuCardsWrapper>
    </StyledMenuCards>
  );
};

export default MenuCards;
