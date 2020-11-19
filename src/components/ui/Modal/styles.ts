import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Root = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999999999;
  font-family: 'Roboto';
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  animation-duration: 0.2s;
  animation-iteration-count: 1;
  animation-name: ${appear};
`;

export const ModalContainer = styled.div`
  min-width: 200px;
  position: relative;
  background: white;
  color: #333;
  box-sizing: border-box;
  padding: 24px;
  box-shadow: 0 27px 24px 0 rgba(0, 0, 0, 0.2),
    0 40px 77px 0 rgba(0, 0, 0, 0.22);
  cursor: default;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  bottom: 5px;
  right: 5px;
  padding: 0;
  font-size: 20px;
  cursor: pointer;
  outline: none;
`;
