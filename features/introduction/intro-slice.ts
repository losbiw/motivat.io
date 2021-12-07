import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import slides from './slides-data';

interface State {
  isShown: boolean | undefined;
  slideIndex: number;
}

const initialState: State = {
  isShown: undefined,
  slideIndex: 0,
};

const introSlice = createSlice({
  name: 'introduction',
  initialState,
  reducers: {
    showIntroduction: (state: State) => {
      state.isShown = true;
    },
    hideIntroduction: (state: State) => {
      state.isShown = false;
    },
    showNextSlide: (state: State) => {
      if (state.slideIndex + 1 < slides.length) {
        state.slideIndex += 1;
      }
    },
    showPrevSlide: (state: State) => {
      if (state.slideIndex - 1 >= 0) {
        state.slideIndex -= 1;
      }
    },
    setSlideIndex: (state: State, action: PayloadAction<number>) => {
      state.slideIndex = action.payload;
    },
  },
});

export const {
  showIntroduction,
  hideIntroduction,
  showNextSlide,
  showPrevSlide,
  setSlideIndex,
} = introSlice.actions;

export default introSlice.reducer;
