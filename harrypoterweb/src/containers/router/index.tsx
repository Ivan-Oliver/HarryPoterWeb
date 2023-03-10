import { FC } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupForm from "../../views/Auth/Signup";
import LoginForm from "../../views/Auth/Login";
import Categories from '../../views/Categories';
import Welcome from "../../views/Welcome"
import Characters from "../../views/Characters";
import Spells from "../../views/Spells";
import Staffs from '../../views/Staff';
import Students from '../../views/Students';
import Profile from "../../views/Profile";





const Router: FC = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/welcome' element={<Welcome/>}/>
            <Route path='/categories' element={<Categories/>}/>
            <Route path='/signup' element={<SignupForm/>}/>
            <Route path='/login' element={<LoginForm/>}/>
            <Route path='/characters' element={<Characters/>}/>
            <Route path='/spells' element={<Spells/>}/>
            <Route path='/staffs' element={<Staffs/>}/>
            <Route path='/students' element={<Students/>}/>
            <Route path='/profile' element={<Profile/>}/>

        </Routes>
        </BrowserRouter>
    )
}

export default Router;