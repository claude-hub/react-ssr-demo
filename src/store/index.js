import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as homeReducer } from '../containers/Home/store';

//合并项目组件中store的reducer
const reducer = combineReducers({
  home: homeReducer,
});

// 服务端的store创建函数
export const getServerStore = () => {
  return createStore(reducer, applyMiddleware(thunk));
};

// 客户端的store创建函数
export const getClientStore = () => {
  const defaultState = window.context ? window.context.state : {};
  return createStore(reducer, defaultState, applyMiddleware(thunk));
};
