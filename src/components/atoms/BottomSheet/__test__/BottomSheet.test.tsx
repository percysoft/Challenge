
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import BottomSheet from '../BottomSheet';
import { Text } from 'react-native';

describe('BottomSheet Component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <BottomSheet open={true} setOpen={jest.fn()}>
        <Text>Test Content</Text>
      </BottomSheet>
    );
    const overlay = getByTestId('overlay');
    const bottomSheet = getByTestId('bottom-sheet');
    expect(overlay).toBeDefined();
    expect(bottomSheet).toBeDefined();
  });

  it('calls setOpen when overlay is pressed', () => {
    const setOpenMock = jest.fn();
    const {getByTestId} = render(
      <BottomSheet open={true} setOpen={setOpenMock}>
        <Text>Test Content</Text>
      </BottomSheet>,
    );
    const overlay = getByTestId('overlay');
    fireEvent.press(overlay);

    expect(setOpenMock).toHaveBeenCalledWith(false);
  });
});
