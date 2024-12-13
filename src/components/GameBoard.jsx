import React, { useState } from 'react';
import { Howl, Howls } from 'howler';
import '/src/sass/styles.css';
import { initializedSounds } from '../sounds';
import jollyrogerbay from '../sounds/jollyrogerbay.mp3';

// const GameBoard = () => {
//     return (
//         <div className="game-board">
//             {/* Game elements/logic */}
//         </div>
//     );
// };

// const GameBoard = ({ selectedShape }) => {
//     return (
//         <div className="game-board">
//             {selectedShape === 'square' && <div id="square"></div>}
//             {selectedShape === 'circle' && <div id="circle"></div>}
//             {selectedShape === 'rectangle' && <div id="rectangle"></div>}
//             {selectedShape === 'oval' && <div id="oval"></div>}
//             {selectedShape === 'diamond' && <div id="diamond"></div>}
//         </div>
//     );
// };

export const backgroundMusic = new Howl({
  src: jollyrogerbay,
  autoplay: true,
  loop: true,
  volume: 0.15
})

backgroundMusic.play();  

const shapeSoundMap = {
  square: 0,
  circle: 1,
  rectangle: 2,
  oval: 3,
  diamond: 4,
};

const colorSoundMap = {
  blue: 5,
  red: 6,
  yellow: 7,
  purple: 8,
  green: 9,
  orange: 10
}

const playSoundForShape = shape => {
  const soundIndex = shapeSoundMap[shape];

  if (soundIndex !== undefined && initializedSounds[soundIndex]) {
    initializedSounds[soundIndex].howl.play();
  }
};

const playSoundForColor = color => {
  const colorIndex = colorSoundMap[color];

  if (colorIndex !== undefined && initializedSounds[colorIndex]) {
    initializedSounds[colorIndex].howl.play();
  }
}

const GameBoard = ({ selectedShape, selectedColor }) => {
  
  const [shapes, setShapes] = useState([]);
  const [color, setColor] = useState('White');

  // Whenever selectedShape changes, add it to shapes list
  React.useEffect(() => {
    if (selectedShape) {
      setShapes(prevShapes => [...prevShapes, { shape: selectedShape }]);
    }
    // if (selectedColor) {
    //     setColor(prevColor => [...prevColor, { color: selectedColor }]);
    // }

    // play sound for selected shape:
    playSoundForShape(selectedShape);
  }, [selectedShape]);

  React.useEffect(() => {
    if (selectedColor) {
      setColor(selectedColor);

      playSoundForColor(selectedColor);
    }
  }, [selectedColor]);

  // React.useEffect(() => {
  //     if (selectedShape) {
  //         const shapeExists = shapes.some(e => e.shape === selectedShape);

  //         if (shapeExists) {
  //             setShapes(prevShapes => prevShapes.map(e =>
  //                 e.shape === selectedShape ? { ...selectedColor, color: selectedColor } : e));
  //         }
  //         else {
  //             setShapes(prevShapes => [...prevShapes, { shape: selectedShape, color: selectedColor }]);
  //         }
  //     }
  // }, [selectedShape, selectedColor]);

  return (
    <div className='game-board'>
      {shapes.map((shape, index) => (
        <div
          style={{ backgroundColor: color }}
          id={`${shape.shape}1`}
          key={index}>
          {shape.shape}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
