import React from 'react';
import { render } from '@testing-library/react-native';
import Loader from '../Loader';


describe('Loader component', () => {
  it('renders correctly', () => {
    const {getByTestId, getByLabelText} = render(<Loader />);

    const modal = getByTestId('modal');
    expect(modal).toBeDefined();

    const activityIndicator = getByLabelText('Loading');
    expect(activityIndicator).toBeDefined();
  });
});
