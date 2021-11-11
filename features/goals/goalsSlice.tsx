import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface State {
  list: string[];
}

const initialState: State = {
  list: [],
};

const goals = createSlice({
  name: 'goals',
  initialState,
  reducers: {
    addGoal: (state: State, action: PayloadAction<string>) => {
      state.list.push(action.payload);
    },
  },
});

export const {addGoal} = goals.actions;

export default goals.reducer;
