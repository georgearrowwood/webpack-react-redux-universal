import path from 'path';
import Express from 'express';
import exphbs from 'express-handlebars';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import logger from './modules/logger';
import routes from './routes';

const server = Express();
console.log(path.join(process.cwd(), '/dist/favicon.ico'));
server
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({
    extended: true,
  }))
  .engine('.hbs', exphbs({
    extname: '.hbs',
  }))
  .use(cookieParser())
  .set('view engine', '.hbs')
  .set('views', 'server/views/')
  .use('/favicon.ico', Express.static(path.join(process.cwd(), '/dist/favicon.ico'), { fallthrough: false }))
  .use('/assets', Express.static(path.join(process.cwd(), '/dist'), { fallthrough: false }))
  .use('/', routes)
  .use((req, res) => {
    res.send(404);
  })
  // error handler
  .use((err, req, res) => {
    logger.info(err);
    res.send(500);
  });

export default server;
