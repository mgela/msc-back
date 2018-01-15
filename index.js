const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('koa-cors');

const app = new Koa();
const router = require('./routes/router');
const logger = require('koa-logger');


require('./db');

const PORT = process.env.PORT || 8080;

app
  .use(logger())
  .use(cors({origin: '*'}))
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(PORT, () => {
  //eslint-disable-next-line
  console.log('Koa app listening on ' + `${PORT}`
  )
});
