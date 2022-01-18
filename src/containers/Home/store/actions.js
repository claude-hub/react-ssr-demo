import axios from 'axios';
import { CHANGE_LIST } from './constants';

const changeList = (list) => ({
  type: CHANGE_LIST,
  list,
});

export const getHomeList = () => {
  return (dispatch) => {
    return axios.get('http://localhost:3001/list.json')
      .then((res) => {
        dispatch(changeList(res.data))
      }).catch(err => {
        console.log(err)
      });
  };
}