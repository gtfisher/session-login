var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('register', { title: 'Register User' });
});

router.post('/', function (req, res, next) {
  console.log('post to register');

  const { first_name, last_name, email, password } = req.body;
  console.log('got fn:', first_name);

  if (!(email && password && first_name && last_name)) {
    res.status(400).send('All input is required');
  }

  res.send('post to rgisters');
});

module.exports = router;
