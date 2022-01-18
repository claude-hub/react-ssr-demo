import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
//重要是要用到StaticRouter
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routers from '../Routes';

const getHtml = (store, req) => {
  const context = { css: [] };
  //构建服务端的路由
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        {renderRoutes(routers)}
      </StaticRouter>
    </Provider>
  );
  const cssStr = context.css.length ? context.css.join('\n') : '';

  return `
    <html>
      <head>
        <title>ssr</title>
        <style>${cssStr}</style>
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.context = {
            state: ${JSON.stringify(store.getState())}
          }
        </script>
        <script src="/client.js"></script>
      </body>
    </html>
  `;
};

export default getHtml;
