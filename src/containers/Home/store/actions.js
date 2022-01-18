import axios from 'axios';
import { CHANGE_LIST } from './constants';

const changeList = (list) => ({
  type: CHANGE_LIST,
  list,
});

export const getHomeList = (server) => {
  return (dispatch) => {
    return axios.get('/list.json')
      .then((res) => {
        dispatch(changeList(res.data))
      });
  };
}