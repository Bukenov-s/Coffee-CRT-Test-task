import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  & .link {
    color: white;
    margin: 0 0.5rem;
    text-decoration: none;
  }

  & .active-link {
    text-decoration: underline;
  }
`;
