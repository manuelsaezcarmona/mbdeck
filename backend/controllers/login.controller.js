/* eslint-disable no-useless-return */
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const auth = require('../helpers/auth.help');
const User = require('../models/user.model');

dotenv.config();

async function logUser(req, res) {
  try {
    const { username, pass } = req.body;
    const user = await User.findOne({ username });

    const validPassword = await auth.checkPass(pass, user);
    if (user && validPassword) {
      const jwToken = jwt.sign({ _id: user.id }, process.env.SECRET);
      res.header('token', jwToken).send(jwToken);
      user.accessToken = jwToken;
      return jwToken;
    }
  } catch {
    res.status(401).json({ message: 'Invalid user or passwd' });
  }
  return res.status(401).json({ message: 'Invalid user or passwd' });
}

module.exports = { logUser };
