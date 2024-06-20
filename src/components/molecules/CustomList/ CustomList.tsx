import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
  TouchableOpacity,
} from 'react-native';
import NextIcon from '../../../icons/svg/next';
import {CustomListProps, Item} from '../../../Types/molecules/CustomList';

const CustomList: React.FC<CustomListProps> = ({
  data,
  renderItem,
  onItemPress,
  testID
}) => {
  const defaultRenderItem = ({item}: ListRenderItemInfo<Item>) => (
    <View style={styles.itemContainer} testID="custom-list-item">
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemText} testID={`item-id-${item.id}`}>
          ID: {item.id}
        </Text>
        <Text style={styles.itemText} testID={`item-name-${item.id}`}>
          Name: {item.name}
        </Text>
      </View>
      <TouchableOpacity onPress={() => onItemPress && onItemPress(item)}>
        <NextIcon color="#ccc" size={20} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.listContainer} testID={testID}>
      <FlatList
        data={data}
        renderItem={renderItem || defaultRenderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
  },
  itemContainer: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  itemTextContainer: {
    flexDirection: 'column',
  },
  itemText: {
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
  },
});

export default CustomList;
