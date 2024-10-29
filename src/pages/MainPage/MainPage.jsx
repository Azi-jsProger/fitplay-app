import React from 'react';
import styles from './main.module.css'
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import BottomNav from "../../components/navigation/BottomNav";
import TopNav from "../../components/navigation/TopNav";
import Slider from "../../components/slider/slider";

const MainPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function switchClick() {
        navigate(`/register`)
    }

    return (
        <div className={styles.menu}>
            <TopNav/>
            <div className="container">

                <Slider></Slider>
            </div>

            <BottomNav/>
        </div>
    );
};

export default MainPage;