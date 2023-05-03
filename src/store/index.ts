import { configureStore } from '@reduxjs/toolkit';
import resultReducer from './features/searchResults/resultSlice';

export const store = configureStore({
  reducer: {
    results: resultReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
