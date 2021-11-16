import React, {FC} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Category as Props} from '../../constants/categories';
import Gradient from '../general/gradient';

const Category: FC<Props> = ({gradient}) => (
  <Gradient style={styles.category} colors={gradient}>
    <Text />
  </Gradient>
);

const styles = StyleSheet.create({
  category: {
    width: 40,
    height: 40,
    borderRadius: 11,
  },
});

export default Category;
