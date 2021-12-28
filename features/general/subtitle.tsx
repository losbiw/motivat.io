import React, {FC} from 'react';
import {StyleSheet, TextProps} from 'react-native';
import colors from '@constants/colors';
import SText from './text';

interface Props extends TextProps {
  children: string;
}

const Subtitle: FC<Props> = ({children, style}: Props) => (
  <SText style={[styles.subtitle, style]}>{children}</SText>
);

const styles = StyleSheet.create({
  subtitle: {
    color: colors.text,
    fontSize: 18,
  },
});

export default Subtitle;
