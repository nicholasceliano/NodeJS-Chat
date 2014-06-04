var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Node JS WebSite' });
});

/* GET Chat page. */
router.get('/chat', function(req, res) {
    res.render('chat', { title: 'Chat Page' })
});

module.exports = router;