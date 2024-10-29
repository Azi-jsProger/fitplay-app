import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const { register, handleSubmit, watch, setError } = useForm();
    const dispatch = useDispatch();
    const { loading, error } = useSelector(state => state.user);
    const navigate = useNavigate();
    const password = watch('password');

    const onSubmit = (data) => {
        dispatch(registerUser(data)).then((action) => {
            if (action.type === 'user/register/fulfilled') {
                navigate('/profile'); // Перенаправляем на страницу профиля после успешной регистрации
            } else {
                setError('server', { message: action.payload.message || 'Registration failed' });
            }
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" placeholder="Email" {...register('email')} required />
                <input type="text" placeholder="FullName" {...register('fullname')} required />
                <input type="text" placeholder="Username" {...register('username')} required />
                <input
                    type="password"
                    placeholder="Password"
                    {...register('password', { required: true })}
                />
                <input
                    type="password"
                    placeholder="Repeat Password"
                    {...register('repeatPassword', {
                        validate: value => value === password || "Passwords do not match"
                    })}
                />
                <button type="submit" disabled={loading}>Register</button>
            </form>
            {error && <p>{error.message || error}</p>}
        </div>
    );
};

export default RegisterPage;
