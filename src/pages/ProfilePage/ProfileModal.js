import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import './ProfileModal.css'

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
                type="text"
                placeholder="Enter image URL"
                value={avatarUrl}
                onChange={(e) => setAvatarUrl(e.target.value)}
            />
            <button onClick={handleChangeAvatar}>Update Avatar</button>
            <button onClick={handleLogout}>Logout</button>
        </Modal>
    );
};

export default ProfileModal;
