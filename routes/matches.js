const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('matches/index')
});

router.get('/show', (req, res) => {
  res.render('matches/show')
})


module.exports = router;