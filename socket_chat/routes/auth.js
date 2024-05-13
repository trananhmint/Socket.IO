var express = require('express');
var router = express.Router();
const {middleware} = require('../middleware/middleware');
const {register, login, testMiddleware} = require('../controllers/auth.controller');

router.post('/register', register);
router.post('/login', login);
router.get('/test-middleware', middleware, testMiddleware);


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



module.exports = router;
