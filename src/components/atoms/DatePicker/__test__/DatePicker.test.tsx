// MyDatePicker.test.tsx

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import MyDatePicker from '../DatePicker';

describe('MyDatePicker component', () => {
  test('renders correctly with default props', () => {
    const setDate = jest.fn();
    const onChange = jest.fn();

    const {getByText} = render(
      <MyDatePicker
        date={new Date()}
        setDate={setDate}
        label="Fecha"
        onChange={onChange}
        error={false}
        errorMessage=""
      />,
    );

    const datePickerLabel = getByText('Fecha');
    expect(datePickerLabel).toBeDefined();

  });

});
