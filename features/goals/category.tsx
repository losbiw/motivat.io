import React, {FC} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Category as Props} from '@constants/categories';
import colors from '@constants/colors';
import Gradient from '../general/gradient';
import Icon from '../general/icon';

const Category: FC<Props> = ({gradient, icon}) => (
  <Gradient style={styles.category} colors={gradient}>
    {icon ? (
      <Icon source={icon} style={styles.image} color={colors.background} />
    ) : (
      <Text />
    )}
  </Gradient>
);

const styles = StyleSheet.create({
  category: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 11,
  },
  image: {
    width: '55%',
    height: '55%',
  },
});

export default Category;
