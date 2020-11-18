import React, { FC } from 'react';
import { StyledMain } from './styles';

export const MainLayout: FC = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};
