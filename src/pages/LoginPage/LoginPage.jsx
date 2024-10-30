import React from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../../redux/slices/userSlice';
import {useNavigate} from 'react-router-dom';
import cls from './login.module.css'
import ButtonMaterial from "../../components/MaterialButton/button";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import logo from '../../assets/logotype.png'

const LoginPage = () => {
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const {loading, error} = useSelector(state => state.user);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        dispatch(loginUser(data)).then((action) => {
            if (action.type === 'user/login/fulfilled') {
                navigate('/profile'); // Перенаправляем на страницу профиля после успешной авторизации
            }
        });
    };

    return (<div className={cls.login}>
            <div className={cls.top_nav}>
                <button onClick={() => navigate('/')} className={cls.back}>
                    <ArrowBackIosIcon style={{fontSize: '50px', color: 'white', margin: '20px 0 0 20px'}}/>
                </button>
            </div>
            <img className={cls.logo} src={logo} alt=""/>
            <div className='container'>
                <div className={cls.form}>

                    {/*<div className={cls.lock}>*/}
                    {/*    <LockPersonIcon style={{fontSize:"120px",color:'#108c70'}}/>*/}
                    {/*</div>*/}
                    <form className={cls.login_form} onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" placeholder="Username" {...register('username')} required/>
                        <input type="password" placeholder="Password" {...register('password')} required/>
                        <ButtonMaterial style={{width: "300px", background: '#5fcbb2', color: 'white', border: '0'}}
                                        type="submit" text={'Login'} variant={'outlined'}
                                        disabled={loading}></ButtonMaterial>
                        <p className={cls.link}>Don't have an account? <a href="" onClick={() => navigate('/register')}>Create an account</a></p>
                    </form>
                    {error && <p style={{color:'red'}}>{error.message || error}</p>}
                </div>
            </div>

            <div className={cls.bottom_nav} />
        </div>);
};

export default LoginPage;
