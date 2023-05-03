import axios from 'axios';
import { ResultState } from 'types/searchResult';

interface SearchResultType {
  data: Promise<ResultState[]>;
}

const fetchResults = async (keyword: string) => {
  try {
    const { data: searchResultData }: SearchResultType = await axios.get(
      `/api/v1/search-conditions/?name=${keyword}`,
      {
        withCredentials: true,
      }
    );

    console.info('calling api');

    return searchResultData;
  } catch (err) {
    console.log(err);
    throw new Error('api 호출이 실패하였습니다.');
  }
};

export const searchAPI = {
  fetchResults,
};
