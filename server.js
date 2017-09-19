import cookieParser from 'cookie-parser';
import express from 'express';
import helmet from 'helmet';
import next from 'next';
import path from 'path';

import pkg from './package.json';

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.NODE_PORT || pkg.port || 8080;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
.then(() => {
  const server = express();

  server.use(cookieParser('cookie'));
  server.use(helmet());

  server.use('/static', express.static(path.join(__dirname, 'static'), { maxAge: '30d' }));

  server.get('*', (req, res) => handle(req, res));

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`${pkg.name} > Ready on http://localhost:${port}`);
  });
})
.catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});
