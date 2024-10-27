import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import LoginPage from "../pages/LoginPage/LoginPage";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path={`/`} element={<MainPage />} />
            <Route path={`/login`} element={<LoginPage />}/>
            <Route path={`/register`} element={<RegisterPage />} />
        </Routes>
    );
};

export default MainRoutes;