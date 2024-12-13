import React from 'react';
import { render } from '@testing-library/react';
// import GameBoard from '../src/components/GameBoard';
import GameBoard, { backgroundMusic } from '../src/components/GameBoard';
import { Howl } from 'howler';
import { initializedSounds } from '../src/sounds';

// mocking howler library to avoid 'warns'
// tests will pass without this, but warns show up
jest.mock('howler', () => {
  return {
    Howl: jest.fn(() => ({
      play: jest.fn(),
    })),
  };
});

describe('Gameboard tests', () => {
  it('should render GameBoard without crashing', () => {
    render(<GameBoard />);
  });

  it('should render shape and play sound when shape is selected', () => {
    const selectedShape = 'square';
    const selectedColor = 'green';

    // render is from jest library
    // returns obj that has helper functions like getByText
    // Renders GameBoard and returns back getByText to let us use it directly
    const { getByText } = render(
      <GameBoard selectedShape={selectedShape} selectedColor={selectedColor} />,
    );

    // getByText returns: <div id="square1" style="background-color: green;">square</div>
    // so cant expected.toBe('square').
    // this specifically checks if selectedShape element is rendered in the DOM
    expect(getByText(selectedShape)).toBeInTheDocument();

    // test if the correct sound is being played
    const soundObj = initializedSounds.find(
      sound => sound.name === selectedShape,
    );

    expect(Howl).toHaveBeenCalledWith({ src: [soundObj.src] });
  });

  it('it should play background music when GameBoard is rendered', () => {
    render(<GameBoard />);
    // console.log('helper functions returned from render: ', renderHelpers);
    console.log('logging backgroundMusic to terminal: ', backgroundMusic)
    expect(Howl).toHaveBeenCalledWith({ src: backgroundMusic.src });
  })

});
