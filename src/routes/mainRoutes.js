import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SettingsPage from "../pages/SettingsPage/SettingsPage";
import MapPage from "../pages/MapPage/MapPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import Form from "../pages/Form/Form";
import NotificationsPage from "../pages/NotificationsPage/NotificationsPage";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path={`/`} element={<MainPage />} />
            <Route path={`/login`} element={<LoginPage />}/>
            <Route path={`/register`} element={<RegisterPage />} />
            <Route path={`/settings`} element={<SettingsPage />} />
            <Route path={`/map`} element={<MapPage />} />
            <Route path={`/profile`} element={<ProfilePage />} />
            <Route path={`/form`} element={<Form />} />
            <Route path={`/notifications`} element={<NotificationsPage />} />
        </Routes>
    );
};

export default MainRoutes;