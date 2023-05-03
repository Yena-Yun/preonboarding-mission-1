import axios from 'axios';
import { STATUS_CODE } from './const';

export const getSearchResult = async (keyword: string) => {
  try {
    const { status, data } = await axios.get(
      `/api/v1/search-conditions/?name=${keyword}`,
      { withCredentials: true }
    );

    if (status === STATUS_CODE.SUCCESS) {
      console.log(data);
      console.info('calling api');

      return data;
    }
  } catch (err) {
    console.log(err);
  }
};
