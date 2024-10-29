import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const { loading, error } = useSelector(state => state.user);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        dispatch(loginUser(data)).then((action) => {
            if (action.type === 'user/login/fulfilled') {
                navigate('/profile'); // Перенаправляем на страницу профиля после успешной авторизации
            }
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Username" {...register('username')} required />
                <input type="password" placeholder="Password" {...register('password')} required />
                <button type="submit" disabled={loading}>Login</button>
            </form>
            {error && <p>{error.message || error}</p>} {/* Отображаем ошибку */}
        </div>
    );
};

export default LoginPage;
