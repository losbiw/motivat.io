import React, {FC, useEffect, useState} from 'react';
import {View} from 'react-native';
import SText from '../../general/text';

const GoalsList: FC = () => {
  const [goals, setGoals] = useState<string[]>([]);

  useEffect(() => {
    setGoals(['cock', 'booba']);
  }, []);

  return (
    <View>
      {goals.map(goal => (
        <SText>{goal}</SText>
      ))}
    </View>
  );
};

export default GoalsList;
