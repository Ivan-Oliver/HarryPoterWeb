import styled from 'styled-components'
import { Link } from 'react-router-dom'
import CharacterImg from '../../assets/harry-potter-desktop.jpg'


export const WelcomeContainer = styled.div`
background-image: url(${CharacterImg});
background-repeat: no-repeat;
background-size: cover;
width: 100vw;
height:100vh;
background-position: 100% 100%;
align-items: center;
display: flex;
justify-content: center;

`
export const ButtonBoxes = styled.div`
position: absolute;
top: 20vh;
flex-direction:column;
margin-left: 90px;
display: flex;
`

export const ButtonCharacters = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
background-repeat: no-repeat;
background-size: cover;
max-width: 100%;
max-height: 100%;
width: 400px;
height: 100px;
border-radius: 20px;
margin-bottom: 2rem;
cursor: pointer;
position: relative;
border: none;
font-size: 24px;
text-decoration: none;
`

export const ButtonStudents = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
background-repeat: no-repeat;
background-size: cover;
max-width: 100%;
max-height: 100%;
width: 400px;
height: 100px;
border-radius: 20px;
margin-bottom: 2rem;
cursor: pointer;
position: relative;
border: none;
font-size: 24px;
text-decoration: none;
`

export const ButtonStaffs = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
background-repeat: no-repeat;
background-size: cover;
max-width: 100%;
max-height: 100%;
width: 400px;
height: 100px;
border-radius: 20px;
margin-bottom: 2rem;
cursor: pointer;
position: relative;
border: none;
font-size: 24px;
text-decoration: none;
`

export const ButtonSpells = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
background-repeat: no-repeat;
background-size: cover;
max-width: 100%;
max-height: 100%;
width: 400px;
height: 100px;
border-radius: 20px;
margin-bottom: 2rem;
cursor: pointer;
position: relative;
border: none;
font-size: 24px;
text-decoration: none;
`