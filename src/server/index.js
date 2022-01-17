const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(
    `
   <html>
     <head>
       <title>hello</title>
     </head>
     <body>
       <p>hello world!</p>
     </body>
   </html>
 `
  );
});

app.listen(3001, () => {
  console.log('listen:3001');
});
