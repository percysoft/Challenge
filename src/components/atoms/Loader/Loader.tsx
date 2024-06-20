
import React from 'react';
import { View, ActivityIndicator, StyleSheet, Modal } from 'react-native';

const Loader: React.FC = () => {
  return (
    <Modal
      transparent={true}
      animationType="none"
      visible={true}
      testID="modal">
      <View style={styles.modalBackground}>
        <View style={styles.loaderContainer}>
          <ActivityIndicator
            size="large"
            color="#0000ff"
            accessibilityLabel="Loading"
            testID="activityIndicator"
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  loaderContainer: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});

export default Loader;
