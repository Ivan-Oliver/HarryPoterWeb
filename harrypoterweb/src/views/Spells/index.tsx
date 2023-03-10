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
  ButtonContainer,
  ButtonNext,
  ButtonPreview,
  Container,
  ButtonBack,
  SyncButton,
} from "./styles";

const Spells: FC = () => {
  const [spellsList, setSpellsList] = useState<SpellResponse[]>([]);
  const navigate = useNavigate();
  const [loading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState(1);

  const getSpellsList = useCallback(async () => {
    const spells = await getSpells();
    setSpellsList(spells);
  }, []);

  const handleGoToBack = useCallback(() => {
    navigate("/categories", { replace: true });
  }, [navigate]);

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

  if (loading) {
    return <h1>LOADING</h1>;
  }

  return (
    <App>
      <Navbar />
      <SyncButton onClick={handleSyncSpells}>Sync Spells</SyncButton>
      <ButtonBack onClick={handleGoToBack}>Go Back!</ButtonBack>
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
      <ButtonContainer>
        <ButtonPreview onClick={handlePrevPage}>Previous</ButtonPreview>
        <ButtonNext onClick={handleNextPage}>Next</ButtonNext>
      </ButtonContainer>
    </App>
  );
};

export default memo(Spells);
