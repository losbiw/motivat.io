import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../../../constants/colors';
import Icon from '../../general/icon';

const Filter: FC = () => (
  <View style={styles.container}>
    <Icon
      source={require('../../../assets/icons/search/filter.png')}
      color={colors.text}
      style={styles.icon}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 15,
    marginLeft: 6,
  },
  icon: {
    width: 26,
    height: 26,
  },
});

export default Filter;
