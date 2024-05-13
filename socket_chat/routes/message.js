var express = require('express');
var router = express.Router();
const {sendMessage, getAllMessage} = require('../controllers/message.controller');
const { middleware } = require('../middleware/middleware');

router.post('/send/:receiverId', middleware, sendMessage);
router.get('/conversation/:receiverId', middleware ,getAllMessage);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;