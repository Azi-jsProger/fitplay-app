import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../redux/slices/userSlice';
import i18n from '../../i18n'; // Импортируйте вашу конфигурацию i18next

export default function SelectVariants() {
    const dispatch = useDispatch();
    const language = useSelector((state) => state.user.language || 'ky'); // Установите значение по умолчанию

    const handleChange = (event) => {
        const selectedLanguage = event.target.value;
        dispatch(setLanguage(selectedLanguage));
        i18n.changeLanguage(selectedLanguage); // Измените язык i18next
    };

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 300 }}>
                <Select
                    value={language}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="ky">Кыргызский</MenuItem>
                    <MenuItem value="ru">Русский</MenuItem>
                    <MenuItem value="en">English</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
