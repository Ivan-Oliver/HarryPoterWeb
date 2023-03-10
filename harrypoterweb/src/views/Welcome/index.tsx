import { FC, useCallback } from "react";
import { useNavigate } from "react-router-dom"; import {
  ButtonBoxes,
  ButtonLogin,
  ButtonSignup,
  WelcomeContainer
} from './styles'

const Welcome: FC = () => {
  const navigate = useNavigate();

  const handleGoToLogin = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const handleGoToSignup = useCallback(() => {
    navigate("/signup");
  }, [navigate]);
  return (
    <WelcomeContainer>
      <ButtonBoxes>
        <ButtonLogin onClick={handleGoToLogin}>Login</ButtonLogin>
        <ButtonSignup onClick={handleGoToSignup}>Signup</ButtonSignup>
      </ButtonBoxes>
    </WelcomeContainer>
  )
}

export default Welcome
