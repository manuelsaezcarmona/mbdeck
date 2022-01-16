const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { getAllRecipes, getRecipebyID } = require('./recipe.controller');
const Recipe = require('../models/recipe.model');

dotenv.config();
jest.mock('../models/recipe.model');

describe('Give the recipe controller', () => {
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
  describe('When getAllRecipes is triggered', () => {
    describe('And it works (promise is resolved)', () => {
      beforeEach(() => {
        req = { params: {} };
        Recipe.find.mockReturnValue([]);
      });
      test('Recipe model exists and have a method "find"', () => {
        expect(Recipe.find).toBeTruthy();
      });
      test('Then call send', async () => {
        await getAllRecipes(req, res, next);
        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And it does not works (promise is rejected)', () => {
      beforeEach(() => {
        Recipe.find.mockRejectedValue(new Error());
      });
      test('User model exists and have a method "find"', () => {
        expect(Recipe.find).toBeTruthy();
      });
      test('Then call next', async () => {
        await getAllRecipes(req, res, next);
        expect(res.json).not.toHaveBeenCalled();
        expect(next).toHaveBeenCalled();
      });
    });
  });
  describe('When getRecipebyID is triggered', () => {
    describe('And trying to add a Recipe (promise resolved)', () => {
      beforeEach(() => {
        req.user = {
          _id: '619516dd75bcdf9b77e6690c',
        };
        Recipe.findById.mockReturnValue({});
      });
      test('Recipe model exists and have a method "findByID', () => {
        expect(Recipe.findById).toBeTruthy();
      });
      test('Then call to response json', async () => {
        await getRecipebyID(req, res, next);
        expect(res.json).toHaveBeenCalled();
      });
    });
    describe('And the ID is not found prommise(rejected)', () => {
      beforeEach(() => {
        req.user = {
          _id: '619516dd75bcdf9b77e6690c',
        };
        Recipe.findById.mockRejectedValue(new Error());
      });
      test('Recipe model exists and have a method "findByID', () => {
        expect(Recipe.findById).toBeTruthy();
      });
      test('Then call next', async () => {
        await getRecipebyID(req, res, next);
        expect(res.json).not.toHaveBeenCalled();
        expect(next).toHaveBeenCalled();
      });
    });
  });
});
