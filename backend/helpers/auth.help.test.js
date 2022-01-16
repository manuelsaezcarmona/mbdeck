const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const auth = require('./auth.help');

dotenv.config();

jest.mock('bcryptjs');
jest.mock('jsonwebtoken');

describe('given the  checkpasword', () => {
  test('should.. call to encrypt pass & user', async () => {
    const passw = '';
    const user = { pass: '1234' };
    await auth.checkPass(passw, user);
    expect(bcrypt.compare).toHaveBeenCalled();
  });
  test('should.. return false if password not correct', async () => {
    const passw = '';
    const user = { pass: '' };
    const result = await auth.checkPass(passw, user);
    expect(result).toBe(false);
  });
});

test('Should ... create a tokenPayload', () => {
  const user = { username: 'manu', id: '' };
  auth.createJWT(user);
  expect(jwt.sign).toHaveBeenCalled();
});
