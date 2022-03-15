import { configureStore } from '@reduxjs/toolkit';
import developer from './developer';

export const store = configureStore({
  reducer: {
    developer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
