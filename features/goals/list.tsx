import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import Goal from './goal';

const GoalsList: FC = () => {
  const goals = useSelector((state: RootState) => state.goals.titles);

  return (
    <View style={styles.list}>
      {goals.map(goal => (
        <Goal title={goal} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 22,
  },
});

export default GoalsList;
