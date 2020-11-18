import styled from 'styled-components';
import { eerie_black, eggshell } from '~/styles/variables';

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;

  & > nav {
    flex: 0 0 50px;
    background-color: ${eerie_black};
  }

  & > section {
    flex: 1;
    background-color: pink;
    background-color: ${eggshell};
    padding: 3rem;
  }
`;
