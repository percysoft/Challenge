import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { ButtonProps } from '../../../Types/atoms/Button';

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  background,
  colorText,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: background}]}
      onPress={onClick}
      testID="button">
      <Text style={[styles.buttonText, {color: colorText}]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 60,
  },
  buttonText: {
    fontSize: 16,
  },
});

export default Button;
