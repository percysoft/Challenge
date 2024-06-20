import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Button from '../buttont';

describe('Button component', () => {
  test('renders correctly', () => {
    const {getByTestId, getByText} = render(
      <Button
        text="Enviar"
        onClick={() => console.log('Botón presionado')}
        background="#fedd03"
        colorText="#5d6f9b"
      />,
    );

    const button = getByTestId('button');
    expect(button).toBeDefined();
    const buttonText = getByText('Enviar');
    expect(buttonText).toBeDefined();

    fireEvent.press(button);
  });
});
