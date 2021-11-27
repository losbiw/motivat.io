import React from 'react';
import {StyleSheet, View} from 'react-native';
import Subtitle from '../general/subtitle';
import CreateButton from '../goals/create-button';
import GoalsList from '../goals/list';
import Search from '../goals/search/search';
import Title from './title';

const Main = () => (
  <View style={styles.main}>
    <Title />
    <Search />
    <Subtitle style={styles.subtitle}>Goals</Subtitle>
    <GoalsList />
    <CreateButton />
  </View>
);

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 33,
    paddingTop: 46,
    paddingBottom: 22,
    flex: 1,
  },
  subtitle: {
    marginTop: 22,
  },
});

export default Main;
