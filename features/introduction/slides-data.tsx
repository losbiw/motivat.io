import React, {FC} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {screenHeight} from '../../constants/dimensions';
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
  phone: {
    height: screenHeight * 0.48,
    aspectRatio: 0.65,
  },
  notifications: {
    height: screenHeight * 0.48,
    aspectRatio: 0.5,
  },
  chat: {
    height: screenHeight * 0.19,
    aspectRatio: 1.95,
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
    Image: () => (
      <Image
        source={require('../../assets/intro/phone.png')}
        style={styles.phone}
      />
    ),
  },
  {
    title: (
      <Title>
        <TitleText>How would I use&nbsp;</TitleText>
        <GradientText style={styles.title}>Motivat.io?</GradientText>
      </Title>
    ),
    description:
      'Motivat.io allows you to set fully personalizable notifications to your choice',
    Image: () => (
      <Image
        source={require('../../assets/intro/notifications.png')}
        style={styles.notifications}
      />
    ),
  },
  {
    title: (
      <Title>
        <GradientText style={styles.title}>Motivat.io&nbsp;</GradientText>
        <TitleText>network</TitleText>
      </Title>
    ),
    description: 'Share your accomplishments with the world and view theirs',
    Image: () => (
      <Image
        source={require('../../assets/intro/chat.png')}
        style={styles.chat}
      />
    ),
  },
];

export default slides;
