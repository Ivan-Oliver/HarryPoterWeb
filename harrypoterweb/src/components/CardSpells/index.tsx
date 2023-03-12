import { FC } from "react";
import {
  Spellcardinner,
  Spellcardshape,
  Description,
  Container,
  Title,
  DetailsButton
} from "./styles";
import { Props } from "./types";

const CardSpells: FC<Props> = ({ name, description,spellId, onClick }) => {
  return (
      <Spellcardinner>
        <Spellcardshape>
        </Spellcardshape>
        <Container>
          <Title>Name: {name}</Title>
          <Description>Description: {description}</Description>
          <DetailsButton onClick={() => onClick(spellId)}>Edit</DetailsButton>
        </Container>
    
      </Spellcardinner>
  );
};

export default CardSpells;
