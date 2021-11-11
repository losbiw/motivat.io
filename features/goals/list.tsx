import React, {FC, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Goal from './goal';

const GoalsList: FC = () => {
  const [goals, setGoals] = useState<string[]>([]);

  useEffect(() => {
    setGoals(['cock', 'booba']);
  }, []);

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
