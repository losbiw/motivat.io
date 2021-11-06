import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import colors from './constants/colors';
import Introduction from './features/introduction/introduction';
import Main from './features/main/main';

const App = () => {
  const [isIntroShown, setIsIntroShown] = useState(true); // TODO: remove the hardcoded value

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

export default App;
