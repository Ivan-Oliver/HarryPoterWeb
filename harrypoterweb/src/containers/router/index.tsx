import { FC } from 'react'
import { BrowserRouter, Routes, Route, useLocation, Navigate} from "react-router-dom";
import { getToken } from "../../services/storage";
import SignupForm from "../../views/Auth/Signup";
import LoginForm from "../../views/Auth/Login";
import Categories from '../../views/Categories';
import Welcome from "../../views/Welcome"
import Characters from "../../views/Characters";
import Spells from "../../views/Spells";
import Staffs from '../../views/Staff';
import Students from '../../views/Students';
import Profile from "../../views/Profile";
import Randoms from "../../views/Randoms";
import PlayerMusic from '../../views/PlayerMusic';
import CreateForm from '../../views/CreateForm';
import EditCharacters from "../../views/EditCharacters";






const Router: FC = () => {

    const ProtectedRoutes = ({ children }: { children: JSX.Element }) => {
        const token = getToken();
        const location = useLocation();
    
        if (!token) {
          return <Navigate to="/" replace state={{ from: location }} />;
        }
        return children;
      };
      const HandleSession = ({ children }: { children: JSX.Element }) => {
        const token = getToken();
        const location = useLocation();
    
        if (token) {
          if (
            location.pathname === "/signup" ||
            location.pathname === "/login" ||
            location.pathname === "/"
          ) {
            return <Navigate to="/welcome" replace state={{ from: location }} />;
          }
        }
        return children;
    };

    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HandleSession><Welcome /></HandleSession>}></Route>
            <Route path='/welcome' element={<Welcome/>}/>
            <Route path='/categories' element={<Categories/>}/>
            <Route path='/signup' element={<SignupForm/>}/>
            <Route path='/login' element={<LoginForm/>}/>
            <Route path='/characters' element={<ProtectedRoutes><Characters/></ProtectedRoutes>}/>
            <Route path='/spells' element={<Spells/>}/>
            <Route path='/staff' element={<Staffs/>}/>
            <Route path='/students' element={<Students/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/randoms' element={<Randoms/>}/>
            <Route path='/playermusic' element={<PlayerMusic/>}/>
            <Route path='/createform' element={<CreateForm/>}/>
            <Route path='/characters/:id' element={<EditCharacters/>}/>






        </Routes>
        </BrowserRouter>
    )
}

export default Router;