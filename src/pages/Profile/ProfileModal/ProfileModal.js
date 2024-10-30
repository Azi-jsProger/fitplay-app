import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import './ProfileModal.css'
import Button from "../../../components/MaterialButton/button";
import ButtonMaterial from "../../../components/MaterialButton/button";

const ProfileModal = ({ isOpen, onRequestClose, userId, token, onLogout, onAvatarUpdate }) => {
    const [avatarUrl, setAvatarUrl] = useState('');

    const handleChangeAvatar = async () => {
        try {
            await axios.patch(`http://localhost:8888/users/${userId}`, { avatarUrl }, {
                headers: { Authorization: `Bearer ${token}` },
            });
            alert('Avatar updated successfully!');
            onAvatarUpdate(avatarUrl);
            onRequestClose();
        } catch (error) {
            console.error('Error updating avatar:', error);
            alert('Failed to update avatar');
        }
    };

    const handleLogout = () => {
        onLogout();
        onRequestClose();
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="modal" overlayClassName="overlay">
            <h2>Change Avatar</h2>
            <input
                className='input_search'
                type="text"
                placeholder="Enter image URL"
                value={avatarUrl}
                onChange={(e) => setAvatarUrl(e.target.value)}
            />
            <ButtonMaterial onClick={handleChangeAvatar} variant={'outlined'} text={'Update Avatar'} />
            <ButtonMaterial onClick={handleLogout}  variant={'outlined'} color={'error'} text={"Logout"} />
        </Modal>
    );
};

export default ProfileModal;
