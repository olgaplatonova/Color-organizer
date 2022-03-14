import React from 'react';
import {FaStar} from 'react-icons/fa';

export default function Star ({selected = false, onSelect = f => f}) {
    return (
        <>
            <FaStar color={selected ? '#FFC042' : '#75D1FF'} onClick={onSelect} size={20}/>
        </>
    );
}

Star.propTypes = {};

