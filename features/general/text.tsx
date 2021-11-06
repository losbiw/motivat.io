import React, {FC} from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import colors from '../../constants/colors';

const SText: FC<TextProps> = props => (
  <Text {...props} style={Object.assign({}, props.style, styles.text)}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  text: {
    color: colors.text,
    fontFamily: 'Poppins-Regular',
  },
});

export default SText;
