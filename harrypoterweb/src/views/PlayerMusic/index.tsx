import { FC, memo } from "react";
import { useNavigate } from "react-router-dom";
import Player1 from "../../components/PlayerMusic";
import "@madzadev/audio-player/dist/index.css";
 import {
  WelcomeContainer
} from './styles'
import Navbar from "../../components/Navbar";

const PlayerMusic: FC = () => {

  return (
    <>
    <Navbar/>
    <WelcomeContainer>
        <Player1/>
    </WelcomeContainer>
    </>
  )
}

export default memo(PlayerMusic)
