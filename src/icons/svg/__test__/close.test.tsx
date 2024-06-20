import React from 'react';
import { render } from '@testing-library/react-native';
import Close from '../close';

describe('Close Icon', () => {
  it('renders correctly with default props', () => {
    const {getByTestId} = render(<Close />);

    const svgElement = getByTestId('close-icon-svg');
    expect(svgElement).toBeTruthy();

  });
});
