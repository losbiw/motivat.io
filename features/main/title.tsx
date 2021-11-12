import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../constants/colors';
import SText from '../general/text';

const Title = () => (
  <View style={styles.container}>
    <SText style={[styles.small, styles.medium]}>Don’t forget about</SText>
    <SText style={[styles.big, styles.medium]}>
      your daily&nbsp;
      <Text style={styles.highlited}>goals</Text>
    </SText>
  </View>
);

const styles = StyleSheet.create({
  medium: {
    fontFamily: 'Poppins-Medium',
  },
  container: {
    marginBottom: 29,
  },
  small: {
    fontSize: 22,
  },
  big: {
    fontSize: 25,
  },
  highlited: {
    color: colors.titleAccent,
  },
});

export default Title;
