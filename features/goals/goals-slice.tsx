import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {DisplayGoal, Goal} from '../../types/goal';

interface State {
  fullList: Goal[];
  titles: DisplayGoal[];
}

const initialState: State = {
  fullList: [],
  titles: [
    {
      title: 'Kas',
      category: 'selfCare',
    },
  ],
};

const goals = createSlice({
  name: 'goals',
  initialState,
  reducers: {
    addGoal: (state: State, action: PayloadAction<Goal>) => {
      const goal = action.payload;
      const {title, category} = goal;

      // state.fullList.push(goal);

      state.titles.push({
        title,
        category,
      });
    },
  },
});

export const {addGoal} = goals.actions;

export default goals.reducer;
