var express = require('express');
var router = express.Router();

// Homepage
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PUMA Computing' });
});

// Message processing
router.post('/message', function(req, res, next) {
  res.send('');
});

module.exports = router;
