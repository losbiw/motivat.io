import React, {FC} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import colors from '@constants/colors';
import Gradient from '../general/gradient';
import Icon from '../general/icon';
import {openSettings} from '../settings/settings-slice';

const CreateButton: FC = () => {
  const dispatch = useDispatch();

  return (
    <Pressable style={styles.button} onPress={() => dispatch(openSettings())}>
      <Gradient style={styles.gradient}>
        <Icon
          style={styles.icon}
          color={colors.background}
          source={require('@assets/icons/general/plus.png')}
        />
      </Gradient>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 54,
    height: 54,
    position: 'absolute',
    bottom: 22,
    right: 33,
  },
  gradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 13,
    borderRadius: 17,
  },
  icon: {
    width: 28,
    height: 28,
  },
});

export default CreateButton;
