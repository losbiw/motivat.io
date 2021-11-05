import React from 'react';
import {StyleSheet, View} from 'react-native';
import Main from './features/main/main';

const App = () => (
  <View style={styles.global}>
    <Main />
  </View>
);

const styles = StyleSheet.create({
  global: {
    flex: 1,
    backgroundColor: '#FDFDFD',
  },
});

export default App;
