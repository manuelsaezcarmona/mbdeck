const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/user.model');
const {
  getAllUsers, getUserById, addUser, deleteUser, updateUser, addRecipeToUser, deleteRecipeToUser,
} = require('./user.controller');

jest.mock('../models/user.model');

dotenv.config();

describe('Give the user controller', () => {
  let req;
  let res;
  let next;
  beforeEach(() => {
    req = { params: {} };
    req.header = jest.fn().mockReturnValue();
    res = {};
    res.send = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    next = jest.fn();
  });
  afterAll(() => {
    mongoose.disconnect();
  });
  describe('When getAllUsers is triggered', () => {
    describe('And it works (promise resolved)', () => {
      beforeEach(() => {
        User.find.mockReturnValue({
          populate: jest.fn().mockResolvedValue([]),
        });
      });
      test('User model exists and have a method "find"', () => {
        expect(User.find).toBeTruthy();
      });
      test('Then call res', async () => {
        await getAllUsers(req, res, next);
        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And it does not works (promise rejected)', () => {
      beforeEach(() => {
        User.find.mockReturnValue({
          populate: jest.fn().mockRejectedValue(new Error()),
        });
      });
      test('User model exists and have a method "find"', () => {
        expect(User.find).toBeTruthy();
      });
      test('Then call next', async () => {
        await getAllUsers(req, res, next);
        expect(res.json).not.toHaveBeenCalled();
        expect(next).toHaveBeenCalled();
      });
    });
  });
  describe('When getUserById is triggered', () => {
    describe('Then  id is found (promise resolved)', () => {
      beforeEach(() => {
        req.user = {
          _id: '619516dd75bcdf9b77e6690c',
        };
        User.findById.mockReturnValue({
          populate: jest.fn().mockResolvedValue([]),
        });
      });
      test('User Model exist and have method findId', async () => {
        await getUserById(req, res, next);
        expect(User.findById).toBeTruthy();
      });
      test('Then call res.json', async () => {
        await getUserById(req, res, next);
        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('Then id not found (promise rejected)', () => {
      beforeEach(() => {
        req.user = {
          _id: '',
        };
        User.findById.mockReturnValue({
          populate: jest.fn().mockRejectedValue(new Error()),
        });
      });
      test('User Model exist and have method findId', async () => {
        await getUserById(req, res, next);
        expect(User.findById).toBeTruthy();
      });
      test('Then call next', async () => {
        await getUserById(req, res, next);
        expect(res.json).not.toHaveBeenCalled();
        expect(next).toHaveBeenCalled();
      });
    });
  });
  describe('When addUser is triggered', () => {
    describe('And user is trying to add (promise is resolved', () => {
      beforeEach(() => {
        User.create.mockResolvedValue({});
      });
      test('should user model exist and have a method create', () => {
        expect(User.create).toBeTruthy();
      });
      describe('And username is present', () => {
        beforeEach(() => {
          req.body = {
            username: 'Manu',
            email: 'manu@email.com',
            pass: '1234',
          };
        });
        test('then call json', async () => {
          await addUser(req, res, next);
          expect(res.json).toHaveBeenCalled();
        });
      });
      describe('And username is not present', () => {
        beforeEach(() => {
          req.body = {
            username: '',
            pass: '',
          };
        });
        test('then call next', async () => {
          await addUser(req, res, next);
          expect(next).toHaveBeenCalled();
        });
      });
    });
    describe('And user cant added (promise is rejected)', () => {
      beforeEach(() => {
        req.body = {
          username: 'Manu',
          pass: '1234',
        };
        User.create.mockRejectedValue({});
      });
      test('Then call next', async () => {
        await addUser(req, res, next);
        expect(res.json).not.toHaveBeenCalled();
        expect(next).toHaveBeenCalled();
      });
    });
  });
  describe('When deleteUser is triggered', () => {
    describe('And id exists', () => {
      beforeEach(() => {
        req.user = {
          _id: '619516dd75bcdf9b77e6690c',
        };
        User.findByIdAndDelete.mockResolvedValue({});
      });
      test('User model exist and have method findByIdAndDelete', () => {
        expect(User.findByIdAndDelete).toBeTruthy();
      });
      test('Then call start 202 & json', async () => {
        await deleteUser(req, res, next);
        expect(res.status).toHaveBeenCalledWith(202);
        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And id no exists', () => {
      beforeEach(() => {
        req.user = {
          _id: '',
        };
        User.findByIdAndDelete.mockResolvedValue();
      });
      test('User model exist and have method findByIdAndDelete', () => {
        expect(User.findByIdAndDelete).toBeTruthy();
      });
      test('Then call start 404 & json', async () => {
        await deleteUser(req, res, next);
        expect(res.status).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalled();
      });
      describe('And delection its no possible (promise rejected)', () => {
        beforeEach(() => {
          req.params.id = '61a62b170d9b6d76ff802cf1';
          User.findByIdAndDelete.mockRejectedValue();
        });
        test('Then call next(error)', async () => {
          await deleteUser(req, res, next);
          expect(res.json).not.toHaveBeenCalled();
        });
      });
    });
  });
  describe('When updateUser is triggered', () => {
    describe('And user is updated (resolved)', () => {
      beforeEach(() => {
        req.user = {
          _id: '619516dd75bcdf9b77e6690c',
        };
        req.body = {
          email: 'manu@email.com',
        };
        User.findByIdAndUpdate.mockResolvedValue([]);
      });
      test('should exist and call to method  findByIdAndUpdate', () => {
        expect(User.findByIdAndUpdate).toBeTruthy();
      });
      test('Then call json', async () => {
        await updateUser(req, res, next);
        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And user is updated (resolved)', () => {
      beforeEach(() => {
        req.user = {
          _id: '',
        };
        req.body = {};
        User.findByIdAndUpdate.mockRejectedValue([]);
      });
      test('User model exists and have a method "findByIdAndUpdate"', () => {
        expect(User.findByIdAndUpdate).toBeTruthy();
      });
      test('Then call next', async () => {
        await updateUser(req, res, next);
        expect(res.json).not.toHaveBeenCalled();
        expect(next).toHaveBeenCalled();
      });
    });
  });
  describe('When addRecipeToUser is triggered', () => {
    describe('And added Recipe To userRecipes (resolve)', () => {
      beforeEach(() => {
        req.user = {
          _id: '619516dd75bcdf9b77e6690c',
        };
        req.params.recipeid = '61a5f3aac13b6a68fbfa7f0c';
        req.body = {};

        User.findById.mockReturnValue({
          _id: mongoose.Types.ObjectId(req.params.id),
          recipes: [],
          save: jest.fn(),
        });
      });
      test('User model exists and have a method "findById"', () => {
        expect(User.findById).toBeTruthy();
      });
      test('Recipe added to Favorites recipes"', async () => {
        await addRecipeToUser(req, res, next);
        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And failed to add an recipe (Promise rejected)', () => {
      beforeEach(() => {
        req.user = {
          _id: '619516dd75bcdf9b77e6690c',
        };
        req.params.recipeid = '61a5f3aac13b6a68fbfa7f0c';
        req.body = {};

        User.findById.mockRejectedValue({
          _id: mongoose.Types.ObjectId(req.params.id),
          recipes: [],
          save: jest.fn(),
        });
      });
      test('Should be called to next(error)', async () => {
        await addRecipeToUser(req, res, next);
        expect(res.json).not.toHaveBeenCalled();
        expect(next).toHaveBeenCalled();
      });
    });
  });
  describe('When deleteRecipeToUser is triggered', () => {
    describe('And deleted Recipe To userRecipes (resolve)', () => {
      beforeEach(() => {
        req.user = {
          _id: '619516dd75bcdf9b77e6690c',
        };
        req.params.recipeid = '61a5f3aac13b6a68fbfa7f0c';
        req.body = {};

        User.findById.mockReturnValue({
          _id: mongoose.Types.ObjectId(req.params.id),
          recipes: [],
          save: jest.fn(),
        });
      });
      test('Recipe deleted to Favorites recipes"', async () => {
        await deleteRecipeToUser(req, res, next);
        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And failed to deleted Recipe To userRecipes (rejected)', () => {
      beforeEach(() => {
        req.user = {
          _id: '619516dd75bcdf9b77e6690c',
        };
        req.params.recipeid = '61a5f3aac13b6a68fbfa7f0c';
        req.body = {};

        User.findById.mockRejectedValue({
          _id: mongoose.Types.ObjectId(req.params.id),
          recipes: [],
          save: jest.fn(),
        });
      });
      test('Recipe deleted to Favorites recipes"', async () => {
        await deleteRecipeToUser(req, res, next);
        expect(res.json).not.toHaveBeenCalled();
        expect(next).toHaveBeenCalled();
      });
    });
  });
});
