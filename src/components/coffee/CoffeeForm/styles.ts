import styled from 'styled-components';
import { shadow_blue } from '~/styles/variables';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${shadow_blue};
  padding: 1rem 2rem;
  color: white;

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
`;
