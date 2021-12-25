import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import categories, {CategoryNames} from '../../../constants/categories';
import colors from '../../../constants/colors';
import capitalizeFirstLetter from '../../../helpers/capitalize';
import Dropdown from '../../general/dropdown';
import Icon from '../../general/icon';
import SText from '../../general/text';
import Category from '../../goals/category';
import FieldTitle from '../components/field-title';

const CategoryDropdown: FC = () => (
  <View>
    <FieldTitle>Category</FieldTitle>
    <Dropdown
      options={Object.keys(categories).map(
        key => categories[key as CategoryNames],
      )}
      renderPreview={item => (
        <View style={styles.container}>
          <View style={styles.row}>
            <View style={styles.icon}>
              <Category {...item} />
            </View>
            <SText style={styles.text}>
              {capitalizeFirstLetter(item.title)}
            </SText>
          </View>

          <Icon
            style={styles.arrow}
            source={require('../../../assets/icons/general/arrow.png')}
            color={colors.text}
          />
        </View>
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    paddingRight: 15,
    backgroundColor: colors.secondary,
    borderColor: colors.border,
    borderRadius: 17,
    borderWidth: 1,
  },
  icon: {
    marginRight: 22,
  },
  text: {
    fontSize: 18,
  },
  arrow: {
    width: 13.5,
    height: 8,
  },
});

export default CategoryDropdown;
