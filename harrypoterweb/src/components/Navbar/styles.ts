import styled from "styled-components";
import { Link } from "react-router-dom"

export const Container = styled.div`
width: 100%;
height: 70px;
background-color: #23394d;
`
export const Wrapper = styled.div`
width: 100%;
max-width: 1300px;
height: 100%;display:flex;
flex-wrap: wrap;
justify-content: space-between;
margin:auto;

`

export const LogoContainer = styled.div`
margin-left: 0.5rem;
display: flex;
align-items: center;
font-size: 1.2rem;
font-family: sans-serif;

svg {
	fill: blue;
	margin-right: 0.5rem;
}
`;

export const Menu = styled.ul<{$open: boolean}>`
height: 100%;
display: flex;
justify-content: space-between;
list-style: none;

@media screen and (max-width: 960px){
	background-color: #23394d;
	position: absolute;
	top: 70px;
	left: ${({$open}) => ($open ? "0" : "-100%")}; //Import
	width: 100%;
	height: 90vh;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	transition: 0.5s all ease;

}
`;

export const MenuItem = styled.li`
height:100%;

@media screen and (max-width: 960px){
	width: 100%;
	height: 70px;
	display: flex;
	justify-content: center; 
	align-items: center;

}
`;

export const MenuItemLink = styled.button`
display: flex;
margin-left: 10px;
justify-content: center;
align-items:center;
height: 100%;
padding: 0.5rem 2.5 rem;
color: #64b2ff;
background-color: #23394d;
border: none;
font-family: sans-serif;
font-size: 1rem;
font-weight: 300;
cursor: pointer;
transition: 0.5s all ease;

&:hover{
	color: #fff;
	background-color: blue;
	transition: 0.5s all ease;
}

@media screen and (max-width: 960px){
	width: 100%;

}
`

export const MobileIcon = styled.div`
display: none;
@media screen and (max-width: 960px){
	display: flex;
	align-items: center; 
	cursor: pointer;
svg {
	fill: blue;
	margin-right: 0.5rem;
}

}

`

export const ButtonLogo = styled.button`
text-decoration: none;
border: none;
background: none;
`

export const Title = styled.h1`
font-size:20px;
color: white;
`

export const ButtonProfile = styled.button`
color: ${({ theme }) => theme.colors.white100};
cursor: pointer;
border: none;
background-color: transparent;
`