import React from 'react';
import {
  Backdrop,
  ModalContainer,
  Title,
  SubTitle,
  ButtonGroup,
  CancelButton,
  ConfirmButton,
} from './Modal.styles';
import { useModalStore } from './modalStore';

const Modal = () => {
  const { isOpen, modalProps, closeModal } = useModalStore();

  if (!isOpen) return null;

  const {
    title = '',
    subtitle = '',
    warning = '',
    onConfirm,
    onCancel,
  } = modalProps;

  const handleCancel = () => {
    onCancel?.();
    closeModal();
  };

  const handleConfirm = () => {
    onConfirm?.();
    closeModal();
  };

  return (
    <Backdrop>
      <ModalContainer>
        {title && <Title>{title}</Title>}
        {subtitle && <SubTitle>{subtitle}</SubTitle>}
        <ButtonGroup>
          <CancelButton onClick={handleCancel}>취소</CancelButton>
          <ConfirmButton onClick={handleConfirm}>등록하기</ConfirmButton>
        </ButtonGroup>
      </ModalContainer>
    </Backdrop>
  );
};

export default Modal;
