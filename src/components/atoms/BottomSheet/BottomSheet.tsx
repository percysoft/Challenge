import React from 'react';
import {View, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import {BottomSheetProps} from '../../../Types/atoms/BottomSheet';

const BottomSheet: React.FC<BottomSheetProps> = ({children, open, setOpen}) => {
  const closeSheet = () => {
    setOpen(false);
  };

  return (
    <Modal visible={open} transparent animationType="none">
      <View style={styles.modalOverlay}>
        <TouchableOpacity
          style={styles.overlay}
          onPress={closeSheet}
          testID="overlay"
        />
        <View style={styles.bottomSheet} testID="bottom-sheet">
          <View style={styles.contentContainer}>{children}</View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  bottomSheet: {
    height: '50%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    overflow: 'hidden',
  },
  contentContainer: {
    flex: 1,
  },
});

export default BottomSheet;
