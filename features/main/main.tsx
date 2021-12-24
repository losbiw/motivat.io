import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import Subtitle from '../general/subtitle';
import CreateButton from '../goals/create-button';
import GoalsList from '../goals/list';
import Search from '../goals/search/search';
import Settings from '../settings/settings';
import Title from './title';

const Main = () => {
  const isSettingsOpen = useSelector(
    (state: RootState) => state.settings.isOpen,
  );

  return (
    <View style={styles.main}>
      {isSettingsOpen && <Settings />}

      <Title />
      <Search />
      <Subtitle style={styles.subtitle}>Goals</Subtitle>
      <GoalsList />
      <CreateButton />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 33,
    paddingTop: 46,
    flex: 1,
  },
  subtitle: {
    marginTop: 22,
  },
});

export default Main;
