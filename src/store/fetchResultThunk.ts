import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { searchAPI } from 'api/searchAPI';
import { StoredData, SearchState } from './types';

const initialState: SearchState = {
  keyword: '',
  results: [],
  loading: false,
  error: '',
};

let previousApiResult: StoredData[] = [];

export const fetchResultThunk = createAsyncThunk(
  'search/fetchResults',
  async (keyword: string) => {
    const storedData = previousApiResult.filter(
      (stored) => stored.storedKeyword === keyword
    );

    if (storedData.length > 0) {
      console.log('이전 결과 재사용');
      return storedData[0].storedResults;
    }
    const searchResults = await searchAPI.fetchResults(keyword);
    console.log('api로 새로운 데이터 호출');

    previousApiResult = [
      ...previousApiResult,
      { storedKeyword: keyword, storedResults: searchResults },
    ];
    return searchResults;
  }
);

const resultsSlice = createSlice({
  name: 'results',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchResultThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchResultThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      });
  },
});

export const selectResult = (state: RootState) => state.results;
export default resultsSlice.reducer;
