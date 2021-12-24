import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface State {
  isOpen: boolean;
  id?: number;
}

const initialState: State = {
  isOpen: false,
  id: undefined,
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
      };
    },
  },
});

export const {openSettings} = settingsSlice.actions;

export default settingsSlice.reducer;
