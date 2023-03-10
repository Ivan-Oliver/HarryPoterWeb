import React, { FC } from 'react'
import {
  ButtonBoxes,
  WelcomeContainer,
  ButtonCharacters,
  ButtonStudents,
  ButtonStaffs,
  ButtonSpells
} from './styles'

const Categories: FC = () => {

  return (
    <WelcomeContainer>
      <ButtonBoxes>
      <ButtonCharacters to="/characters">Characters</ButtonCharacters>
      <ButtonStudents to="/students">Students</ButtonStudents>
      <ButtonStaffs to="/staff">Staff</ButtonStaffs>
      <ButtonSpells to="/spells">Spells</ButtonSpells>
      </ButtonBoxes>
    </WelcomeContainer>
  )
}

export default Categories
