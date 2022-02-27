import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDeveloper } from './dtos/developer.dto';

export type DevelopersState = IDeveloper;

const initialState: DevelopersState = {
  name: 'john doe',
  initials: 'JD',
  summary: 'developer',
};

export const developersSlice = createSlice({
  name: 'developers',
  initialState,

  reducers: {
    setDeveloperData: (state, action: PayloadAction<DevelopersState>) => {
      state = action.payload;
    },
  },
});

export const { setDeveloperData } = developersSlice.actions;

export default developersSlice;
