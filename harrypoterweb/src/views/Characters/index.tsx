import { FC, memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import {
  getCharacters,
  syncCharacters,
  CharacterResponse
} from "../../services/api/characters";
import {
  App,
  BackContainer,
  ButtonBack,
  ButtonContainer,
  ButtonNext,
  ButtonPreview,
  Container,
  SyncButton,
} from "./styles";

const Characters: FC = () => {
  const [characterList, setCharacterList] = useState<CharacterResponse[]>([]);
  const navigate = useNavigate();
  const [isloading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState(1);

  const getCharactersList = useCallback(async () => {
    const characters = await getCharacters();
    setCharacterList(characters);
  }, []);

  const handleSyncApi = useCallback(async () => {
    await syncCharacters();
    setIsLoading(false);
    getCharactersList();
  }, []);

  const handleGoToBack = useCallback(() => {
    navigate("/categories");
  }, [navigate]);

  useEffect(() => {
    getCharactersList();
  }, [getCharactersList]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  if (isloading) {
    return <h1>LOADING</h1>;
  }
  return (
    <App>
    <Navbar/>
      <BackContainer>
        <ButtonBack onClick={handleGoToBack}>Go Back!</ButtonBack>
      </BackContainer>
      <SyncButton onClick={handleSyncApi}>Sync Characters</SyncButton>
      <Container>
        {characterList
          .slice((page - 1) * 8, (page - 1) * 8 + 8)
          .map((character, index) => (
            <div key={index}>
              <Card
                image={character.image}
                name={character.name}
                house={character.house}
                id={character.id}
                type="characters"
              />
              
            </div>
          ))}
      </Container>
      <ButtonContainer>
        <ButtonPreview onClick={handlePrevPage}>Previous</ButtonPreview>
        <ButtonNext onClick={handleNextPage}>Next</ButtonNext>
      </ButtonContainer>
    </App>
  );
};

export default memo(Characters);
