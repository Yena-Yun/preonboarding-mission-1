import axios from 'axios';
import { STATUS_CODE } from './const';

const fetchResults = async (keyword: string) => {
  try {
    const { status, data } = await axios.get(
      `/api/v1/search-conditions/?name=${keyword}`,
      { withCredentials: true }
    );

    if (status === STATUS_CODE.SUCCESS) {
      console.info('calling api');

      return data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const searchAPI = {
  fetchResults,
};
