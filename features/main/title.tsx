import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../constants/colors';
import SText from '../general/text';

const Title = () => (
  <View style={styles.container}>
    <SText style={styles.small}>Don’t forget about</SText>
    <SText style={styles.big}>
      your daily&nbsp;
      <Text style={styles.highlited}>goals</Text>
    </SText>
  </View>
);

const styles = StyleSheet.create({
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
