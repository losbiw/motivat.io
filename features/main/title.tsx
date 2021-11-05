import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../constants/colors';
import StyledText from '../general/text';

const Title = () => (
  <View>
    <StyledText>Don’t forget about</StyledText>
    <StyledText>
      your daily &nbsp;
      <Text
        style={{
          ...styles.main,
          ...styles.highlited,
        }}>
        goals
      </Text>
    </StyledText>
  </View>
);

const styles = StyleSheet.create({
  main: {
    color: colors.text,
  },
  highlited: {
    color: colors.titleAccent,
  },
});

export default Title;
