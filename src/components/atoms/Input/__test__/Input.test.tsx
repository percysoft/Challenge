import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Input from '../Input';

describe('Input component', () => {
  const testLabel = 'Username';
  const testPlaceholder = 'Enter your username';
  const testValue = 'testuser';
  const testErrorMessage = 'Username is required';

  it('renders correctly', () => {
    const mockOnChange = jest.fn();

    const {getByText, getByPlaceholderText} = render(
      <Input
        label={testLabel}
        placeholder={testPlaceholder}
        value={testValue}
        onChange={mockOnChange}
      />,
    );
    expect(getByText(testLabel)).toBeDefined();
    expect(getByPlaceholderText(testPlaceholder)).toBeDefined();
  });

  it('displays error message when error is true', () => {
    const mockOnChange = jest.fn();

    const { getByText } = render(
      <Input
        label={testLabel}
        placeholder={testPlaceholder}
        value={testValue}
        error={true}
        errorMessage={testErrorMessage}
        onChange={mockOnChange}
      />
    );
    expect(getByText(testErrorMessage)).toBeDefined();
  });

  it('calls onChange handler correctly', () => {
    const mockOnChange = jest.fn();
    const { getByPlaceholderText } = render(
      <Input
        label={testLabel}
        placeholder={testPlaceholder}
        value={testValue}
        onChange={mockOnChange}
      />
    );
    fireEvent.changeText(getByPlaceholderText(testPlaceholder), 'newvalue');
    expect(mockOnChange).toHaveBeenCalledWith('newvalue');
  });
});
