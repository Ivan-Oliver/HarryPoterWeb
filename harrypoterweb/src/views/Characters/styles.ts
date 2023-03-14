import styled from "styled-components";

export const MaxContainer = styled.div`
    text-align: center;
    background-color: #282c34;
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;
export const Container = styled.div`
    padding-top: 5px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap:24px;
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

export const PrimerContainer = styled.div`
    background-color: #282c34;
`

export const SyncButton = styled.button`

`;



export const InputSearch = styled.input`

`
export const ButtonSearch = styled.button`


`
export const ButtonRemove = styled.button`

`
export const ButtonCreate = styled.button`

`