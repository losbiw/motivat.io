import React, {FC} from 'react';
import {ViewProps} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../constants/colors';
import {hextToRGBString} from '../../helpers/hexToRGB';

const Gradient: FC<ViewProps> = props => (
  <LinearGradient
    {...props}
    start={{x: 0, y: 0}}
    end={{x: 1, y: 1}}
    angleCenter={{x: 0.5, y: 0.5}}
    colors={[hextToRGBString(colors.accent1), hextToRGBString(colors.accent2)]}>
    {props.children}
  </LinearGradient>
);

export default Gradient;
