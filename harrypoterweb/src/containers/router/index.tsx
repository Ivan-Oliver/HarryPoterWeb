import { FC } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from '../../views/Categories';
import Welcome from "../../views/Welcome"

const Router: FC = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/welcome' element={<Welcome/>}/>
            <Route path='/categories' element={<Categories/>}/>

        </Routes>
        </BrowserRouter>
    )
}

export default Router;