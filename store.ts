import {configureStore} from '@reduxjs/toolkit';
import goalsSlice from './features/goals/goals-slice';
import introSlice from './features/introduction/intro-slice';
import settingsSlice from './features/settings/settings-slice';

export const store = configureStore({
  reducer: {
    intro: introSlice,
    goals: goalsSlice,
    settings: settingsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
