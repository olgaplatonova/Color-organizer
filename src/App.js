import './app.scss';
import React, {useState} from 'react';
import colorData from './color-data.json';
import ColorList from './ColorList/ColorList';

export default function App( ) {
  const [colors, setColors] = useState(colorData)

  return (

    <ColorList
        colors={colors}
        onRemoveColor={id => {
          const newColors = colors.filter(color => color.id !== id)
            console.log(newColors)
          setColors(newColors)
        }}
    />
  );
}

