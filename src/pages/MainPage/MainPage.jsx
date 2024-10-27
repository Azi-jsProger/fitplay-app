import React from 'react';
import styles from './main.module.css'
import {useDispatch} from "react-redux";
import {setData} from "../../redux/slices/dataSlices";
import {useNavigate} from "react-router-dom";

const MainPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

function switchClick() {
    navigate(`/register`)
    dispatch(setData('Hello'));
}

    return (
        <div>
            Привет
            <button onClick={switchClick}>Click</button>
        </div>
    );
};

export default MainPage;