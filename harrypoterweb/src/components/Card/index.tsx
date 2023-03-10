import { FC } from "react";
import {
  Container,
  Description,
  DescriptionApi,
  DetailsButton,
  Image,
} from "./styles";
import { Props } from "./types";

const Card: FC<Props> = ({
  name,
  house,
  image,
  id,
  species,
  wizard,
  ancestry,
  wand,
  patronus,
  actor,
  type,
}) => {
  console.log({ type });
  return (
    <Container>
      <Image src={image} />

      {type !== "edit" ? (
        <>
          <Description>
            Name:<DescriptionApi>{name}</DescriptionApi>
          </Description>
          <DescriptionApi>Hogwarts house:{house}</DescriptionApi>
          <DetailsButton to={`/${type}/${id}`}>View {type}</DetailsButton>
        </>
      ) : (
        <>
          <Description>Specie: {species}</Description>
          <Description>Is a wizard? {wizard}</Description>
          <Description>Ancestry: {ancestry}</Description>
          <Description>Wand: {wand}</Description>
          <Description>Patronus: {patronus}</Description>
          <Description>Actor: {actor}</Description>
          <Description>Id: {id}</Description>
          <DetailsButton to={`/${type}/${id}`}>Edit {type}</DetailsButton>
        </>
      )}
    </Container>
  );
};

export default Card;
