import React from 'react';
import { render } from '@testing-library/react-native';
import NextIcon from '../next';

describe('Next Icon', () => {
  it('renders correctly with default props', () => {
    const {getByTestId} = render(<NextIcon />);

    const svgElement = getByTestId('next-icon-svg');
    expect(svgElement).toBeTruthy();

  });
});
