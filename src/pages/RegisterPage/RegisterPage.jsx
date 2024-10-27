import React from 'react';
import styles from './register.module.css'
import {useSelector} from "react-redux";

const RegisterPage = () => {
    const text = useSelector(state => state.data);

    return (
        <div>
            Register
            <h1>{text}</h1>
        </div>
    );
};

export default RegisterPage;