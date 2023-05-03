import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';

interface IndexState {
  focusedIndex: number;
}

const initialState: IndexState = {
  focusedIndex: -1,
};

const focusedIndexSlice = createSlice({
  name: 'keyboardFocusedIndex',
  initialState,
  reducers: {
    arrowDown: (state: IndexState, action: PayloadAction<number>) => {
      state.focusedIndex = (state.focusedIndex + 1) % action.payload;
    },
    arrowUp: (state: IndexState, action: PayloadAction<number>) => {
      state.focusedIndex =
        (state.focusedIndex - 1 + action.payload) % action.payload;
    },
    escape: (state: IndexState) => {
      state.focusedIndex = -1;
    },
  },
});

export const { arrowDown, arrowUp, escape } = focusedIndexSlice.actions;
export const focusedResult = (state: RootState) => state.focusedIndex;
export default focusedIndexSlice.reducer;
