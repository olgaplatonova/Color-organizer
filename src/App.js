import './app.scss';
import React, {useState} from 'react';
import colorData from './color-data.json';
import ColorList from './ColorList/ColorList';

export default function App( ) {
  const [colors, setColors] = useState(colorData)

  return (

    <ColorList
        colors = {colors}
        onRateColor= { (id, rating) => {
            setColors(
                colors.map(color => color.id === id ? { ...color, rating } : color)
            )
        }}
        onRemoveColor = { id => {
          setColors(
              colors.filter(color => color.id !== id)
          )
        }}

    />
  );
}

