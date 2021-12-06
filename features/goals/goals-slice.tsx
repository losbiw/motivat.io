import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {DisplayGoal, Goal} from '../../types/goal';

interface State {
  fullList: Goal[];
  displayItems: DisplayGoal[];
}

const initialState: State = {
  fullList: [
    {
      title: 'Take care of yourself!',
      category: 'selfCare',
      days: [],
    },
  ],
  displayItems: [
    {
      title: 'Take care of yourself!',
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

      state.displayItems.push({
        title,
        category,
      });
    },
    setFilteredGoals: (state: State, action: PayloadAction<DisplayGoal[]>) => {
      state.displayItems = action.payload;
    },
    resetFilter: (state: State) => {
      state.displayItems = state.fullList.map(({title, category}) => ({
        title,
        category,
      }));
    },
  },
});

export const {addGoal, setFilteredGoals, resetFilter} = goals.actions;

export default goals.reducer;
