import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider, useSelector} from 'react-redux';
import colors from './constants/colors';
import Introduction from './features/introduction/introduction';
import Main from './features/main/main';
import {RootState, store} from './store';

const ReduxWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const App = () => {
  const isIntroShown = useSelector((state: RootState) => state.intro.isShown);

  return (
    <View style={styles.global}>
      {isIntroShown ? <Introduction /> : <Main />}
    </View>
  );
};

const styles = StyleSheet.create({
  global: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default ReduxWrapper;
