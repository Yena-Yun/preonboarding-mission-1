import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';

const initialState = {
  isOpenResults: false,
};

const isOpenSlice = createSlice({
  name: 'isOpenResults',
  initialState,
  reducers: {
    toggleIsOpen(state, action) {
      state.isOpenResults = action.payload;
    },
  },
});

const { actions } = isOpenSlice;
export const { toggleIsOpen } = actions;
export const selectIsOpenResults = (state: RootState) => state.isOpenResults;
export default isOpenSlice.reducer;
