import { FC } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupForm from "../../views/Auth/Signup";
import LoginForm from "../../views/Auth/Login";
import Categories from '../../views/Categories';
import Welcome from "../../views/Welcome"

const Router: FC = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/welcome' element={<Welcome/>}/>
            <Route path='/categories' element={<Categories/>}/>
            <Route path='/signup' element={<SignupForm/>}/>
            <Route path='/login' element={<LoginForm/>}/>

        </Routes>
        </BrowserRouter>
    )
}

export default Router;