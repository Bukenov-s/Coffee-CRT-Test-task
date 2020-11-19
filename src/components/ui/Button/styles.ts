import styled from 'styled-components';
import { eerie_black, eggshell } from '~/styles/variables';
import { Props } from './Button';

export const StyledButton = styled.button<Pick<Props, 'color_mode'>>`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  background-color: ${({ color_mode }) =>
    color_mode === 'dark' ? eerie_black : eggshell};
  color: ${({ color_mode }) =>
    color_mode === 'dark' ? eggshell : eerie_black};
  transition: transform 0.25s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;
