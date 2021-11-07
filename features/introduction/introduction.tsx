import React, {FC, useRef} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import Nav from './nav';
import Slide from './slide';
import slides from './slides-data';

const Introduction: FC = () => {
  const activeIndex = useSelector((store: RootState) => store.intro.slideIndex);
  const posAnimation = useRef(new Animated.Value(0)).current;
  // const {title, description} = slides[activeIndex];

  return (
    <View style={styles.introduction}>
      <View style={styles.container}>
        {slides.map(({title, description}, index) => (
          <Slide
            key={`slide-${index}`}
            title={title}
            description={description}
          />
        ))}
      </View>

      <Nav />
    </View>
  );
};

const styles = StyleSheet.create({
  introduction: {
    height: '100%',
    justifyContent: 'space-between',
    paddingTop: 54,
    paddingBottom: 113,
  },
  container: {
    flexDirection: 'row',
    right: 400,
  },
});

export default Introduction;
