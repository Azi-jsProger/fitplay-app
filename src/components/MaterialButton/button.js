import React from 'react';
import {Button} from "@mui/material";

const ButtonMaterial = (props) => {

    const {
        onClick, variant, color, text, style,disabled,type
    } = props

    return (
        <Button type={type} sx={style} variant={variant} disabled={disabled} onClick={onClick} color={color}>
            {text}
        </Button>
    );
};

export default ButtonMaterial;