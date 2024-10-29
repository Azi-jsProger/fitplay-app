import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import BottomNav from "../../components/navigation/BottomNav";
import {logout} from '../../redux/slices/userSlice';
import TopNav from "../../components/navigation/TopNav";
import cls from './profile.module.css';
import ProfileModal from './ProfileModal'; // Импортируем модалку
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Loader from "../../components/loader/loader";


const ProfilePage = () => {
    const {userInfo, isAuthenticated} = useSelector(state => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [profile, setProfile] = useState({avatarUrl: '', username: '', email: '', fullname: ''});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!isAuthenticated || !token) {
            navigate('/login');
            return;
        }

        const fetchProfile = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`http://localhost:8888/profile/${userInfo._id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setProfile(response.data);
            } catch (error) {
                console.error('Error fetching profile:', error);
                setError(error.response ? error.response.data.message : 'Error fetching profile data');
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [isAuthenticated, userInfo, navigate]);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const updateAvatarUrl = (newAvatarUrl) => {
        setProfile((prevProfile) => ({...prevProfile, avatarUrl: newAvatarUrl}));
    };

    if (loading) return <div className={cls.loader}><Loader /></div>;
    if (error) return <p>{error}</p>;

    return (
        <div className={cls.profile}>
            <TopNav/>
            <div className='container'>
                <div className={cls.description}>

                    <div className={cls.username}>
                        <div>
                            {profile.avatarUrl ? (
                                <img src={profile.avatarUrl} alt="Avatar" className={cls.avatar} onClick={toggleModal}/>
                            ) : (
                                <AccountCircleIcon onClick={toggleModal} style={{cursor: 'pointer'}}/>
                            )}
                        </div>
                        <p>{profile.username}</p>
                        /
                        <p>{profile.fullname}</p>
                    </div>
                    <div className={cls.email}><p>Email: {profile.email}</p></div>
                </div>
            </div>
            <BottomNav/>
            <ProfileModal
                isOpen={isModalOpen}
                onRequestClose={toggleModal}
                userId={userInfo._id}
                token={localStorage.getItem('token')}
                onLogout={handleLogout}
                onAvatarUpdate={updateAvatarUrl}
            />
        </div>
    );
};

export default ProfilePage;
