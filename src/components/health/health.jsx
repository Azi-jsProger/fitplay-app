import React from 'react';
import cls from './health.module.css'
import run from '../../assets/run.png'
import heartbeat from '../../assets/heart.png'
import { useTranslation } from 'react-i18next';

const Health = () => {
    const {t} = useTranslation();

    return (
        <div className={cls.health}>
            <div>
                <img src={run} alt=""/>
                <h3>500 {t('step')}</h3>
            </div>
            <div>
                <img src={heartbeat} alt=""/>
                <h3>55 BPM</h3>
            </div>
        </div>
    );
};

export default Health;