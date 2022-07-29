var express = require('express');
var router = express.Router();

const myusername = 'user1';
const mypassword = 'mypassword';

// a variable to save a session
var session;

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function (req, res, next) {
  res.send('post to users');
});

module.exports = router;
