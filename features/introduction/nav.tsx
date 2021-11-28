import React, {FC, useEffect, useRef} from 'react';
import {Animated, Pressable, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import colors from '../../constants/colors';
import usePrevious from '../../hooks/usePrevious';
import {RootState} from '../../store';
import Gradient from '../general/gradient';
import SText from '../general/text';
import WideButton from '../general/wide-button';
import {hideIntroduction, setSlideIndex, showNextSlide} from './intro-slice';
import slides from './slides-data';

export type SlideIndex = number;
type SetSlideIndex = (index: number) => void;

const initialOpacity = 0.5;

const renderBalls = (
  count: number,
  focusedIndex: number,
  prevIndex: undefined | number,
  fadeInOpacity: Animated.Value,
  setIndex: SetSlideIndex,
) =>
  new Array(count).fill(null).map((_el, index) => (
    <Animated.View
      style={[
        circles.container,
        index === count - 1 ? {} : styles.margin,
        index === focusedIndex ? {opacity: fadeInOpacity} : {},
        // index === prevIndex ? {opacity: fadeOutOpacity} : {},
      ]}
      key={`cirlce-${index}`}>
      <Gradient style={styles.borderRadius}>
        <Pressable onPress={() => setIndex(index)} style={circles.circle}>
          {index === focusedIndex && <View style={circles.innerCircle} />}
        </Pressable>
      </Gradient>
    </Animated.View>
  ));

const Nav: FC = () => {
  const activeIndex = useSelector((store: RootState) => store.intro.slideIndex);
  const previousIndex = usePrevious(activeIndex);

  const fadeInAnim = useRef(new Animated.Value(initialOpacity)).current;

  const dispatch = useDispatch();

  useEffect(() => {
    fadeInAnim.setValue(initialOpacity);

    Animated.timing(fadeInAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [activeIndex, fadeInAnim]);

  // if (activeIndex === slides.length - 1) {
  //   return (
  //     <WideButton
  //       style={styles.wideButton}
  //       onPress={() => dispatch(hideIntroduction())}
  //       title="Get Started"
  //     />
  //   );
  // }

  return (
    <View style={styles.nav}>
      <Pressable onPress={() => dispatch(hideIntroduction())}>
        <SText style={styles.pressable}>Skip</SText>
      </Pressable>

      <View style={styles.row}>
        {renderBalls(
          3,
          activeIndex,
          previousIndex,
          fadeInAnim,
          (index: number) => dispatch(setSlideIndex(index)),
        )}
      </View>

      <Pressable onPress={() => dispatch(showNextSlide())}>
        <SText style={styles.pressable}>&gt;&gt;</SText>
      </Pressable>
    </View>
  );
};

const circles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    opacity: initialOpacity,
  },
  circle: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 6,
    height: 6,
    backgroundColor: colors.background,
    borderRadius: 4,
  },
});

const styles = StyleSheet.create({
  nav: {
    paddingHorizontal: 63,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 3,
  },
  wideButton: {
    marginHorizontal: 33,
  },
  row: {
    flexDirection: 'row',
  },
  borderRadius: {
    borderRadius: 10,
  },
  opacity: {
    opacity: 1,
  },
  margin: {
    marginRight: 15,
  },
  pressable: {
    fontSize: 14,
  },
});

export default Nav;
