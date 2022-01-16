/* eslint-disable no-underscore-dangle */
/* eslint-disable no-return-await */

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

async function checkPass(passw, user) {
  if (!user.pass) {
    return false;
  }
  return await bcrypt.compare(passw, user.pass);
}

function createJWT(user) {
  const tokenPayload = {
    username: user.username,
    id: user._id,
  };

  const secret = process.env.SECRET;
  return jwt.sign(tokenPayload, secret);
}

module.exports = { checkPass, createJWT };
