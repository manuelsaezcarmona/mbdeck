const mongoose = require('mongoose');
const User = require('../models/user.model');
const auth = require('../helpers/auth.help');
const { logUser } = require('./login.controller');

jest.mock('../models/user.model');
jest.mock('../helpers/auth.help');

describe('Given the login controller', () => {
  let req;
  let res;
  let next;
  beforeEach(() => {
    req = { params: {} };
    res = {};
    res.send = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    next = jest.fn();
  });
  afterAll(() => {
    mongoose.disconnect();
  });
  describe('When a user try to log (logUser is triggered)', () => {
    describe('And user and password are valid (promise resolved)', () => {
      beforeEach(() => {
        User.findOne.mockResolvedValue({
          username: 'Paco',
          email: 'paco@email.com',
          pass: '1234',
          _id: '61a5ea0c3ab7d88432e704c2',
        });
        auth.checkPass = jest.fn().mockResolvedValue(true);
        auth.createJWT = jest.fn().mockImplementation(() => 'token');
        req.body = {
          username: 'Paco',
          email: 'paco@email.com',
          pass: '1234',
        };
      });
      test('Then userModel exists and have method "findOne" ', () => {
        expect(User.findOne).toBeTruthy();
      });
      test('Then user should be logger with user & pass', async () => {
        const result = await logUser(req, res, next);
        expect(res.json).toHaveBeenCalled();
        expect(result).toBeTruthy();
      });
    });
    describe('And user or password not valid (promise resolved', () => {
      beforeEach(() => {
        User.findOne.mockResolvedValue({});
        auth.checkPass = jest.fn().mockResolvedValue(false);
        req.body = {
          username: 'Paco',
          pass: '',
        };
      });

      test('user not can be login', async () => {
        await logUser(req, res, next);
        expect(res.status).toHaveBeenCalledWith(401);
      });
    });
    describe('And user is not found (promise rejected)', () => {
      beforeEach(() => {
        User.findOne.mockRejectedValue([]);
        auth.checkPass = jest.fn().mockResolvedValue(false);
        req.body = {
          username: 'Paco',
          pass: '',
        };
      });
      test('User model exist and have a method "findOne', () => {
        expect(User.findOne).toBeTruthy();
      });
      test('User should not be logged and next error', async () => {
        await logUser(req, res, next);
        expect(res.status).toHaveBeenCalledWith(401);
      });
    });
  });
});
