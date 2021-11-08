import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import slides from './slides-data';

interface State {
  isShown: boolean;
  slideIndex: number;
}

const initialState: State = {
  isShown: true,
  slideIndex: 0, // TODO: change the hardcoded value
};

const introSlice = createSlice({
  name: 'introduction',
  initialState,
  reducers: {
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

export const {hideIntroduction, showNextSlide, showPrevSlide, setSlideIndex} =
  introSlice.actions;

export default introSlice.reducer;
