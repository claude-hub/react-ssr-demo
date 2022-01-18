import express from 'express';
import template from './template';

const app = express();
app.get('/', (req, res) => {
  res.send(template);
});

app.listen(3001, () => {
  console.log('listen:3001');
});
