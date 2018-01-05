const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('koa-cors');

const app = new Koa();
const router = require('./routes/router');
require('./db');

app
  .use(cors({origin: '*'}))
  .use(async (ctx, next) => {
    try {
      await next();
    } catch (e) {
      ctx.status = 500;
      if (e.message) {
        ctx.body = {
          errors: [e.message],
        };
      }
    }
  })
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(4000, () => {
  //eslint-disable-next-line
  console.log('Koa app listening on port 4000')
});
