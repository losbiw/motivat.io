import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Provider, useDispatch, useSelector} from 'react-redux';
import colors from './constants/colors';
import StorageKeys from './constants/storageKeys';
import {showIntroduction} from './features/introduction/intro-slice';
import Introduction from './features/introduction/introduction';
import Main from './features/main/main';
import storage from './helpers/storage';
import {RootState, store} from './store';

const ReduxWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const App = () => {
  const isIntroShown = useSelector((state: RootState) => state.intro.isShown);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchStorageData = async () => {
      const isIntroHidden = await storage.readData(StorageKeys.IS_INTRO_HIDDEN);

      if (!isIntroHidden) {
        dispatch(showIntroduction());
      }
    };

    fetchStorageData();
  }, [dispatch]);

  if (isIntroShown === undefined) {
    return <View style={styles.global} />;
  }

  return (
    <View style={styles.global}>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
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
