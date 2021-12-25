import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import SText from '../../general/text';

const FieldTitle: FC = ({children}) => (
  <SText style={styles.text}>{children}</SText>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: colors.text,
    fontFamily: 'Poppins-Medium',
    marginBottom: 9,
  },
});

export default FieldTitle;
