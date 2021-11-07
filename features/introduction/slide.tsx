import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import SText from '../general/text';
import Nav from './nav';
import slides from './slides-data';

export interface SlideData {
  title: JSX.Element;
  description: string;
}

const Slide: FC = () => {
  const activeIndex = useSelector((store: RootState) => store.intro.slideIndex);
  const {title, description} = slides[activeIndex];

  return (
    <View style={styles.slide}>
      <View style={styles.text}>
        <View>{title}</View>
        <SText style={styles.description}>{description}</SText>
      </View>

      <Nav />
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 54,
    paddingBottom: 113,
    paddingHorizontal: 30,
  },
  text: {
    alignItems: 'center',
  },
  description: {
    textAlign: 'center',
    fontSize: 15,
  },
});

export default Slide;
