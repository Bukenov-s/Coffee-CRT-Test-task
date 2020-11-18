import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { StyledNav } from './styles';

export const Navbar: FC = () => {
  return (
    <StyledNav>
      <NavLink exact to="/" activeClassName="active-link" className="link">
        Coffee
      </NavLink>
      <NavLink to="/converter" activeClassName="active-link" className="link">
        Converter
      </NavLink>
    </StyledNav>
  );
};
