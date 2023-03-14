import styled from "styled-components";

export const App = styled.div`
  text-align: center;
  background-color: red;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const Container = styled.div`
  padding: 5em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
`;
export const SyncButton = styled.button`
  width: 90px;
  height: 40px;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
`;
export const ButtonPreview = styled.button`
  width: 90px;
  height: 40px;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
`;
export const ButtonNext = styled.button`
  width: 90px;
  height: 40px;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DeleteButton = styled.button`
  width: 70px;
  height: 30px;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
`;

export const ButtonBack = styled.button`
 
`;

export const InputSearch = styled.input`
`
export const ButtonSearch = styled.button`
`

export const FotterPage = styled.footer`
background-color: black;
`
export const ButtonRemove = styled.button`
`