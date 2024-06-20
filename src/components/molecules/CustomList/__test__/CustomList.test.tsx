import React from 'react';
import {render} from '@testing-library/react-native';
import CustomList from '../ CustomList';
import { Text } from 'react-native';

describe('CustomList', () => {
  const mockData = [
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
  ];

  it('renders items correctly', () => {
    const { getAllByTestId, getByText } = render(
      <CustomList data={mockData} />
    );

    mockData.forEach(item => {
      const itemTextId = getByText(`ID: ${item.id}`);
      const itemName = getByText(`Name: ${item.name}`);
      expect(itemTextId).toBeDefined();
      expect(itemName).toBeDefined();
    });

    const renderedItems = getAllByTestId('custom-list-item');
    expect(renderedItems.length).toBe(mockData.length);
  });

  it('renders custom renderItem function correctly', () => {
    const mockRenderItem = ({item}) => (
      <Text testID="custom-rendered-item">{item.name}</Text>
    );

    const { getByText } = render(
      <CustomList data={mockData} renderItem={mockRenderItem} />
    );

    mockData.forEach(item => {
      const itemName = getByText(item.name);
      expect(itemName).toBeDefined();
    });
  });
});
