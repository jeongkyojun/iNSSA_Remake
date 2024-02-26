import React from 'react';
import { ModalBackground, StyledBusInfoImageModal } from './styles';
import { IoMdClose } from 'react-icons/io';
import Image from '../../atoms/Image';
import { PropTypes } from './types';

const BusInfoImageModal = ({
  busInfoImage,
  toggleBusInfoModalHandler,
}: PropTypes) => {
  return (
    <ModalBackground>
      <StyledBusInfoImageModal>
        <IoMdClose size={30} onClick={toggleBusInfoModalHandler} />
        <Image width="100%" src={busInfoImage} alt="busInfoModal" />
      </StyledBusInfoImageModal>
    </ModalBackground>
  );
};

export default BusInfoImageModal;
