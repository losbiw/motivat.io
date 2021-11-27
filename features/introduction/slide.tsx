import React, {FC} from 'react';
import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';
import SText from '../general/text';

export interface SlideData {
  title: JSX.Element;
  description: string;
  image: ImageSourcePropType;
}

const Slide: FC<SlideData> = ({title, description, image}) => {
  return (
    <View style={styles.slide}>
      <View style={styles.text}>
        <View>{title}</View>
        <SText style={styles.description}>{description}</SText>

        <Image style={styles.image} source={image} />
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
  image: {
    flex: 1,
    width: 260,
    resizeMode: 'contain',
  },
});

export default Slide;
