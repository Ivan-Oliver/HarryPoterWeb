import { FC, memo, useCallback, useEffect, useState } from "react";
import { Character } from "../../models/characters";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import {
  getCharacters,
  syncCharacters} from "../../services/api/characters";
import {
  App,
  FotterPage,
  ButtonNext,
  ButtonPreview,
  Container,
  SyncButton,
  InputSearch,
  ButtonSearch
} from "./styles";

const Characters: FC = () => {
  const [characterList, setCharacterList] = useState<Character[]>([]);
  const navigate = useNavigate();
  const [isloading, setIsLoading] = useState<boolean>(false);
  const [name, setName] = useState("")
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


  useEffect(() => {
    getCharactersList();
  }, [getCharactersList]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleClickSearch = useCallback(async () => {
    setIsLoading(true);
    const characters = await getCharacters();
    setCharacterList(characters.filter(character => character.name.toLowerCase().includes(name.toLowerCase())));  
    setIsLoading(false);
  }, [name])

  if (isloading) {
    return <h1>LOADING</h1>;
  }
  return (
    <App>
    <Navbar/>
      <SyncButton onClick={handleSyncApi}>Sync Characters</SyncButton>
      <InputSearch type="text" value={name} placeholder="Find your favorite character..." onChange={(e) => setName(e.target.value)} />
        <ButtonSearch onClick={handleClickSearch}>🔍</ButtonSearch>
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
      <FotterPage>
        <ButtonPreview onClick={handlePrevPage}>Previous</ButtonPreview>
        <ButtonNext onClick={handleNextPage}>Next</ButtonNext>
      </FotterPage>
    </App>
  );
};

export default memo(Characters);
