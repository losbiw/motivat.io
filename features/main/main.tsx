import React from 'react';
import {StyleSheet, View} from 'react-native';
import GoalsList from '../goals/list';
import SearchBar from '../goals/search/searchbar';
import Title from './title';

const Main = () => (
  <View style={styles.main}>
    <Title />
    <SearchBar />
    <GoalsList />
  </View>
);

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 33,
    paddingTop: 46,
    paddingBottom: 22,
  },
});

export default Main;
