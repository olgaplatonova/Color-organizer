import React from 'react';
import Color from '../Color/Color';
import './ColorList.scss'

export default function ColorList ({
                                       colors = [],
                                       onRemoveColor = f => f,
                                       onRateColor = f => f}) {
    if (!colors.length) {return <div className={'error-message'}>Oooops, no colors :( </div>}

    return (
        <>
            <h1>Color Organizer</h1>
            <div className={'color-list'}>
                {colors.map(color =>
                    <Color
                        key={color.id} {...color}
                        onRemove={onRemoveColor}
                        onRate={onRateColor}/>
                )}
            </div>

        </>
    );
}

ColorList.propTypes = {};
