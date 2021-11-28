import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import SText from '../general/text';

export interface SlideData {
  title: JSX.Element;
  description: string;
  Image: () => JSX.Element;
}

const Slide: FC<SlideData> = ({title, description, Image}) => {
  return (
    <View style={styles.slide}>
      <View style={styles.container}>
        <View style={styles.text}>
          <View>{title}</View>
          <SText style={styles.description}>{description}</SText>
        </View>

        <Image />

        <View />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    width: '100%',
    paddingHorizontal: 30,
  },
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
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
