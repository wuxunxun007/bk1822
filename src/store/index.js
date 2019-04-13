import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import home from './home';
import kind from './kind';

const reducer = combineReducers({ // 整合各个页面需要的数据
  home,
  kind
})

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
