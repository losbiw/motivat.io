import React, {FC, useEffect, useRef} from 'react';
import {Animated, Easing, Pressable, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {animations} from '../../constants/animations';
import colors from '../../constants/colors';
import {screenWidth} from '../../constants/dimensions';
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
  fadeInOpacity: Animated.Value,
  setIndex: SetSlideIndex,
) =>
  new Array(count).fill(null).map((_el, index) => (
    <Animated.View
      style={[
        circles.container,
        index === count - 1 ? {} : styles.margin,
        index === focusedIndex ? {opacity: fadeInOpacity} : {},
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
  const offsetAnim = useRef(new Animated.Value(0)).current;

  const dispatch = useDispatch();

  useEffect(() => {
    if (activeIndex !== slides.length - 1) {
      fadeInAnim.setValue(initialOpacity);

      Animated.timing(fadeInAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [activeIndex, fadeInAnim]);

  useEffect(() => {
    if (
      previousIndex === slides.length - 1 &&
      activeIndex === slides.length - 2
    ) {
      Animated.timing(offsetAnim, {
        toValue: 0,
        duration: animations.slideDuration,
        easing: Easing.bezier(0.79, 0.33, 0.14, 0.53),
        useNativeDriver: true,
      }).start();
    }
  }, [previousIndex, activeIndex, offsetAnim]);

  useEffect(() => {
    if (activeIndex === slides.length - 1) {
      offsetAnim.setValue(0);

      Animated.timing(offsetAnim, {
        toValue: screenWidth * -1,
        duration: animations.slideDuration,
        easing: Easing.bezier(0.79, 0.33, 0.14, 0.53),
        useNativeDriver: true,
      }).start();
    }
  }, [activeIndex, offsetAnim]);

  const NavElement = (
    <View style={styles.nav}>
      <Pressable onPress={() => dispatch(hideIntroduction())}>
        <SText style={styles.pressable}>Skip</SText>
      </Pressable>

      <View style={styles.row}>
        {renderBalls(3, activeIndex, fadeInAnim, (index: number) =>
          dispatch(setSlideIndex(index)),
        )}
      </View>

      <Pressable onPress={() => dispatch(showNextSlide())}>
        <SText style={styles.pressable}>&gt;&gt;</SText>
      </Pressable>
    </View>
  );

  return (
    <Animated.View style={[styles.animated, {translateX: offsetAnim}]}>
      {NavElement}
      <WideButton
        style={styles.wideButton}
        onPress={() => dispatch(hideIntroduction())}
        title="Get Started"
      />
    </Animated.View>
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
    width: screenWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 17,
  },
  animated: {
    alignItems: 'flex-end',
    position: 'relative',
    flexDirection: 'row',
    zIndex: 3,
    width: '200%',
  },
  wideButton: {
    left: 0,
    marginHorizontal: 33,
    flex: 1,
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
