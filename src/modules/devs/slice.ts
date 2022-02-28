import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDeveloper } from './dtos/developer.dto';
import Adapter from './actions/adapter';

export type DevelopersState = IDeveloper;

export const developersSlice = createSlice({
  name: 'developers',
  initialState: Adapter.getInitialState,

  reducers: {
    setData(state, action) {
      Adapter.setAll(state, action.payload);
    },

    addOne: Adapter.addOne,
  },
});

export const { setData, addOne } = developersSlice.actions;

export default developersSlice;
