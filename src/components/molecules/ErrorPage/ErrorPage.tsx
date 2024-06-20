import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../../atoms/Button/buttont';

interface ErrorComponentProps {
  message: string;
  onRetry: () => void;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({message, onRetry}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>{message}</Text>
      <Button
        background="#cccdce"
        text="Retry"
        onClick={onRetry}
        key="retry"
        colorText="#5d6f9b"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default ErrorComponent;
