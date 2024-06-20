import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ErrorComponent from '../ErrorPage';

describe('ErrorComponent', () => {
  const mockMessage = 'An error occurred.';
  const mockOnRetry = jest.fn();

  it('renders error message and retry button', () => {
    const { getByText } = render(
      <ErrorComponent message={mockMessage} onRetry={mockOnRetry} />
    );

    const errorMessage = getByText(mockMessage);
    expect(errorMessage).toBeDefined();

    const retryButton = getByText('Retry');
    expect(retryButton).toBeDefined();
  });

  it('calls onRetry function when retry button is pressed', () => {
    const { getByText } = render(
      <ErrorComponent message={mockMessage} onRetry={mockOnRetry} />
    );

    const retryButton = getByText('Retry');
    fireEvent.press(retryButton);

    expect(mockOnRetry).toHaveBeenCalledTimes(1);
  });
});
