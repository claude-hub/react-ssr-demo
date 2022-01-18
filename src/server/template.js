import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../containers/Home';

const content = renderToString(<Home />);

const html = `
  <html>
    <head>
      <title>ssr</title>
    </head>
    <body>
      <div id="root">${content}</div>
    </body>
  </html>
 `;

export default html;
