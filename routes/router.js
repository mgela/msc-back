const Router = require('koa-router');
const router = new Router();
const parse = require('co-body');

const Controller = require('../controllers/controllers');


router.post('/userSignup', Controller.loginCustom)
router.post('/coachSignUp', Controller.coachSignUp)




module.exports = router;
