import styled from "styled-components";


export const Card = styled.main`
  width: 400px;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 
  background: white;
  border-radius: 15px;
  box-shadow: 7px 13px 37px rgba(0, 0, 0, alpha);

`

export const Header = styled.header`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;

&:before{
    content: "";
    position: absolute;
    border-top: 30px solid transparent;
    border-left: 400PX solid white;
    bottom: 0;

}

`

export const Imagen = styled.img`
  width: 100%;
  height: 199px;
`
export const Section = styled.section`
  padding: 10px;
  overflow: hidden;
  text-align: center;
`

export const ContainerProfile = styled.div`
   
    
`

export const IdContainer = styled.p`
font-size: larger;

`

export const EmailContainer = styled.p`

`

export const ButtonBack = styled.button`
font-size: 50px;    
border: none;
text-decoration: none;
background: transparent;
`
export const Footer = styled.footer`
width: 100%;
height: 80px;
background: #314652;
color: white;
position: relative;
&:before{
    content: "";
    position: absolute;
    border-bottom: 30px solid transparent;
    border-right: 400px solid white;
    top: 0;
}
`
