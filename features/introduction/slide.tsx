import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import SText from '../general/text';
import Nav, {SlideIndex} from './nav';

export interface SlideData {
  title: JSX.Element;
  description: string;
}

interface Props extends SlideData {
  slideIndex: SlideIndex;
  setSlideIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Slide: FC<Props> = ({setSlideIndex, slideIndex, title, description}) => {
  return (
    <View style={styles.slide}>
      <View style={styles.text}>
        <View>{title}</View>
        <SText style={styles.description}>{description}</SText>
      </View>

      <Nav slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
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
