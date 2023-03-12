import styled, { css } from "styled-components";
import { Form as DefaultForm } from "formik";
import Fondo from "../../../assets/fondoharry.jpg"

export const FormContainer = styled.div`
background-image: url(${Fondo});
  width: 100vw;
  height: 100vh;
  align-items: center;
  display: flex;
  justify-content: center;
  background-size: cover;
  background-position: center ;
`;

export const Form = styled(DefaultForm)`
 position: reltive;
  width: 400px;
  height: 400px;
  background: transparent;
  border: 2px solid black;
  border-radius: 20px;
  backdrop-filter: blur(20px);

`;

export const InputContainer = styled.div`
  display: flex;
  flex-flow: column;
  color: ${({ theme }) => theme.colors.white100};
  &:not(:first-child) {
    margin-top: 16px;
  }
`;

export const Input = styled.input<{ $hasError?: boolean }>`
  padding: 10px;
  margin: 10px;
  border: none; 
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey900}; 
  background: transparent; 
  color: ${({ theme }) =>
    theme.colors.white100}; 
  padding: 10px 14px;

  ${({ $hasError, theme }) =>
    $hasError &&
    css`
      color: ${theme.colors.red};
      border-bottom-color: ${theme.colors
        .white100}; 
    `}
`;

export const Label = styled.label`
  color: gray;
  font-size: 16px;
  font-weight: bold;
  margin: 16px;
  color: ${({ theme }) => theme.colors.white100};
`;

export const FormButton = styled.button`
  border-radius: 5px;
  cursor: pointer;
  margin: 16px;
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.white100};
`;

export const FormMessage = styled.p`
  align-items: center;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white100};
`;

export const Error = styled.span`
  color: red;
  font-size: 12px;
  font-weight: 500;
  margin-top: 8px;
  margin-left: 15px;
  color: ${({ theme }) => theme.colors.red};
`;

export const Return = styled.p`
  color: red;
  font-size: 12px;
  font-weight: 500;
  margin-top: 8px;
  margin-left: 10px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
`;

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.white100};
`;
