const Koa = require('koa');
const app = new Koa();


app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000, console.log('running hard on 3000'));
