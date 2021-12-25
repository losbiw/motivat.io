import React, {FC} from 'react';
import {View} from 'react-native';
import {Goal} from '../../../types/goal';
import FieldTitle from '../components/field-title';
import TextInputBox from '../components/text-input';

interface Props {
  value?: Goal['title'];
  onChangeText: (text: string) => void;
}

const Title: FC<Props> = ({value, onChangeText}: Props) => (
  <View>
    <FieldTitle>Title</FieldTitle>
    <TextInputBox
      defaultValue={value}
      placeholder="Write your goal here"
      onChangeText={onChangeText}
    />
  </View>
);

export default Title;
