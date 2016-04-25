'use strict'

const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/login', (req, res) => {
  res.render('auth/login', {error: req.flash('error')});
});

module.exports = router;