import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ResultState {
  id: number;
  name: string;
}

const initialState: ResultState = {
  id: 0,
  name: '',
};

export const resultSlice = createSlice({
  name: 'searchResults',
  initialState,
  reducers: {
    storeResults: (state) => {
      // 검색결과를 expire time과 함께 저장하는 로직
    },
  },
});

export const { storeResults } = resultSlice.actions;

export default resultSlice.reducer;
