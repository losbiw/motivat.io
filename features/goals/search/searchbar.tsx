import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../../../constants/colors';
import SText from '../../general/text';

const SearchBar: FC = () => {
  return (
    <View style={styles.background}>
      <SText style={styles.placeholder}>Search goals</SText>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    paddingVertical: 15,
    paddingHorizontal: 17,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 17,
  },
  placeholder: {
    fontSize: 16,
    color: colors.placeholder,
  },
});

export default SearchBar;
