import React, {FC} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import colors from '../../constants/colors';
import {RootState} from '../../store';
import Gradient from '../general/gradient';
import SText from '../general/text';
import WideButton from '../general/wide-button';
import {hideIntroduction, setSlideIndex, showNextSlide} from './intro-slice';
import slides from './slides-data';

export type SlideIndex = number;
type SetSlideIndex = (index: number) => void;

const renderBalls = (
  count: number,
  focusedIndex: number,
  setIndex: SetSlideIndex,
) =>
  new Array(count).fill(null).map((_el, index) => (
    <View
      style={[
        circles.container,
        index === count - 1 ? {} : styles.margin,
        index === focusedIndex ? styles.opacity : {},
      ]}
      key={`cirlce-${index}`}>
      <Gradient style={styles.borderRadius}>
        <Pressable onPress={() => setIndex(index)} style={circles.circle}>
          {index === focusedIndex && <View style={circles.innerCircle} />}
        </Pressable>
      </Gradient>
    </View>
  ));

const Nav: FC = () => {
  const activeIndex = useSelector((store: RootState) => store.intro.slideIndex);
  const dispatch = useDispatch();

  if (activeIndex === slides.length - 1) {
    return (
      <WideButton
        style={styles.wideButton}
        onPress={() => dispatch(hideIntroduction())}
        title="Get Started"
      />
    );
  }

  return (
    <View style={styles.nav}>
      <Pressable onPress={() => dispatch(hideIntroduction())}>
        <SText style={styles.pressable}>Skip</SText>
      </Pressable>

      <View style={styles.row}>
        {renderBalls(3, activeIndex, (index: number) =>
          dispatch(setSlideIndex(index)),
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
    opacity: 0.5,
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
