import { Link } from "react-router-dom";
import styled from "styled-components";
export const Container = styled.div`
  background-color: black;
  box-shadow: 0 0 0 2px black;
  padding: 24px;
`;

export const Image = styled.img`
  border-radius: 6px;
  height: 250px;
  margin-bottom: 5px;
  width: 200px;
`;

export const Description = styled.p`
padding: 500px;
`;

export const DescriptionApi = styled.p`
 font-size: large;
 padding: 15px;
`;

export const DetailsButton = styled(Link)`
  color: white;
  text-decoration: none;
  
`;

export const EditButton = styled.button`
 
`;
