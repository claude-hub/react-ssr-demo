import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import createStore from '../store';
import routers from '../Routes';

const App = () => {
  return (
    <Provider store={createStore()}>
      <BrowserRouter>
        {renderRoutes(routers)}
      </BrowserRouter>
    </Provider>
  );
};

// hydrate 是 React 中提供在初次渲染的时候，去复用原本已经存在的 DOM 节点，
// 减少重新生成节点以及删除原本 DOM 节点的开销，来加速初次渲染的功能。
// 主要使用场景是服务端渲染
hydrate(<App />, document.querySelector('#root'));
