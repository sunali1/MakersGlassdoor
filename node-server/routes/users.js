var express = require('express');
var router = express.Router();
const knex = require('../db/knex')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

function Users(){
  return knex.table('users');
}
//queries
function getAllUsers(){
  return knex.select().from('users')
  .then(function(row) {console.log('querying database ', row); });
}
//Get all users
var users = 'users defined';

router.get('/login', (req, res) => {
  // console.log(users);
  users = getAllUsers();
  // console.log(users);
  res.render('login');
});

router.post('/login', (req, res, next) =>{

  // queries.add(req.body)
  //   .then(function(showId){
  //     return queries.getSingle(showId);
  //   })
  //   .then(function(show){
  //     res.status(200).json(show);
  //   })
  //   .catch(function(error){
  //     next(error);
  //   });


  // //Fake user and password for authentication at the moment as queries as above is not setup yet
  let fakeUser = {
    email: 'email@email.com',
    password: 'password'
  }

  // Query to database for the email inputed and fetch the "encrypted" password


  // Compare the "encrypted" password in the database with the password from the input form - use bcrypt

  if (req.body.password === fakeUser.password) { // Should be the Password in the database
    req.session.cookie = true; //Saving for persisting the session
    res.redirect('/');
  } else {
    console.log('Invalid user credentials');
  }
});

module.exports = router;
