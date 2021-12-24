import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { useSelector } from 'react-redux';
import {Goal} from '../../types/goal';
import {State} from './settings-slice';

type Props = Pick<State, 'id'>;

const Settings: FC<Props> = props => {
  // const itemId = useSelector();

  return (
    <View style={styles.container}>
      <Text>Settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    paddingHorizontal: 33,
    paddingTop: 46,
    paddingBottom: 22,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'white',
    zIndex: 1,
  },
});

export default Settings;
