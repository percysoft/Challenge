import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { IconProps } from '../../Types/atoms/icon';

const NextIcon: React.FC<IconProps> = ({ size = 24, color = 'black' }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      testID="next-icon-svg">
      <G
        transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
        style={{
          stroke: 'none',
          strokeWidth: 0,
          strokeDasharray: 'none',
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          strokeMiterlimit: 10,
          fill: 'none',
          fillRule: 'nonzero',
          opacity: 1,
        }}>
        <Path
          d="M 24.25 90 c -0.896 0 -1.792 -0.342 -2.475 -1.025 c -1.367 -1.366 -1.367 -3.583 0 -4.949 L 60.8 45 L 21.775 5.975 c -1.367 -1.367 -1.367 -3.583 0 -4.95 c 1.367 -1.366 3.583 -1.366 4.95 0 l 41.5 41.5 c 1.367 1.366 1.367 3.583 0 4.949 l -41.5 41.5 C 26.042 89.658 25.146 90 24.25 90 z"
          style={{
            stroke: 'none',
            strokeWidth: 1,
            strokeDasharray: 'none',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeMiterlimit: 10,
            fill: color,
            fillRule: 'nonzero',
            opacity: 1,
          }}
        />
      </G>
    </Svg>
  );
};

export default NextIcon;
