const Router = require('koa-router');
const router = new Router();
const parse = require('co-body');2

const Controller = require('../controllers/controllers');


router.post('/signup', Controller.trial)
router.get('/signup', Controller.trial)
router.get('/trial', Controller.trial)
router.get('/error', Controller.trial)

module.exports = router;
