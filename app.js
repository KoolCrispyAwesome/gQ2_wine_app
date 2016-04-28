'use strict'

const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const passport = require('passport');
const flash = require('connect-flash');
const cookieSession = require('cookie-session');
const knex = require('./db/knex');
const routes = require('./routes');
if(process.env.NODE_ENV === 'development'){
  require('dotenv').load();
}

app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));
app.use(morgan('tiny'));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieSession({
  secret: process.env.SECRET
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./helpers/passport')(passport);
app.use(require('./helpers/authHelpers').currentUser);

app.get('/', (req, res) => res.redirect('/home'));

app.get('/home', (req, res) => {  
  res.render('home');
});

app.use('/auth', routes.auth);
app.use('/users', routes.users);
app.use('/matches', routes.matches);

app.get('*', (req, res) => res.render('errors/404'));

let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));

module.exports = {
  app
};