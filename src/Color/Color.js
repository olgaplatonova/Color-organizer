import React from 'react';
import './Color.scss';
import StarRating from '../StarRating/StarRating';

export default function Color  ({ title, color, rating }) {
    return (
        <>
            <div className={'color-wrapper'}>
                <div className={'color-box'} style={{backgroundColor: color}} />
                <div className={'preview-text'}>
                    <p> {title} </p>
                    <StarRating selectedStar={rating}/>
                </div>
            </div>


        </>
    );
}

Color.propTypes = {};
