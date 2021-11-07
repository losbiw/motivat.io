import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import SText from '../general/text';

export interface SlideData {
  title: JSX.Element;
  description: string;
}

const Slide: FC<SlideData> = ({title, description}) => {
  return (
    <View style={styles.slide}>
      <View style={styles.text}>
        <View>{title}</View>
        <SText style={styles.description}>{description}</SText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    width: '100%',
    paddingHorizontal: 30,
    alignItems: 'center',
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
