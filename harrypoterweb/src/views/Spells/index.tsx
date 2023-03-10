import { FC, memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardSpells from "../../components/CardSpells";
import Navbar from "../../components/Navbar";
import {
  getSpells,
  SpellResponse,
  syncSpells,
} from "../../services/api/spells";
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

const Spells: FC = () => {
  const [spellsList, setSpellsList] = useState<SpellResponse[]>([]);
  const navigate = useNavigate();
  const [loading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState(1);
  const [name, setName] = useState("")

  const getSpellsList = useCallback(async () => {
    const spells = await getSpells();
    setSpellsList(spells);
  }, []);

  const handleSyncSpells = useCallback(async () => {
    await syncSpells();
    setIsLoading(false);
    getSpellsList();
  }, []);

  useEffect(() => {
    getSpellsList();
  }, [getSpellsList]);

  const handleGoToEdit = useCallback(
    (spellId: string) => {
      console.log("G TO DETAILS", spellId);
      navigate(`/spells/${spellId}`, { replace: true });
    },
    [navigate]
  );

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleClickSearch = useCallback(async () => {
    setIsLoading(true);
    const characters = await getSpells();
    setSpellsList(characters.filter(character => character.name.toLowerCase().includes(name.toLowerCase())));  
    setIsLoading(false);
  }, [name])

  if (loading) {
    return <h1>LOADING</h1>;
  }

  return (
    <App>
      <Navbar />
      <SyncButton onClick={handleSyncSpells}>Sync Spells</SyncButton>
      <InputSearch type="text" value={name} placeholder="Find your favorite character..." onChange={(e) => setName(e.target.value)} />
        <ButtonSearch onClick={handleClickSearch}>🔍</ButtonSearch>
      <Container>
        {spellsList
          .slice((page - 1) * 8, (page - 1) * 8 + 8)
          .map((spell, index) => (

            <div key={index}>
              <CardSpells
                spellId={spell.id}
                name={spell.name}
                description={spell.description}
                onClick={handleGoToEdit}

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

export default memo(Spells);
