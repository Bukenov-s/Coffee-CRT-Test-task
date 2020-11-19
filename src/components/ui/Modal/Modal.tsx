import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { Root, ModalContainer, CloseButton } from './styles';

interface Props {
  onClose: () => void;
}

export const Modal: FC<Props> = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <Root>
      <ModalContainer>
        {children}
        <CloseButton onClick={onClose}>OK</CloseButton>
      </ModalContainer>
    </Root>,
    document.getElementById('portal') as HTMLElement,
  );
};
