import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { render, screen, fireEvent, getByText, waitFor, toHaveValue, toHaveBeenCalledWith, toHaveBeenCalledTimes, toHaveBeenCalled } from '@testing-library/react';
import '@testing-library/jest-dom';
import { userEvent, user } from '@testing-library/user-event';

import LoginForm from '../src/components/LoginForm';
import ColorTools from '../src/components/ColorTools';
import ShapeTools from '../src/components/ShapeTools';


describe('Unit testing React components', () => {

  describe('LoginForm', () => {
    const props = {
      username: 'Robert',
      password: 'stabrabbit',
    };
    const setUsername = jest.fn();
    const setPassword = jest.fn();
    const onSubmit = jest.fn();

    beforeEach(() => {
      render(
        <Router>
          <Routes>
            <Route path="/" element={<LoginForm {...props} onSubmit={onSubmit} setUsername={setUsername}/>} />
          </Routes>
        </Router>
        )
    });

    test('Contains a Login In button', async () => {
      const buttons = await screen.findAllByRole('button');
      // console.log('this should be the amount of buttons: ', buttons.length)
      // console.log('login button: ', buttons)
      expect(buttons.length).toBe(1);
      expect(buttons[0]).toHaveTextContent('Log In');
    })

    // test('Username and password input fields render when text is typed in', async () => {
    //   const userNameInput = screen.getByPlaceholderText('Write Username');
    //   await userEvent.type(userNameInput, 'username');
    //   await waitFor(() => {
    //     // expect(userNameInput).toHaveValue('username'); 
    //     expect(setUsername).toHaveBeenCalledWith('username');
    //   })
    //   // console.log('should be username input field: ', userNameInput);

    // })
    afterEach(() => {
      // restore the spy created with spyOn
      jest.restoreAllMocks();
    });

    // test('Login button triggers submit when input fields have text', async () => {
    //   const loginButton = screen.getByText('Log In');
    //   const userNameInput = screen.getByPlaceholderText('Write Username');
    //   const passwordInput = screen.getByPlaceholderText('Write Password');
    //   userEvent.type(userNameInput, 'username');
    //   userEvent.type(passwordInput, 'password');
    //   userEvent.click(loginButton);
    //   const spy = jest.spyOn(LoginForm, 'handleSubmit');
    //   expect(spy).toHaveBeenCalled();
      
    //   // await waitFor(() => {
    //   //   expect(onSubmit).toHaveBeenCalledTimes(1);
    //   // })
    // })
    // test('Login button does not trigger when clicked without username and password input', async () => {
    //   const props = {
    //     username: 'Robert',
    //     password: 'stabrabbit',
    //     onSubmit: jest.fn()
    //   }
    //   // test is currently passing because props username and password do not seem to be rendering as input field values

    //   const button = screen.getByText('Log In');
    //   const usernameInput = screen.getAllByRole('textbox')[0];
    //   // const passwordInput = screen.getAllByRole('textbox');
    //   console.log('username input: ', usernameInput);
    //   // console.log('password input: ', passwordInput);
    //   userEvent.type(usernameInput, props.username);
    //   expect(usernameInput).toHaveValue(props.username);
    //   // console.log('this is our login button', button)
    //   // await waitFor(() => userEvent.click(button));
    //   // expect(props.onSubmit).toHaveBeenCalledTimes(0);
    })

  })

  
    
    describe('ColorTools', () => {

      test('Renders the specified color when clicked', async () => {
        const setSelectedColor = jest.fn();
        render(<ColorTools setSelectedColor={setSelectedColor}/>) // render is not from react!!
        const redButton = screen.getByText('Red');
        // console.log('this should be the redButton: ', screen.getByText('Red'))
        userEvent.click(redButton);
        await waitFor(() => {
          expect(setSelectedColor).toHaveBeenCalledWith('red'); // this will pass the func has red passed in, will fail if blue/green/anything else is passed in
        })
      })

    describe('ShapeTools', () => {

      test('Renders the specified shape when clicked', async () => {
        const setSelectedShape = jest.fn();
        render(<ShapeTools setSelectedShape={setSelectedShape}/>)
        const circleButton = screen.getByText('Circle');
        userEvent.click(circleButton);
        await waitFor(() => {
          expect(setSelectedShape).toHaveBeenCalledWith('circle');
        })
      })
    })
      
  // })

})