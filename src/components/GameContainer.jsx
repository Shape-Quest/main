import React, { useState } from 'react';
import GameHeader from './GameHeader';
import ToolBar from './ToolBar';
import GameBoard from './GameBoard';

const GameContainer = () => {
    const [selectedShape, setSelectedShape] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [shapes, setShapes] = useState([]);

    return (
        <div className="game-container">
            <ToolBar setSelectedShape={setSelectedShape} setSelectedColor={setSelectedColor} setShapes={setShapes}/>
            <GameBoard selectedShape={selectedShape} selectedColor={selectedColor} shapes={shapes} setShapes={setShapes}/>
        </div>
    );
};

export default GameContainer;