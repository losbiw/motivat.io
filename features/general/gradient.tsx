import React, {FC} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../constants/colors';

const Gradient: FC = ({children}) => (
  <LinearGradient colors={[colors.accent1, colors.accent2]}>
    {children}
  </LinearGradient>
);

export default Gradient;
