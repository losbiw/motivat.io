import React, {FC, useEffect, useRef, useState} from 'react';
import {Animated, Easing, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {screenHeight, screenWidth} from '../../constants/dimensions';
import {RootState} from '../../store';
import {showNextSlide, showPrevSlide} from './intro-slice';
import Nav from './nav';
import Slide from './slide';
import slides from './slides-data';

interface TouchPos {
  x: number;
  y: number;
}

const Introduction: FC = () => {
  const dispatch = useDispatch();
  const activeIndex = useSelector((store: RootState) => store.intro.slideIndex);

  const [touchPos, setTouchPos] = useState<TouchPos>();
  const xOffsetAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(xOffsetAnim, {
      toValue: Math.round(activeIndex * screenWidth) * -1,
      duration: 550,
      easing: Easing.bezier(0.42, 0.03, 0.55, 0.87),
      useNativeDriver: true,
    }).start();
  }, [activeIndex, xOffsetAnim]);

  return (
    <View style={styles.introduction}>
      <View
        style={styles.swipeable}
        onStartShouldSetResponder={() => true}
        onResponderStart={e =>
          setTouchPos({
            x: e.nativeEvent.locationX,
            y: e.nativeEvent.locationY,
          })
        }
        onResponderRelease={({nativeEvent}) => {
          const {locationX} = nativeEvent;

          if (touchPos) {
            const {x: initialX} = touchPos;

            if (locationX > initialX) {
              dispatch(showNextSlide());
            } else {
              dispatch(showPrevSlide());
            }
          }
        }}
      />

      <Animated.View
        style={[
          styles.container,
          {
            translateX: xOffsetAnim,
          },
        ]}>
        {slides.map(({title, description}, index) => (
          <Slide
            key={`slide-${index}`}
            title={title}
            description={description}
          />
        ))}
      </Animated.View>

      <Nav />
    </View>
  );
};

const styles = StyleSheet.create({
  introduction: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'space-between',
    paddingTop: 54,
    paddingBottom: 113,
  },
  container: {
    flexDirection: 'row',
  },
  swipeable: {
    backgroundColor: 'black',
    opacity: 0,
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});

export default Introduction;
