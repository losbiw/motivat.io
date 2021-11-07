import React, {FC} from 'react';
import MaskedView from '@react-native-community/masked-view';
import SText from './text';
import {StyleSheet, TextProps} from 'react-native';
import Gradient from './gradient';

const GradientText: FC<TextProps> = props => (
  <MaskedView maskElement={<SText {...props} />}>
    <Gradient>
      <SText {...props} style={[styles.invisible, props.style]} />
    </Gradient>
  </MaskedView>
);

const styles = StyleSheet.create({
  invisible: {
    opacity: 0,
  },
});

export default GradientText;
