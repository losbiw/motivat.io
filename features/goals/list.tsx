import React, {FC} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import Goal from './goal';

const GoalsList: FC = () => {
  const goals = useSelector((state: RootState) => state.goals.displayItems);

  return (
    <FlatList
      data={goals}
      style={styles.list}
      renderItem={({item: goal}) => <Goal {...goal} />}
      keyExtractor={(goal, index) => `${goal.title}${index}`}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 15,
  },
});

export default GoalsList;
