import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import { StyledButton } from './styles';

export type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  onClick: (args?: unknown) => unknown;
  background_color?: string;
  text: string;
  color_mode: 'dark' | 'light';
};

export const Button: FC<Props> = ({ type, onClick, text, color_mode }) => {
  return (
    <StyledButton type={type} onClick={onClick} color_mode={color_mode}>
      {text}
    </StyledButton>
  );
};
