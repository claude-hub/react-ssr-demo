import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
//重要是要用到StaticRouter
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routers from '../Routes';

const getHtml = (store, req) => {
  //构建服务端的路由
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path}>
        {renderRoutes(routers)}
      </StaticRouter>
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
