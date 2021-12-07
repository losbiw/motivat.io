import React, {FC} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import Goal from './goal';

const GoalsList: FC = () => {
  const goals = useSelector((state: RootState) => state.goals.displayItems);

  return (
    <View style={styles.container}>
      <FlatList
        data={goals}
        renderItem={({item: goal}) => <Goal {...goal} />}
        keyExtractor={(goal, index) => `${goal.title}${index}`}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
    marginTop: 15,
  },
});

export default GoalsList;
