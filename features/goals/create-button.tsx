import React, {FC} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import Gradient from '../general/gradient';

const CreateButton: FC = () => {
  const dispatch = useDispatch();

  return (
    <Pressable style={styles.button}>
      <Gradient style={styles.gradient} />
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
});

export default CreateButton;
