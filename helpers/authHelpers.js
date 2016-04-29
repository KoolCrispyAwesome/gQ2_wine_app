module.exports = {

  currentUser(req, res, next){
    if(req.isAuthenticated()){
      res.locals.currentUser = req.user;
      return next();
    } else {
      return next();
    }
  },

  preventLoginSignup(req, res, next){
    if(req.isAuthenticated()){
      req.flash('error', 'Already logged in');
      return res.redirect(`/users/${req.user.id}`);
    } else {
      return next();
    }
  },

  ensureAuthenticated(req, res, next){
    if(req.isAuthenticated()){
      return next();
    } else {
      req.flash('error', 'Please log in first');
      return res.redirect('/auth/login');
    }
  },

  ensureCorrectUser(req, res, next){
    if(req.user.id === +req.params.id){
      return next();
    } else {
      req.flash('error', 'You do not have correct permissions');
      return res.redirect(`/users/${req.user.id}`);
    }
  }, 

  ensureFavorite(req, res, next){
    if(req.isAuthenticated()){
      return next();
    } else {
      req.flash('error', 'Please log in to save pairing');
      return res.redirect(`/matches/${req.params.id}`);
    }
  }

};