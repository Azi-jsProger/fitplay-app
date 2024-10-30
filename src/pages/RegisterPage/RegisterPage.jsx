import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import cls from './register.module.css'
import ButtonMaterial from "../../components/MaterialButton/button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const RegisterPage = () => {
    const { register, handleSubmit, watch, setError } = useForm();
    const dispatch = useDispatch();
    const { loading, error } = useSelector(state => state.user);
    const navigate = useNavigate();
    const password = watch('password');

    const onSubmit = (data) => {
        dispatch(registerUser(data)).then((action) => {
            if (action.type === 'user/register/fulfilled') {
                navigate('/profile');
            } else {
                setError('server', { message: action.payload.message || 'Registration failed' });
            }
        });
    };

    return (
        <div className={cls.register}>
            <div className={cls.topNav}>
                <button onClick={() => navigate('/')} className={cls.back}>
                    <ArrowBackIosIcon style={{fontSize: '50px', color: 'white', margin: '20px 0 0 20px'}}/>
                </button>
                <h2>Create your account</h2>
            </div>
            <form className={cls.register_form} onSubmit={handleSubmit(onSubmit)}>
                <input type="email" placeholder="Email" {...register('email')} required />
                <input type="text" placeholder="FullName" {...register('fullname')} required />
                <input type="text" placeholder="Username" {...register('username')} required />
                <input type="password" placeholder="Password" {...register('password', { required: true })} />
                <input
                    type="password"
                    placeholder="Repeat Password"
                    {...register('repeatPassword', {
                        validate: value => value === password || "Passwords do not match"
                    })}
                />
                <ButtonMaterial style={{color:'white', background:"#108c70",width:"300px", height:'40px', borderRadius:'23px'}} type="submit" text={'Register'} disabled={loading} />
                <p className={cls.link}>Already have an account? <a href="" onClick={() => navigate('/login')}>Authorization</a></p>
            </form>
            {error && <p>{error.message || error}</p>}
        </div>
    );
};

export default RegisterPage;