import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import categories, {CategoryNames} from '../../constants/categories';
import colors from '../../constants/colors';
import Subtitle from '../general/subtitle';
import Category from './category';

interface Props {
  category: CategoryNames;
  title: string;
}

const Goal: FC<Props> = ({category, title}) => (
  <View style={styles.goal}>
    <Category {...categories[category]} />
    <Subtitle style={styles.title}>{title}</Subtitle>
  </View>
);

const styles = StyleSheet.create({
  goal: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    backgroundColor: colors.secondary,
    borderRadius: 17,
    borderColor: colors.border,
    borderWidth: 1,
    marginBottom: 15,
  },
  title: {
    marginLeft: 21,
  },
});

export default Goal;
