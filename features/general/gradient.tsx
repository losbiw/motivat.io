import React, {FC} from 'react';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';
import colorPalette from '@constants/colors';
import {hextToRGBString} from '@helpers/hexToRGB';

type Props = Partial<LinearGradientProps>;

const Gradient: FC<Props> = props => {
  const gradientColors = props.colors
    ? props.colors
    : [colorPalette.accent1, colorPalette.accent2];

  const convertedColors = gradientColors.map(color =>
    typeof color === 'string' ? hextToRGBString(color) : color,
  );

  return (
    <LinearGradient
      {...props}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      angleCenter={{x: 0.5, y: 0.5}}
      colors={convertedColors}>
      {props.children}
    </LinearGradient>
  );
};

export default Gradient;
