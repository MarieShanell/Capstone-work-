import express from 'express';
import { Home } from '../store';

const app = express();

app.get(Home, (req, res) => {
  res.send('Welcome');
});

app.listen(4040, () =>
  console.log('Example app listening on port 4040'),
);
