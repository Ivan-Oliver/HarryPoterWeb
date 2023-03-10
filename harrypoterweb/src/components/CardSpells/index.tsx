import { FC } from "react";
import {
  Spellcardinner,
  Spellcardshape,
  Description,
  Container,
  Title
} from "./styles";
import { Props } from "./types";

const CardSpells: FC<Props> = ({ name, description, onClick }) => {
  return (
      <Spellcardinner>
        <Spellcardshape>
        </Spellcardshape>
        <Container>
          <Title>Name: {name}</Title>
          <Description>Description: {description}</Description>
        </Container>
    
      </Spellcardinner>
  );
};

export default CardSpells;
