const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const init = require('./passport')
const knex = require ('./../db/knex');
const authHelpers = require('./_helpers');

const options = {};

init();

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false
},
  (email, password, done) => {
 //check db to see if the username existss
    knex('users').where({email}).first()
    .then((user) => {
      if(!user) return done(null, false);
      if(!authHelpers.comparePass(password, user.password)) {
        return done(null, false);
      } else {
        return done(null, user);
      }
    })
    .catch((err) => { return done(err); });
}));

module.exports = passport;


// Here we check if username exists in the database and then pass the appropriate results to Passport via the callback
//usersname exists?
// No -then false is returned
// yes - then compare the password if matches
// no - then false is returned
//yes - user is returned
