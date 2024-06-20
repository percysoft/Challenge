import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Button } from 'react-native';
import DatePicker from 'react-native-date-picker';
import {MyDatePickerProps} from '../../../Types/atoms/DatePicker';
import { formatDate } from '../../../utils';

const MyDatePicker: React.FC<MyDatePickerProps> = ({
  date,
  setDate,
  label,
  onChange,
  error,
  errorMessage
}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (selectedDate: Date) => {
    setDate(selectedDate);
    onChange(selectedDate);
  };

  const toggleDatePicker = () => {
    setShowDatePicker(prev => !prev);
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity style={styles.datePicker} onPress={toggleDatePicker} testID='datePicker'>
        <Text>{formatDate(date)}</Text>
      </TouchableOpacity>
      {error && errorMessage && (
        <Text style={styles.errorText}>{errorMessage}</Text>
      )}
      <Modal
        transparent={true}
        animationType="slide"
        visible={showDatePicker}
        onRequestClose={toggleDatePicker}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <DatePicker
              date={date}
              mode="date"
              onDateChange={handleDateChange}
              locale="en"
            />
            <Button
              title="Confirmar"
              onPress={toggleDatePicker}
              key="confirm"
              testID="confirmButton"
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  datePicker: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  errorText: {
    marginTop: 5,
    color: 'red',
  },
});

export default MyDatePicker;
