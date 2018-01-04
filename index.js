//Koa Server
const Koa = require('koa');
const app = new Koa();
//Middleware
const bodyParser = require("koa-bodyparser");
const Router = require("koa-router");
//File imports
const Routes = require("./routes/router.js");


app.listen(3000, console.log('running hard on 3000'));
