import React from 'react';
import BottomNav from "../../components/navigation/BottomNav";
import TopNav from "../../components/navigation/TopNav";
import cls from './form.module.css'

const Form = () => {
    return (
        <div className={cls.form}>
            <TopNav />

            Form
            <BottomNav />
        </div>
    );
};

export default Form;