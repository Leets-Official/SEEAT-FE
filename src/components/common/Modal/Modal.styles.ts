import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background-color: #424242;
  border-radius: 12px;
  padding: 30px 0px 20px 0px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.4);
  width: 360px;
  height: 200px;
`;

export const Title = styled.h2`
  color: white;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 16px;
`;

export const SubTitle = styled.p`
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 32px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export const CancelButton = styled.button`
  width: 155px;
  height: 55px;
  background: #7d7d7d;
  color: #f5f5f5;
  font-size: 16px;
  font-weight: 700;
  border-radius: 12px;
  border: none;
  cursor: pointer;
`;

export const ConfirmButton = styled.button`
  width: 155px;
  height: 55px;
  background: #ef5350;
  color: white;
  font-size: 16px;
  font-weight: 700;
  border-radius: 12px;
  border: none;
  cursor: pointer;
`;
