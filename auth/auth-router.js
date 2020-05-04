const router = require('express').Router();

const User = require("./user/user-model.js")

const bcrypt = require("bcryptjs")

const generateToken = require("./generateToken")
const secret = require("../config/secret.js")
const jwt = require("jsonwebtoken")

router.post('/register', (req, res) => {
  // implement registration
  const user = req.body
  user.password = bcrypt.hashSync(user.password, 8)

  User.add(user)
    .then(newUser => {
      user.id = newUser[0]
      delete user.password
      const token = generateToken(user)
      res.status(201).json({ user, token })
    })
    .catch(err => {
      res.status(500).json({ message: "Error adding new user", err })
    })
});

router.post('/login', (req, res) => {
  // implement login
});

module.exports = router;
