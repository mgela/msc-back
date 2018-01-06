const Router = require('koa-router');
const router = new Router();

const Controller = require('../controllers/controllers');


router.get('/endpoint', Controller.trial);

module.exports = router;
