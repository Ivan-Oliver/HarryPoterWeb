import { FC, useCallback, useState } from 'react'
import { Props } from './types'
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Wrapper, LogoContainer, Menu, MenuItem, Title, MenuItemLink, MobileIcon, ButtonLogo } from './styles'
import { FaBars, FaUserAlt, FaGamepad } from 'react-icons/fa';
import { GiMagicBroom } from 'react-icons/gi';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { BiCategory } from 'react-icons/bi';
import { IconContext } from 'react-icons';

const Navbar: FC<Props> = ({ type = 'list' }) => {
    const location = useLocation();
    const isLoginOrSignUp = location.pathname === "/login" || location.pathname === "/signUp" || location.pathname === "/";

    const profile = isLoginOrSignUp ? "Login" : "Profile";
    const showProfileButton = location.pathname !== "/profile";

    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const navigate = useNavigate()

    const handleBackCategories = useCallback(() => {
        navigate('/categories')
    }, [navigate])

    const handleGoToProfile = useCallback(() => {
        navigate("/profile");
    }, [navigate]);

    const handleLogout = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        window.localStorage.clear()
        navigate('/welcome')
    }, [navigate])

    const handleGoToGame = useCallback(() => {
        navigate("/randoms");
    }, [navigate]);

    const handleGoToPlayerMusic = useCallback(() => {
        navigate("/playermusic");
    }, [navigate]);

    return (
        <Container>
            <Wrapper>
                <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
                    <LogoContainer>
                        <ButtonLogo onClick={handleBackCategories}><GiMagicBroom /></ButtonLogo>
                        <Title>Harry Potter</Title>
                    </LogoContainer>
                    <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        <FaBars />
                    </MobileIcon>
                    <Menu $open={showMobileMenu}>
                        <MenuItem>
                            <MenuItemLink onClick={handleLogout}><RiLogoutBoxLine />Logout</MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink onClick={handleGoToGame}> <FaGamepad />Jugar </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink onClick={handleBackCategories}><BiCategory />Categories </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink onClick={handleGoToProfile}> <FaUserAlt />Profile </MenuItemLink>
                        </MenuItem>
                    </Menu>
                </IconContext.Provider>
            </Wrapper>
        </Container>
    )
}

export default Navbar