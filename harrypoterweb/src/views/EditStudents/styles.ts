import styled, { css } from "styled-components";

export const App = styled.div`
  text-align: center;
  background-color: white;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  flex-direction: row;
`;

export const AppEdit = styled.div`
  flex: 0 0 300px;
  padding: 5px;
  padding-bottom: 25px;
  margin: 1em;
  border-radius: 20px;
  position: relative;
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: row;
  &:before {
    content: "Harry Potter character";
    font-family: "arial";
    font-weight: 700;
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: 0.5px;
    border-radius: 20px;
    position: absolute;
    z-index: 10;
    max-width: 225px;
    top: -15px;
    padding: 5px;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

export const Container = styled.div`
  padding: 5em;
  gap: 24px;
`;

export const Image = styled.img`
  width: 175px;
  height: 250px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-flow: column;
  color: ${({ theme }) => theme.colors.white100};
  &:not(:first-child) {
    margin-top: 16px;
  }
  &:hover {
    box-shadow: 0 0 2px 2px black;
  }
`;

export const Input = styled.input<{ $hasError?: boolean }>`
  padding: 10px;
  margin: 10px;
  background: transparent; 
  color: ${({ theme }) =>
  theme.colors.black}; 
  padding: 10px 14px;

  ${({ $hasError, theme }) =>
    $hasError &&
    css`
      color: ${theme.colors.GriffindorYellow};
      border-bottom-color: ${theme.colors
        .GriffindorYellow}; 
    `}
`;

export const Label = styled.label`
  color: gray;
  font-size: 16px;
  font-weight: bold;
  margin: 16px;
  color: ${({ theme }) => theme.colors.black};
`;

export const Error = styled.span`
  color: red;
  font-size: 12px;
  font-weight: 500;
  margin-top: 8px;
  margin-left: 15px;
  color: ${({ theme }) => theme.colors.GriffindorYellow};
`;

export const EditButton = styled.button`
  display: inline-block;
  padding: 15px 25px;
  font-size: 24px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #4CAF50;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
&:hover{
  background-color: #3e8e41
}
&:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
`;

export const ButtonBack = styled.button`
  width: 90px;
  height: 40px;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
`;