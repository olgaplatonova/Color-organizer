import React from 'react';
import Color from '../Color/Color';
import './ColorList.scss'

export default function ColorList ({ colors = []}) {
    if (!colors.length) {return <div>Oooops, no colors</div>}

    return (
        <>
            <h1>Color Organizer</h1>
            <div className={'color-list'}>
                {colors.map(color => <Color key={color.id} {...color}/>
                )}
            </div>

        </>
    );
}

ColorList.propTypes = {};
