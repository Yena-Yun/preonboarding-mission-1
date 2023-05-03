import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { searchAPI } from 'api/searchAPI';
import { ResultState } from 'types/searchResult';

interface SearchState {
  keyword: string;
  results: ResultState[];
  loading: boolean;
  error?: string;
}

const initialState: SearchState = {
  keyword: '',
  results: [],
  loading: false,
  error: '',
};

interface ApiResultState {
  keyword: string;
  apiResults: ResultState[];
}

let previousApiResult: ApiResultState = {
  keyword: '',
  apiResults: [],
};

export const fetchResultThunk = createAsyncThunk(
  'search/fetchResults',
  async (keyword: string) => {
    if (previousApiResult.apiResults && previousApiResult.keyword === keyword) {
      console.log('이전 결과 재사용');
      return previousApiResult.apiResults;
    }

    const searchResults = await searchAPI.fetchResults(keyword);
    console.log('api로 새로운 데이터 호출');
    console.log(searchResults);

    previousApiResult = { keyword, apiResults: searchResults };

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
