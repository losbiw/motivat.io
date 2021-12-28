import React, {FC} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import colors from '@constants/colors';
import Icon from '../../general/icon';
import {filterGoals, resetFilter} from '../goals-slice';

const SearchBar: FC = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.background}>
      <Icon
        style={styles.image}
        color={colors.placeholder}
        source={require('@assets/icons/search/search.png')}
      />
      <TextInput
        placeholder="Search goals"
        placeholderTextColor={colors.placeholder}
        style={styles.input}
        onChangeText={input => {
          dispatch(input.length === 0 ? resetFilter() : filterGoals(input));
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 17,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 17,
  },
  input: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: colors.text,
    padding: 0,
    marginLeft: 16,
    flex: 1,
  },
  image: {
    width: 20,
    height: 20,
  },
});

export default SearchBar;
