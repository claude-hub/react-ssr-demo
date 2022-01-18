import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
//重要是要用到StaticRouter
import { StaticRouter } from 'react-router-dom/server';
import createStore from '../store';
import Routes from '../Routes';

const getHtml = (req) => {
  //构建服务端的路由
  const content = renderToString(
    <Provider store={createStore()}>
      <StaticRouter location={req.path}>{Routes}</StaticRouter>
    </Provider>
  );
  return `
    <html>
      <head>
        <title>ssr</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/client.js"></script>
      </body>
    </html>
  `;
};

export default getHtml;
