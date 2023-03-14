import styled from "styled-components";
export const App = styled.div`
  text-align: center;
  background-color: #282C34;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
export const Container = styled.div`
  padding: 1em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
`;
export const SyncButton = styled.button`
  margin-top: 10px;
  margin-bottom: 10px;
   position: relative;
    background-color: white;
    border: none;
    font-size: 14px;
    color: black;
    padding: 10px;
    width: 200px;
    text-align: center;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
    &:after{
      content: "";
    background: #282c34;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px!important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s
    }
    &:active::after{
      padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
    }
`;
export const ButtonPreview = styled.button`
	border-radius: 100px;
	border: none;
	background: #241744;
	color: #fff;
	cursor: pointer;
	height: 50px;
	font-family: 'Montserrat', sans-serif;
	font-weight: 600;
	text-align: center;
	transition: .3s ease all;
	width: 200px;
    &:hover{
        background: white;
	color: black;
	font-size: 20px;
    }
`;
export const ButtonNext = styled.button`
	border-radius: 100px;
	border: none;
	background: #241744;
	color: #fff;
	cursor: pointer;
	height: 50px;
	font-family: 'Montserrat', sans-serif;
	font-weight: 600;
	text-align: center;
	transition: .3s ease all;
	width: 200px;
    &:hover{
        background: white;
	color: black;
	font-size: 20px;
    }
`;
export const ButtonContainer = styled.div`
`;
export const ButtonBack = styled.button`
`;
export const DeleteButton = styled.button`
`;
export const InputSearch = styled.input`
`
export const ButtonSearch = styled.button`
    background-color: #282c34;
    text-decoration: none;
	border: none;

`
export const ButtonRemove = styled.button`
`
export const FotterPage = styled.footer`
background-color: black;
`

export const ContainerSearch = styled.div`
`
