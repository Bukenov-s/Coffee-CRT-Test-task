import styled, { keyframes } from 'styled-components';
import { shadow_blue } from '~/styles/variables';

const appearAndScale = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9, 0.9);
  }
  to {
    opacity: 1;
    transform: scale(1, 1);
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${shadow_blue};
  padding: 1rem 2rem;
  width: 350px;
  height: 300px;
  color: white;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-name: ${appearAndScale};

  & h1 {
    font-weight: bold;
    text-align: center;
    padding: 0.5rem;
    font-size: 1.5rem;
  }

  & .form-field {
    display: flex;
    flex-direction: column;
    padding: 0.25rem;
  }

  & .form-field-checkbox {
    display: flex;
    padding: 0.25rem;
  }
`;
