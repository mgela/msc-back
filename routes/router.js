const Router = require('koa-router');
const router = new Router();
const parse = require('co-body');

const Controller = require('../controllers/controllers');


router.post('/signup', Controller.loginCustom)
router.post('/signupFacebook', Controller.loginFacebook)
router.post('/signupGoogle', Controller.loginGoogle)



module.exports = router;
