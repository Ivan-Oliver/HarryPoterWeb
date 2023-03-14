import { Link } from "react-router-dom";
import styled from "styled-components";
export const Container = styled.div`
 display: flex;
 flex-flow: column;
 box-shadow: 0px 0px 10px 10px black;
 margin: 20px;
 padding: 15px;
 width: 200px;
`;
export const Image = styled.img`
 height:150px;
 border: solid 1px white
`;
export const DetailsButton = styled(Link)`
margin-top: 10px;
  padding: 10px;
  color:white;
  text-decoration: none;
  &:hover{
    background-color: white;
    color: black;
  }
`;
export const Description = styled.p`
`;
export const DescriptionApi = styled.p`
`;