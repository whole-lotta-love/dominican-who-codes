import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import adapter from './actions/entityAdapter.action';
import { IDeveloperProfile } from './models/profile.entity';

const slice = createSlice({
  name: 'developers',
  initialState: adapter.getInitialState(),
  reducers: {
    setupData: (state, action: PayloadAction<IDeveloperProfile[]>) => {
      adapter.setAll(state, action.payload);
    },

    addOne: adapter.addOne,
  },
});

export const developersActions = slice.actions;
export default slice.reducer;
