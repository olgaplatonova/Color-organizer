import React from 'react';
import './Color.scss';
import StarRating from '../StarRating/StarRating';
import {FaTrash} from 'react-icons/fa';

export default function Color  ({ id, title, color, rating, onRemove = f => f }) {
    return (
        <>
            <div className={'color-wrapper'}>
                <div className={'background-color'} style={{backgroundColor: color}} />
                <div className={'trash'}>
                    <button onClick={() => onRemove(id)}>
                        <FaTrash />
                    </button>
                </div>

                <div className={'preview-text'}>
                    <p> {title} </p>
                    <StarRating selectedStar={rating}/>
                </div>
            </div>


        </>
    );
}

Color.propTypes = {};
