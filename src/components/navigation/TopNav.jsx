import React from 'react';
import styles from './topNav.module.css';
import { useNavigate, useLocation } from "react-router-dom";
import logo from '../../assets/logo.jpg';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const TopNav = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Определяем, активна ли страница настроек
    const isSettingsPage = location.pathname === '/settings';

    const handleSettingsClick = () => {
        navigate('/settings');
    };

    return (
        <div className={styles.nav}>
            <div className="container">
                <div className={styles.nav_flex}>
                    {/* Меняем цвет иконки настроек в зависимости от активного состояния */}
                    <SettingsIcon
                        sx={{ color: isSettingsPage ? '#60d2b9' : '#666666' , fontSize:'35px'}}
                        onClick={handleSettingsClick}
                        aria-label="Settings"
                    />
                    <img src={logo} alt="Company Logo" className={styles.logo} />
                    <NotificationsIcon style={{color:'#666666', fontSize:'35px'}} onClick={() => navigate('/notifications')} aria-label="Notifications" />
                </div>
            </div>
        </div>
    );
};

export default TopNav;
