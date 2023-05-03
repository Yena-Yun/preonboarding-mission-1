import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { searchAPI } from 'api/searchAPI';

export const fetchSearchResults = createAsyncThunk(
  'search/fetchResults',
  async (keyword: string, thunkAPI) => {
    const searchResults = await searchAPI.fetchResults(keyword);
    console.log(searchResults);

    return searchResults;
  }
);

interface ResultState {
  id: number;
  name: string;
}

interface SearchState {
  results: ResultState[];
  loading: 'isLoading' | 'succeeded' | 'failed';
}

const initialState = {
  results: [],
  loading: 'isLoading',
} as SearchState;

const resultsSlice = createSlice({
  name: 'results',
  initialState,
  reducers: {
    storeResults: (state) => {
      // 검색결과를 expire time과 함께 저장하는 로직
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchSearchResults.fulfilled,
      (state, action: PayloadAction<ResultState>) => {
        state.results.push(action.payload);
      }
    );
  },
});
