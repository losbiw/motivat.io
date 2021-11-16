import React from 'react';
import {StyleSheet, View} from 'react-native';
import CreateButton from '../goals/create-button';
import GoalsList from '../goals/list';
import SearchBar from '../goals/search/search-bar';
import Title from './title';

const Main = () => (
  <View style={styles.main}>
    <Title />
    <SearchBar />
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
});

export default Main;
