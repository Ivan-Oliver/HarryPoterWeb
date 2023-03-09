import { FC } from "react";
import {
  Spellcardinner,
  Spellcardshape,
  DetailsButton,
  Description,
  Container,
  Title
} from "./styles";
import { Props } from "./types";

const CardSpells: FC<Props> = ({ name, spellId, description, onClick }) => {
  return (
      <Spellcardinner>
        <Spellcardshape>
        </Spellcardshape>
        <Container>
          <Title>Name: {name}</Title>
          <Description>Description: {description}</Description>
        </Container>
        {/* <DetailsButton onClick={() => onClick(spellId)}>Edit</DetailsButton> */}
    
      </Spellcardinner>
  );
};

export default CardSpells;
