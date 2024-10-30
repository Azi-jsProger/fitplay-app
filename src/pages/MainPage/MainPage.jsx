import React from 'react';
import styles from './main.module.css'
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import BottomNav from "../../components/navigation/BottomNav";
import TopNav from "../../components/navigation/TopNav";
import Slider from "../../components/slider/slider";
import Health from "../../components/health/health";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import {useTranslation} from 'react-i18next';


const MainPage = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function switchClick() {
        navigate(`/register`)
    }

    return (
        <div className={styles.menu}>
            <TopNav/>
            <div className="container main">
                <Slider></Slider>
                <Health></Health>
            </div>
            <h2 className={styles.title}>{t('achievement')}</h2>
            <div className={styles.task}>
                <CheckCircleIcon sx={{fontSize: '43px', color: "white"}}/>
                <HorizontalRuleIcon
                    sx={{fontSize: '43px', color: "white", margin: '0 -10px 0 -10px'}}></HorizontalRuleIcon>
                <CheckCircleIcon sx={{fontSize: '43px', color: "white"}}/>
                <HorizontalRuleIcon
                    sx={{fontSize: '43px', color: "white", margin: '0 -10px 0 -10px'}}></HorizontalRuleIcon>
                <Brightness1Icon sx={{fontSize: '43px', color: "white"}}/>
                <HorizontalRuleIcon
                    sx={{fontSize: '43px', color: "white", margin: '0 -10px 0 -10px'}}></HorizontalRuleIcon>
                <Brightness1Icon sx={{fontSize: '43px', color: "white"}}/>
            </div>

            <BottomNav/>
        </div>
    );
};

export default MainPage;