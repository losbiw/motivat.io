import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../../../constants/colors';
import Icon from '../../general/icon';
import SText from '../../general/text';

const SearchBar: FC = () => {
  return (
    <View style={styles.background}>
      <Icon
        style={styles.image}
        color={colors.placeholder}
        source={require('../../../assets/images/search/search.png')}
      />
      <SText style={styles.placeholder}>Search goals</SText>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: 17,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 17,
  },
  placeholder: {
    fontSize: 16,
    color: colors.placeholder,
    marginLeft: 16,
  },
  image: {
    width: 20,
    height: 20,
  },
});

export default SearchBar;
