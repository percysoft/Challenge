import React from 'react';
import { render } from '@testing-library/react-native';
import BackIcon from '../back';

describe('BackIcon', () => {
  it('renders correctly with default props', () => {
    const {getByTestId} = render(<BackIcon />);

    const svgElement = getByTestId('back-icon-svg');
    expect(svgElement).toBeTruthy();

  });
});
