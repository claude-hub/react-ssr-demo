import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as homeReducer } from '../containers/Home/store';

//合并项目组件中store的reducer
const reducer = combineReducers({
  home: homeReducer,
});

export default  () => {
  // 创建store，并引入中间件thunk进行异步操作的管理
  return createStore(reducer, applyMiddleware(thunk))
}