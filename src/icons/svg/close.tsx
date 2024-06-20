import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '../../Types/atoms/icon';

const Close: React.FC<IconProps> = ({color = '#000000', size = 20}) => {
  return (
    <View style={{width: size, height: size}} testID="close-icon-svg">
      <Svg width={size} height={size} viewBox="0 0 122.878 122.88" fill={color}>
        <Path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z" />
      </Svg>
    </View>
  );
};

export default Close;
