import styled from "styled-components";



export const Spellcardinner = styled.div`
  border-radius: 17px;
  overflow: hidden;
  background: blue;
`;

export const Spellcardshape = styled.div`
`;


export const Container = styled.div`
`

export const Title = styled.p`
`

export const Description = styled.p`
  font-size: 18px;
color: black
`;

export const DetailsButton = styled.button`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.DementorBlack};
  color: white;
  border-radius: 5px;
  text-decoration: none;
  display: inline;
  padding: 5px 5px;
  font-family: Oswald;
  cursor: pointer;
`;