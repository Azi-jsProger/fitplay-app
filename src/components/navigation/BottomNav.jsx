import React, {useEffect, useState} from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import HomeIcon from '@mui/icons-material/Home';
import {useNavigate, useLocation} from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function BottomNav() {
    const [value, setValue] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Устанавливаем значение value в зависимости от текущего маршрута
        switch (location.pathname) {
            case '/':
                setValue(0);
                break;
            case '/map':
                setValue(1);
                break;
            case '/form':
                setValue(2);
                break;
            case '/profile':
                setValue(3);
                break;
            default:
                setValue(-1); // Если ни один путь не совпадает
        }
    }, [location.pathname]);

    const handleNavigationChange = (event, newValue) => {
        setValue(newValue);
        switch (newValue) {
            case 0:
                navigate('/');
                break;
            case 1:
                navigate('/map');
                break;
            case 2:
                navigate('/form');
                break;
            case 3:
                navigate('/profile');
                break;
            default:
                break;
        }
    };
    const {t} = useTranslation();

    return (
        <BottomNavigation
            value={value}
            onChange={handleNavigationChange}
            showLabels
            style={{width: '100%'}}
        >
            <BottomNavigationAction
                label={t('navHome')}
                icon={<HomeIcon/>}
                style={{color: value === 0 ? '#60d2b9' : '#666666'}} // Активная кнопка — #60d2b9, остальные — #666666
            />
            <BottomNavigationAction
                label={t('navMap')}
                icon={<LocationOnIcon/>}
                style={{color: value === 1 ? '#60d2b9' : '#666666'}} // Активная кнопка — #60d2b9, остальные — #666666
            />
            <BottomNavigationAction
                label={t('navForm')}
                icon={<SlideshowIcon/>}
                style={{color: value === 2 ? '#60d2b9' : '#666666'}} // Активная кнопка — #60d2b9, остальные — #666666
            />
            <BottomNavigationAction
                label={t('navProfile')}
                icon={<AccountCircleIcon/>}
                style={{color: value === 3 ? '#60d2b9' : '#666666'}} // Активная кнопка — #60d2b9, остальные — #666666
            />
        </BottomNavigation>
    );
}

export default BottomNav;
