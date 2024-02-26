import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Text from '../../atoms/Text';
import {
  BusInfoNavigatorContainer,
  BusNumberContainer,
  StyledBusInfoNavigator,
} from './styles';
import { PropTypes } from './types';

const BusInfoNavigator = ({ busNum, clickBusNumHandler }: PropTypes) => {
  const busNumText = busNum + '호차';
  return (
    <StyledBusInfoNavigator>
      <BusInfoNavigatorContainer>
        <FaChevronLeft size={30} onClick={() => clickBusNumHandler('left')} />
        <BusNumberContainer>
          <Text size={2.5} bold>
            {busNumText}
          </Text>
        </BusNumberContainer>
        <FaChevronRight size={30} onClick={() => clickBusNumHandler('right')} />
      </BusInfoNavigatorContainer>
    </StyledBusInfoNavigator>
  );
};

export default BusInfoNavigator;
