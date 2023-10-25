import React, { useState } from 'react';
import ColorTools from './ColorTools';
import ShapeTools from './ShapeTools';

const ToolBar = ({ setSelectedShape, setSelectedColor, setShapes }) => {

    //function to handle the state of the board, it restarts it
    function clearBoard(){
        setShapes([])
    }

    return (
        <div className="tool-bar">
            <ColorTools setSelectedColor={setSelectedColor} />
            {/* <ShapeTools color={color} /> */}
            <button id='button' onClick={clearBoard}>Clear Board</button>
            <ShapeTools setSelectedShape={setSelectedShape}/>
        </div>
    );
};

export default ToolBar;