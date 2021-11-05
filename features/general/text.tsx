import React, {FC} from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';

const StyledText: FC<TextProps> = props => (
  <Text style={styles.text} {...props}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins-Regular',
  },
});

export default StyledText;
