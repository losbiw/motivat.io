import React, {FC} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import colors from '../../constants/colors';
import Gradient from '../general/gradient';
import SText from '../general/text';

export type SlideIndex = number;
type SetSlideIndex = React.Dispatch<React.SetStateAction<number>>;

interface Props {
  slideIndex: SlideIndex;
  setSlideIndex: SetSlideIndex;
}

const renderBalls = (
  count: number,
  focusedIndex: number,
  setIndex: SetSlideIndex,
) =>
  new Array(count).fill(null).map((_el, index) => (
    <View
      style={Object.assign(
        {},
        styles.container,
        index === count - 1 ? {} : styles.margin,
        index === focusedIndex ? styles.opacity : {},
      )}
      key={`cirlce-${index}`}>
      <Gradient style={styles.borderRadius}>
        <Pressable onPress={() => setIndex(index)} style={styles.button}>
          {index === focusedIndex && <View style={styles.circle} />}
        </Pressable>
      </Gradient>
    </View>
  ));

const Nav: FC<Props> = ({
  slideIndex: currentIndex,
  setSlideIndex: setIndex,
}) => {
  return (
    <View style={styles.nav}>
      <Pressable>
        <SText style={styles.pressable}>Skip</SText>
      </Pressable>

      <View style={styles.circles}>
        {renderBalls(3, currentIndex, setIndex)}
      </View>

      <Pressable onPress={() => setIndex(currentIndex + 1)}>
        <SText style={styles.pressable}>&gt;&gt;</SText>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    paddingHorizontal: 33,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  circles: {
    flexDirection: 'row',
  },
  container: {
    overflow: 'hidden',
    opacity: 0.5,
  },
  button: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderRadius: {
    borderRadius: 10,
  },
  circle: {
    width: 6,
    height: 6,
    backgroundColor: colors.background,
    borderRadius: 4,
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
