import React, {FC} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import Goal from './goal';

const GoalsList: FC = () => {
  const goals = useSelector((state: RootState) => state.goals.titles);

  return (
    <ScrollView style={styles.list}>
      {goals.map(goal => (
        <Goal {...goal} key={goal.title} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 15,
  },
});

export default GoalsList;
