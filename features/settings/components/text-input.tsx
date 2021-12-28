import React, {FC} from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import colors from '@constants/colors';

type Props = Required<Pick<TextInputProps, 'placeholder' | 'onChangeText'>> &
  TextInputProps;

const TextInputBox: FC<Props> = ({defaultValue, placeholder, onChangeText}) => (
  <TextInput
    style={styles.input}
    placeholderTextColor={colors.placeholder}
    placeholder={placeholder}
    defaultValue={defaultValue}
    onChangeText={onChangeText}
    multiline={true}
  />
);

const styles = StyleSheet.create({
  input: {
    alignItems: 'center',
    backgroundColor: colors.secondary,
    paddingVertical: 14,
    paddingHorizontal: 28,
    marginBottom: 32,
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
  },
});

export default TextInputBox;
