const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('matches/index')
});

router.get('/show', (req, res) => {
  res.render('matches/show')
  // eval(require('locus'))
})

router.post('/show', (req, res) => {
  res.redirect('/matches/show')
})

module.exports = router;