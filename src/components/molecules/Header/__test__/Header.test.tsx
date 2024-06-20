import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Header from '../Header';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    goBack: jest.fn(),
  }),
  useRoute: () => ({
    name: 'ExampleScreen', 
  }),
}));

describe('Header Component', () => {
  it('renders correctly with title', () => {
    const {getByText} = render(<Header title="Banco" />);
    const titleElement = getByText('Banco');
    expect(titleElement).toBeTruthy();
  });

  it('renders back button in appropriate routes', () => {
    const {getByTestId} = render(<Header title="Banco" />);
    const backButton = getByTestId('backButton');
    expect(backButton).toBeTruthy();
  });

  it('calls goBack when back button is pressed', () => {
    const { getByTestId } = render(<Header title="Banco" />);
    const backButton = getByTestId('backButton');
    fireEvent.press(backButton);

  });
});
