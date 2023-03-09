import styled, { css } from "styled-components";
import { Form as DefaultForm } from 'formik'



export const FormContainer = styled.div`
background-repeat: no-repeat;
background-size: cover;
background-position: 100% 100%;
width: 100vw;
height:100vh;
align-items: center;
display: flex;
justify-content: center;

`

export const Form = styled(DefaultForm)`
display: flex;
flex-direction: column ; 
background-color: rgb(51, 51, 51, 0.602 );
border-radius: 10px;
height: 18rem;
width:22.5rem;
margin-top: 6.25rem;
margin-left: 1.7rem;
margin-right: 1.7rem;
`
export const InputContainer = styled.div`
  display: flex;
  flex-flow: column;
  &:not(:first-child) {
    margin-top: 16px;
  }
`

export const Input = styled.input<{ $hasError?: boolean }>`
padding:10px;
margin:10px;
border-radius: 5px;
background-color: transparent;
color: ${({ theme }) => theme.colors.grey100};
${({ $hasError, theme }) =>
        $hasError ? theme.colors.danger : theme.colors.grey100};
  padding: 10px 14px;

  ${({ $hasError, theme }) =>
        $hasError &&
        css`
      color: ${theme.colors.grey100};
    `}
`

export const FormButton = styled.button`
 margin: 10px;
 display: inline-block;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;	
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: blue;
  border: none;
  border-radius: 15px;
  box-shadow: 0 2px #999;
  &:hover{
	background-color: blue;
  }
  &:active{
	background-color: blue;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
  }
`

export const FormMessage = styled.p`
align-items: center;
display: flex;
justify-content: center;
`

export const Error = styled.span`
  color: ${({ theme }) => theme.colors.red};
  font-size: 12px;
  font-weight: 500;
  margin-top: 8px;
`
export const BackButton = styled.button`
margin: 10px;
 display: inline-block;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;	
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: blue;
  border: none;
  border-radius: 15px;
  box-shadow: 0 2px #999;
  &:hover{
	background-color: blue;
  }
  &:active{
	background-color: blue;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
  }
`

