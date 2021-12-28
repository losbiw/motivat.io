import React, {FC} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import colors from '@constants/colors';
import {RootState} from 'store';
import {Goal} from '@type/goal';
import WideButton from '../general/wide-button';
import CategoryDropdown from './fields/category';
import Notification from './fields/notification';
import Title from './fields/title';
import {State, updateTempItem} from './settings-slice';

type Props = Pick<State, 'id'>;

const Settings: FC<Props> = ({id}) => {
  const dispatch = useDispatch();

  const goalsList = useSelector((state: RootState) => state.goals.fullList);
  const tempEditedItem = useSelector(
    (state: RootState) => state.settings.tempEditedGoal,
  );

  const editedItem: Partial<Goal> = id ? goalsList[id] : tempEditedItem;

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Title
            value={editedItem.title}
            onChangeText={value => dispatch(updateTempItem({title: value}))}
          />

          <Notification
            value={editedItem.notification}
            onChangeText={value =>
              dispatch(updateTempItem({notification: value}))
            }
          />

          <CategoryDropdown />
        </ScrollView>
      </View>

      <View style={styles.saveButton}>
        <WideButton title="Save" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    paddingHorizontal: 33,
    paddingTop: 46,
    paddingBottom: 22,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: colors.background,
    zIndex: 1,
  },
  list: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 10,
  },
  saveButton: {
    marginTop: 15,
  },
});

export default Settings;
