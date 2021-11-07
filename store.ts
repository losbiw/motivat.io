import {configureStore} from '@reduxjs/toolkit';
import introSlice from './features/introduction/introSlice';

export const store = configureStore({
  reducer: {
    intro: introSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
