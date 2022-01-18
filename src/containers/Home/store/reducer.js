import { CHANGE_LIST } from './constants';

const defaultState = {
  name: '首页',
  list: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LIST:
      const newState = {
        ...state,
        list: action.list,
      };
      return newState;
    default:
      return state;
  }
};
