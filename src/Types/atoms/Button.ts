import {GestureResponderEvent} from 'react-native';

export interface ButtonProps {
  text: string;
  onClick: (event: GestureResponderEvent) => void;
  background: string;
  colorText: string;
}
