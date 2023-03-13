import styled from 'styled-components'
import { Link } from 'react-router-dom'
import CategoriesImg from '../../assets/harry-potter-desktop.jpg'
import CharactersImg from '../../assets/wallpaperflare.com_wallpaper2.jpg'
import StudentsImg from '../../assets/wallpaperflare.com_wallpaper3.jpg'
import StaffsImg from '../../assets/wallpaperflare.com_wallpaper1.jpg'
import SpellsImg from '../../assets/wallpaperflare.com_wallpaper4.jpg'

export const WelcomeContainer = styled.div`
background-image: url(${CategoriesImg});
background-repeat: no-repeat;
background-size: cover;
background-position: 100% 100%;
width: 100vw;
height:100vh;
align-items: center;
display: flex;
justify-content: center;
`
export const ButtonBoxes = styled.div`
position: absolute;
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
    color:${({ theme }) => theme.colors.white100};
    margin: 20px;
    padding: 5px;
    text-align: center;
    text-decoration: none;
    &:hover{
      background-image: url(${CharactersImg});
        color:${({ theme }) => theme.colors.white100};
        box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.8);
        font-size: 40px;
       font-weight: bold;
       padding: 20px;
       text-align: center;
       -webkit-transition-duration: 0.4s; 
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    &:active{
  transform: translateY(4px);
    }
    
    }   
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
    color:${({ theme }) => theme.colors.white100};
    margin: 20px;
    padding: 5px;
    text-align: center;
    text-decoration: none;
    &:hover{
      background-image: url(${StudentsImg});
        color:${({ theme }) => theme.colors.white100};
        box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.8);
        font-size: 40px;
       font-weight: bold;
       padding: 20px;
       text-align: center;
       -webkit-transition-duration: 0.4s; 
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    &:active{
  transform: translateY(4px);
    }
    
    }
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
    color:${({ theme }) => theme.colors.white100};
    margin: 20px;
    padding: 5px;
    text-align: center;
    text-decoration: none;
    &:hover{
      background-image: url(${StaffsImg});
        color:${({ theme }) => theme.colors.white100};
        box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.8);
        font-size: 40px;
       font-weight: bold;
       padding: 20px;
       text-align: center;
       -webkit-transition-duration: 0.4s; 
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    &:active{
  transform: translateY(4px);
    }
    
    }
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
    color:${({ theme }) => theme.colors.white100};
    margin: 20px;
    padding: 5px;
    text-align: center;
    text-decoration: none;
    &:hover{
      background-image: url(${SpellsImg});
        color:${({ theme }) => theme.colors.white100};
        box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.8);
        font-size: 40px;
       font-weight: bold;
       padding: 20px;
       text-align: center;
       -webkit-transition-duration: 0.4s; 
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    &:active{
  transform: translateY(4px);
    }
    
    }
`