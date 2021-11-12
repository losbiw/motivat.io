import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Goal} from '../../types/goal';

interface State {
  fullList: Goal[];
  titles: string[];
}

const initialState: State = {
  fullList: [],
  titles: ['hello', 'world'],
};

const goals = createSlice({
  name: 'goals',
  initialState,
  reducers: {
    addGoal: (state: State, action: PayloadAction<Goal>) => {
      // state.fullList.push();
      state.titles.push(action.payload.title);
    },
  },
});

export const {addGoal} = goals.actions;

export default goals.reducer;
