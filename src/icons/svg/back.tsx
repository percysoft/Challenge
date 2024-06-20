import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '../../Types/atoms/icon';

const BackIcon: React.FC<IconProps> = ({size = 24, color = '#000000'}) => {
  return (
    <Svg
      testID="back-icon-svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M19 12H5M12 19l-7-7 7-7" />
    </Svg>
  );
};

export default BackIcon;
