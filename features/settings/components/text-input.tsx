import React, {FC} from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import colors from '../../../constants/colors';

type Props = Required<Pick<TextInputProps, 'placeholder' | 'onChangeText'>> &
  TextInputProps;

const TextInputBox: FC<Props> = ({defaultValue, placeholder, onChangeText}) => (
  <TextInput
    style={styles.input}
    placeholderTextColor={colors.placeholder}
    placeholder={placeholder}
    defaultValue={defaultValue}
    onChangeText={onChangeText}
  />
);

const styles = StyleSheet.create({
  input: {
    alignItems: 'center',
    padding: 8,
    backgroundColor: colors.secondary,
    borderRadius: 17,
    borderColor: colors.border,
    borderWidth: 1,
    marginBottom: 15,
  },
});

export default TextInputBox;
