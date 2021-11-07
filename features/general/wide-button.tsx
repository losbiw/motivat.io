import React, {FC} from 'react';
import {Pressable, PressableProps, StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import Gradient from './gradient';
import SText from './text';

interface Props extends PressableProps {
  title: string;
}

const WideButton: FC<Props> = props => (
  <Pressable style={styles.button} {...props}>
    <Gradient style={styles.gradient}>
      <SText style={styles.title}>{props.title}</SText>
    </Gradient>
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
    width: '100%',
  },
  gradient: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 19,
  },
  title: {
    color: colors.background,
    fontSize: 18,
  },
});

export default WideButton;
