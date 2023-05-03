import { ResultState } from 'types/searchResult';

export interface SearchState {
  keyword: string;
  results: ResultState[];
  loading: boolean;
  error?: string;
}

export interface StoredData {
  storedKeyword: string;
  storedResults: ResultState[];
}
