import { FC, memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from 'react-icons/bi';
import Profiles from '../../assets/unnamed.jpg';
import { getToken } from "../../services/storage";
import {Card, Header,Imagen, Section,ContainerProfile, EmailContainer, IdContainer, ButtonBack, Footer } from "./styles";
import Navbar from "../../components/Navbar";

const Profile: FC = () => {
    const[userData, setUserData] = useState<{ id: string, email: string } | null>(null);
    const navigate = useNavigate()

    const handleBackCategories = useCallback(() => {
        navigate('/characters')
    }, [navigate])

    const userInfo = useCallback(async () => {

        const token = getToken();
        const response = await fetch('http://localhost:8000/users/profile', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })

        const data = await response.json();
        setUserData(data)
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            await userInfo();
        };
        fetchData();
    }, [userInfo]);

    return (
        <>     
    <Navbar/>
        <ButtonBack onClick={handleBackCategories}><BiArrowBack/></ButtonBack>
            <Card>
                <Header>
                    <Imagen src={Profiles}  />
                </Header>
                <Section></Section>
                <ContainerProfile>
                    <IdContainer>ID: {userData?.id}</IdContainer>
                    <EmailContainer>Email: {userData?.email}</EmailContainer>
                </ContainerProfile>
                <Footer></Footer>

            </Card>
        </>
    )
}

export default memo(Profile)