import React, {FC} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../constants/colors';
import {hextToRGBString} from '../../helpers/hexToRGB';

const Gradient: FC = ({children}) => (
  <LinearGradient
    start={{x: 0, y: 0}}
    end={{x: 1, y: 1}}
    angleCenter={{x: 0.5, y: 0.5}}
    colors={[hextToRGBString(colors.accent1), hextToRGBString(colors.accent2)]}>
    {children}
  </LinearGradient>
);

export default Gradient;
