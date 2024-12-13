import React, { useState } from 'react';

function ColorSelector({ setSelectedColor }) {
  return (
    <section id='colors'>
      <button
        className='colorbuttons'
        id='blueButton'
        onClick={() => {
          setSelectedColor('blue');
        }}>
        Blue
      </button>
      <button
        className='colorbuttons'
        id='redButton'
        onClick={() => setSelectedColor('red')}>
        Red
      </button>
      <button
        className='colorbuttons'
        id='yellowButton'
        onClick={() => setSelectedColor('yellow')}>
        Yellow
      </button>
      <button
        className='colorbuttons'
        id='purpleButton'
        onClick={() => setSelectedColor('purple')}>
        Purple
      </button>
      <button
        className='colorbuttons'
        id='greenButton'
        onClick={() => setSelectedColor('green')}>
        Green
      </button>
      <button
        className='colorbuttons'
        id='orangeButton'
        onClick={() => setSelectedColor('orange')}>
        Orange
      </button>
    </section>
  );
}

export default ColorSelector;
