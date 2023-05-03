import { ResultState } from 'types/searchResult';

export interface SearchState {
  keyword: string;
  results: ResultState[];
  loading: boolean;
  error?: string;
}

export interface ApiResultState {
  keyword: string;
  apiResults: ResultState[];
}
