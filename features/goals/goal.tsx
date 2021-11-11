import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../../constants/colors';
import SText from '../general/text';

interface Props {
  category?: any; // TODO: change to category type later on
  title: string;
}

const Goal: FC<Props> = ({category, title}) => (
  <View style={styles.goal}>
    <SText style={styles.title} key={title}>
      {title}
    </SText>
  </View>
);

const styles = StyleSheet.create({
  goal: {
    padding: 8,
    backgroundColor: colors.secondary,
    borderRadius: 17,
    borderColor: colors.border,
    borderWidth: 1,
    marginBottom: 15,
  },
  title: {
    color: colors.text,
    fontSize: 18,
  },
});

export default Goal;
