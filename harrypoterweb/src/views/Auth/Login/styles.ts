import styled, { css } from "styled-components";
import { Form as DefaultForm } from "formik";

export const FormContainer = styled.div`
  width: 100vw;
  height: 100vh;
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.black};
  background-size: cover;
`;

export const Form = styled(DefaultForm)`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  height: 25rem;
  width: 22.5rem;
  margin-top: 6.25rem;
  margin-left: 2rem;
  margin-right: 1.7rem;
  font-family: Oswald;
  color: ${({ theme }) => theme.colors.white100};
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
  font-family: Oswald;
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
  color: ${({ theme }) => theme.colors.red};
`;

export const StyledLink = styled.a`
  /* text-decoration: none; */
  color: ${({ theme }) => theme.colors.blue};
`;
