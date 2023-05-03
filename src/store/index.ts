import { configureStore } from '@reduxjs/toolkit';
import resultReducer from './hooks/fetchResultThunk';

export const store = configureStore({
  reducer: {
    results: resultReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
