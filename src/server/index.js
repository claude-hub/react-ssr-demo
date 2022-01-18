import express from 'express';
import getHtml from './template';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.send(getHtml(req));
});

app.listen(3001, () => {
  console.log('listen:3001');
});
