import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { InputProps } from '../../../Types/atoms/Input';

const Input: React.FC<InputProps> = ({
  label,
  error = false,
  errorMessage,
  keyboardType,
  placeholder,
  onChange,
  value
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, error && styles.inputError]}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onChangeText={e => onChange(e)}
        value={value}
      />
      {error && errorMessage && (
        <Text style={styles.errorText}>{errorMessage}</Text>
      )}
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
    color: '#000000',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    marginTop: 5,
    color: 'red',
  },
});

export default Input;
