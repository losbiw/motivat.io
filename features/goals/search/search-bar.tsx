import React, {FC} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import colors from '../../../constants/colors';
import {RootState} from '../../../store';
import Icon from '../../general/icon';
import {resetFilter, setFilteredGoals} from '../goals-slice';

const SearchBar: FC = () => {
  const goalsList = useSelector((state: RootState) => state.goals.fullList);

  const dispatch = useDispatch();

  return (
    <View style={styles.background}>
      <Icon
        style={styles.image}
        color={colors.placeholder}
        source={require('../../../assets/icons/search/search.png')}
      />
      <TextInput
        placeholder="Search goals"
        placeholderTextColor={colors.placeholder}
        style={styles.input}
        onChangeText={input => {
          if (input.length === 0) {
            dispatch(resetFilter());
          } else {
            const filtered = goalsList
              .map(({title, category}) => ({
                title,
                category,
              }))
              .filter(goal => new RegExp(input, 'gi').test(goal.title));

            dispatch(setFilteredGoals(filtered));
          }
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
