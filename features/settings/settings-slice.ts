import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Goal} from '@type/goal';

type TempEditedItem = Partial<Goal>;

export interface State {
  isOpen: boolean;
  id?: number;
  tempEditedGoal: TempEditedItem;
}

const initialState: State = {
  isOpen: false,
  id: undefined,
  tempEditedGoal: {},
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    openSettings: (
      _state: State,
      {payload: id}: PayloadAction<number | undefined>,
    ) => {
      return {
        isOpen: true,
        id: id,
        tempEditedGoal: {},
      };
    },
    updateTempItem: (
      state: State,
      {payload: updated}: PayloadAction<TempEditedItem>,
    ) => {
      state.tempEditedGoal = {...state.tempEditedGoal, ...updated};
    },
  },
});

export const {openSettings, updateTempItem} = settingsSlice.actions;

export default settingsSlice.reducer;
