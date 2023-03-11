import { FC, useCallback, memo, useState } from "react";
import { useNavigate } from "react-router-dom"; import {
  ButtonBoxes,
  ButtonLogin,
  WelcomeContainer
} from './styles'
import { Character } from "../../models/characters";
import { getCharacters } from "../../services/api/characters";
import Card from "../../components/Card";

const Randoms: FC = () => {
  const [character, setCharacter] = useState<Character | null>();
  const navigate = useNavigate();

  const handleGoToLogin = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const handleRandomCharacter = useCallback(async () => {
    const characters = await getCharacters()
    const randomCharacter = shuffleCharacters(characters)[0]
    setCharacter(randomCharacter)
  }, [])

  const shuffleCharacters = (characters: Character[]) => {
    for (let i = characters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = characters[i];
      characters[i] = characters[j];
      characters[j] = temp;
    }
    return characters;
  }

  return (
    <WelcomeContainer>
      <ButtonBoxes>
        <ButtonLogin onClick={handleRandomCharacter}>Jugar</ButtonLogin>
      </ButtonBoxes>
      <div>
        <Card
          image={character?.image}
          name={character?.name}
          house={character?.house}
          id={character?.id}
        />
      </div>
    </WelcomeContainer>
  )
}

export default memo(Randoms)
