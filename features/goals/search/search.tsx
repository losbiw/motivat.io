import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import Filter from './filter';
import SearchBar from './search-bar';

const Search: FC = () => (
  <View style={styles.container}>
    <SearchBar />
    <Filter />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Search;
