import React, { FC } from 'react'
import Navbar from "../../components/Navbar";
import {
  ButtonBoxes,
  WelcomeContainer,
} from './styles'

const Categories: FC = () => {

  return (
    <WelcomeContainer>
          <Navbar/>
      <ButtonBoxes>
      </ButtonBoxes>
    </WelcomeContainer>
  )
}

export default Categories
