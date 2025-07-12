import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  padding: 16px;
  flex-direction: column;
  gap: 20px;
  background-color: transparent;
`;

export const TabGroup = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 335px;
  height: 48px;
  background-color: rgba(66, 66, 66, 0.3); // #424242 30% 투명도
  border-radius: 12px;
  padding: 4px;
  gap: 10px;
`;

export const Slider = styled.div<{ index: number }>`
  position: absolute;
  top: 8px;
  left: ${({ index }) => `calc(${index} * 50% + 7px)`};
  width: calc(50% - 14px);
  height: calc(100% - 16px);
  background: transparent;
  border: 1.5px solid #9E9E9E;
  border-radius: 8px;
  transition: left 0.3s ease;
  z-index: 1;
`;

export const TabButton = styled.button<{ selected: boolean }>`
  flex: 1;
  background: transparent;
  border: none;
  font-size: 16px;
  font-weight: 00;
  color: ${({ selected }) => (selected ? '#ffffff' : 'rgba(255, 255, 255, 0.3)')};
  cursor: pointer;
  position: relative;
  z-index: 2;
  padding: 10px 0;
`;
