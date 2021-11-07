import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import GradientText from '../general/gradient-text';
import SText from '../general/text';
import {SlideData} from './slide';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 22,
    marginBottom: 32,
  },
});

const Title: FC = ({children}) => <View style={styles.row}>{children}</View>;

const TitleText: FC = ({children}) => (
  <SText style={styles.title}>{children}</SText>
);

const slides: SlideData[] = [
  {
    title: (
      <Title>
        <TitleText>What is&nbsp;</TitleText>
        <GradientText style={styles.title}>Motivat.io?</GradientText>
      </Title>
    ),
    description:
      'Motivat.io was created to help you achieve your goals with motivation and passion',
  },
  {
    title: (
      <Title>
        <TitleText>How would I use&nbsp;</TitleText>
        <TitleText>Motivat.io?</TitleText>
      </Title>
    ),
    description:
      'Motivat.io is fully personalizable to your choice and allows you to set fully configurable notification messages at any time',
  },
  {
    title: (
      <Title>
        <TitleText>Motivat.io&nbsp;</TitleText>
        <TitleText>network</TitleText>
      </Title>
    ),
    description: 'Share your accomplishments with the world and view theirs',
  },
];

export default slides;
